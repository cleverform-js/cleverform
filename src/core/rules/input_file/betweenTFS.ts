import { RuleObject } from "../../types/index";
import { isPositive, fileSizeUnits, convertFileSize } from "../../util/index";


/**
 * Between Total File Size
 *
 * All selected files under validation must have a TOTAL file size between specified min and max size.
 *
 * Min and max are inclusive!
 *
 * Intended for input type for MULTIPLE attribute.
 *
 */
export const betweenTFS: RuleObject = {

    name: 'betweenTFS',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects atleast 2 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let totalMinSize = paramsArr[0]
        let totalMaxSize = paramsArr[1]
        let sizeUnit = paramsArr[2] || 'bytes' //bytes default

        if (!isPositive(totalMinSize))
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1st parameter(min size) a positive number. Param '${totalMinSize}' detected.`);

        if (!isPositive(totalMaxSize))
            throw (`Field '${fieldName}' - '${this.name}' rule expects 2nd parameter(max size) a positive number. Param '${totalMaxSize}' detected.`);

        if (fileSizeUnits.indexOf(sizeUnit) === -1)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 3rd parameter value from size units [${fileSizeUnits.join(' , ')}] only . Param '${sizeUnit}' detected.`);

        // :max param must be greater than :min param validation.

        //tips
        if (paramsArr.length > 2)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects maximum of 3 parameters.\n ${paramsArr.length} parameters detected.`);

        // field attribute modifier (forced)
        field?.toggleAttribute('multiple', true, true)

        return {
            minSize: parseFloat(totalMinSize),
            maxSize: parseFloat(totalMaxSize),
            sizeUnit: sizeUnit
        };
    },

    validate: function (value, params, fieldNode) {

        console.log(fieldNode?.files)

        let fileLists = fieldNode?.files!;

        //return true if no selected file
        //True since no file to validate, and the user must put `require` to make sure their will be files to be validated .
        if (fileLists.length === 0)
            return true;

        /**
         * Total file size holder
         */
        let totalFileSize: number = 0;

        //Get the total of all file sizes
        for (let i = 0; i < fileLists.length; i++) {
            totalFileSize += fileLists[i].size
        }

        totalFileSize = convertFileSize(totalFileSize, params!.sizeUnit)

        // alert(totalFileSize);

        return totalFileSize <= params!.maxSize && totalFileSize >= params!.minSize

    }

}