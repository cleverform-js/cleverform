import { RuleObject } from "../../types/index";
import { isPositive, fileSizeUnits, convertFileSize } from "../../util/index";


/**
 * Maximum Total File Size
 * 
 * All selected files under validation must have a maximum TOTAL file size of the specified max size.
 *
 */
export const maxTFS: RuleObject = {

    name: 'maxTFS',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName , field) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects atleast 1 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let totalMaxSize = paramsArr[0]
        let sizeUnit = paramsArr[1] || 'bytes' //bytes default

        if (!isPositive(totalMaxSize))
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1st parameter a positive number. Param '${totalMaxSize}' detected.`);

        if (fileSizeUnits.indexOf(sizeUnit) === -1)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 2nd parameter value from size units [${fileSizeUnits.join(' , ')}] only . Param '${sizeUnit}' detected.`);

        //tips
        if (paramsArr.length > 2)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 2 parameters.\n ${paramsArr.length} parameters detected.`);
        
        // field attribute modifier (forced)
        field?.toggleAttribute('multiple', true, true)

        return {
            maxSize: parseFloat(totalMaxSize),
            sizeUnit: sizeUnit
        };
    },

    validate: function (value, params, fieldNode) {

        let fileLists = fieldNode?.files!;

        //no files to validate
        if (fileLists.length === 0)
            return true;

        /**
         * Total file size holder
         */
        let totalFileSize : number = 0;

        //Get the total of all file sizes
        for (let i = 0; i < fileLists.length; i++) {
            totalFileSize += fileLists[i].size
        }

        totalFileSize = convertFileSize(totalFileSize, params!.sizeUnit)

        return totalFileSize <= params!.maxSize
    }

}