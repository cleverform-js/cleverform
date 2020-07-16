import { RuleObject } from "../../types/index";
import { isPositive, isPositiveInt } from "../../util/index";


/**
 * Exact Selected files
 * 
 * Selected files must be  equal to exact file count param;
 *
 */
export const exactFiles: RuleObject = {

    name: 'exactFiles',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let exactFileCount = paramsArr[0]

        if (!isPositiveInt(exactFileCount))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a positive integer parameter. Param '${exactFileCount}' detected.`);

        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);
        

        // field attribute modifier (forced)
        field?.toggleAttribute('multiple', true, true)
        
        return {
            exactFileCount: parseInt(exactFileCount)
        };
    },

    validate: function (value, params, fieldNode) {

        let fileLists = fieldNode?.files!

        return fileLists.length === params!.exactFileCount
    }

}