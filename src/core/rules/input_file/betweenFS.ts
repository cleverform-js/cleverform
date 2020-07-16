import { RuleObject } from "../../types/index";
import { isPositive, fileSizeUnits, convertFileSize } from "../../util/index";


/**
 * Between File Size
 * 
 * The selected file under validation must have file size between specified .
 *
 * Min and max are inclusive!
 * 
 * If the file input tag is MULTIPLE, this rule apply for every selected file ( File in FileList)
 *
 */
export const betweenFS: RuleObject = {

    name: 'betweenFS',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects atleast 2 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let minSize = paramsArr[0]
        let maxSize = paramsArr[1]
        let sizeUnit = paramsArr[2] || 'bytes' //bytes default

        if (!isPositive(minSize))
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1st parameter(min size) a positive number. Param '${minSize}' detected.`);
        
        if (!isPositive(maxSize))
            throw (`Field '${fieldName}' - '${this.name}' rule expects 2nd parameter(max size) a positive number. Param '${maxSize}' detected.`);

        if (fileSizeUnits.indexOf(sizeUnit) === -1)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 3rd parameter value from size units [${fileSizeUnits.join(' , ')}] only . Param '${sizeUnit}' detected.`);

        // :max param must be greater than :min param validation.

        //tips
        if (paramsArr.length > 2)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects maximum of 3 parameters.\n ${paramsArr.length} parameters detected.`);

        return {
            minSize: parseFloat(minSize),
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
            if ( !(fileSize <= params!.maxSize && fileSize >= params!.minSize) ) {
                return false;
            }

        }

        //if all validation is finished passed, return true
        return true;

    }

}