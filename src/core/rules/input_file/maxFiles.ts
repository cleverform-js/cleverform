import { RuleObject } from "../../types/index";
import { isPositive, isPositiveInt } from "../../util/index";


/**
 * Maximum Selected files
 * 
 * Selected files must be less than or equl to max files.
 *
 */
export const maxFiles: RuleObject = {

    name: 'maxFiles',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let max = paramsArr[0]

        if (!isPositiveInt(max))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a positive integer parameter. Param '${max}' detected.`);

        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);


        // field attribute modifier (forced)
        field?.toggleAttribute('multiple', true, true)
        
        return {
            max: parseInt(max)
        };
    },

    validate: function (value, params, fieldNode) {

        let fileLists = fieldNode?.files!

        return fileLists.length <= params!.max
    }

}