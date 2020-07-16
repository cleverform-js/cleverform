import { RuleObject } from "../../types/index";
import { isPositiveInt } from "../../util/index";

/**
 * The field string length under validation must be greater than or equal to a minimum.
 *
 */
export const minLen: RuleObject = {

    name: 'minLen',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {

        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects an integer parameter.`);

        let paramsArr = ruleParamsStr.split(',')
        let min = paramsArr[0]

        if (!isPositiveInt(min))
            throw (`Field '${fieldName}' - '${this.name}' rule expects a positive integer parameter. Param '${min}' detected.`);
        
        //tips
        if (paramsArr.length > 1)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);


        // field attribute modifier
        field?.setAttribute('minlength', min)

        return {
            min: parseInt(min)
        };
    },

    validate: function (value, params) {
        value = <string>value
        /*
            value - string from input
            params - contains only min attribute

            @validation : value length must greater than or equal to min  

        */
        return value.trim().length >= params!.min;
    }

}