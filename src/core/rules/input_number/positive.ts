import { RuleObject } from "../../types/index";
import { isPositive } from "../../util/index";

/**
 * The field under validation must be a positive number.
 * 
 * Regardless if its whole number or with decimal.
 * 
 */
export const positive: RuleObject = {

    name: 'positive',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        return null;
    },

    validate: function (value, params) {
        return isPositive(value)
    }

}