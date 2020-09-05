import { RuleObject } from "../../types/index";
import { isPositiveInt } from "../../util/index";

/**
 * The field string length under validation must be less than or equal to a maximum.
 * 
 */
export const maxLen: RuleObject = {

    name: 'maxLen',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {

        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects an integer parameter.`);

        let paramsArr = ruleParamsStr.split(',')
        let [max] = paramsArr

        if (!isPositiveInt(max))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a positive integer parameter. Param '${max}' detected.`);
        
        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);

        // field attribute modifier
        field?.setAttribute('maxlength', max)

        return {
            max: parseInt(max)
        };
    },

    validate: function (value, params) {
        value = <string>value
        /*
            value - string from input
            params - contains only max attribute

            @validation : value length must less than or equal to max  

        */
        return value.trim().length <= params!.max;

    }

}