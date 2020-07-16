import { RuleObject } from "../../types/index";
import { isNegative } from "../../util/index";

/**
 * The field under validation must be a negative number.
 * 
 * Regardless if its whole number or with decimal.
 * 
 */
export const negative: RuleObject = {

    name: 'negative',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        return null;
    },

    validate: function (value, params) {
        return isNegative(value)
    }

}