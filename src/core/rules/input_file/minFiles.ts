import { RuleObject } from "../../types/index";
import { isPositive, isPositiveInt } from "../../util/index";


/**
 * Minimum Selected files
 * 
 * Selected files must be greater than or equl to Minimum files;
 *
 */
export const minFiles: RuleObject = {

    name: 'minFiles',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 1 parameter.`);

        let paramsArr = ruleParamsStr.split(',').map((str) => str.trim())

        let min = paramsArr[0]

        if (!isPositiveInt(min))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a positive integer parameter. Param '${min}' detected.`);

        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);

        // field attribute modifier (forced)
        field?.toggleAttribute('multiple', true, true)

        return {
            min: parseInt(min)
        };
    },

    validate: function (value, params, fieldNode) {

        let fileLists = fieldNode?.files!

        return fileLists.length >= params!.min
    }

}