import { RuleObject } from "../../types/index";
import { isNumeric } from "../../util/index";

/**
 * The field number under validation must be greater than or equal to a minimum.
 *
 */
export const min: RuleObject = {

    name: 'min',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {

        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects an number parameter.`);

        let paramsArr = ruleParamsStr.split(',')
        let min = paramsArr[0]?.trim()

        if (!isNumeric(min))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a valid number parameter. Param '${min}' detected.`);

        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);

        // field attribute modifier
        field?.setAttribute('min', min)

        return {
            min: parseFloat(min)
        };
    },

    validate: function (value, params) {
        value = <string>value
        
        return parseFloat(value) >= params!.min;
    }

}