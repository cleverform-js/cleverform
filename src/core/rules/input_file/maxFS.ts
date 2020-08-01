import { RuleObject } from "../../types/index";
import { isPositive, fileSizeUnits, convertFileSize } from "../../util/index";


/**
 * Maximum File Size
 * 
 * The selected file under validation must have a maximum file size of the specified max size parameter. (per selected file).
 *
 */
export const maxFS: RuleObject = {

    name: 'maxFS',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects atleast 1 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let maxSize = paramsArr[0]
        let sizeUnit = paramsArr[1] || 'bytes' //bytes default

        if (!isPositive(maxSize))
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1st parameter a positive number. Param '${maxSize}' detected.`);

        if (fileSizeUnits.indexOf(sizeUnit) === -1)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 2nd parameter value from size units [${fileSizeUnits.join(' , ')}] only . Param '${sizeUnit}' detected.`);

        //tips
        if (paramsArr.length > 2)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 2 parameters.\n ${paramsArr.length} parameters detected.`);

        return {
            maxSize: parseFloat(maxSize),
            sizeUnit: sizeUnit
        };
    },

    validate: function (value, params, fieldNode) {

        let fileLists = fieldNode?.files!;

        //no files to validate
        if (fileLists.length === 0)
            return true;

        //loop all files and check its file size...
        for (let i = 0; i < fileLists.length; i++) {

            let fileSize = convertFileSize(fileLists[i].size, params!.sizeUnit)

            //return false automatically if 1 file is false
            if (!(fileSize <= params!.maxSize)) {
                return false;
            }

        }

        //if all validation is finished passed, return true
        return true;
    }

}