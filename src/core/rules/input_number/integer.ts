import { RuleObject } from "../../types/index";
import { isInt } from "../../util/index";

/**
 * The field under validation must be an integer.
 * 
 * Regardless if its positive and negative as long as its a whole number.
 * 
 */
export const integer: RuleObject = {

    name: 'integer',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        return null;
    },

    validate: function (value, params) {
        return isInt(value)
    }

}