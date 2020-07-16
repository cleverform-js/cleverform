import { RuleObject } from "../../types/index";
import { isNumeric } from "../../util/index";

/**
 * The field under validation must be numeric.
 *  
 * Regardless if its wholenumber or decimal.
 * 
 * Regardless if its positive and negative.
 * 
 */
export const numeric: RuleObject = {

    name: 'numeric',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {

        // field attribute modifier
        field?.setAttribute('step', "any")

        return null;
    },

    validate: function (value, params) {
        return isNumeric(value)
    }

}