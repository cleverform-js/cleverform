import { RuleObject } from "../../types/index";
import { isNumeric } from "../../util/index";

/**
 * The field number under validation must be less than or equal to a maximum.
 *
 */
export const max: RuleObject = {

    name: 'max',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {

        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects an number parameter.`);

        let paramsArr = ruleParamsStr.split(',')
        let max = paramsArr[0]?.trim()

        if (!isNumeric(max))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a valid number parameter. Param '${max}' detected.`);

        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);

        // field attribute modifier
        field?.setAttribute('max', max)

        return {
            max: parseFloat(max)
        };
    },

    validate: function (value, params) {
        value = <string>value

        return parseFloat(value) <= params!.max;
    }

}