import { RuleObject } from "../../types/index";

/**
 * The field under validation must be entirely alpha-numeric characters.
 * 
 */
export const alphaNum: RuleObject = {

    name: 'alphaNum',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no ruleParamsStr validation
        return null;
    },

    validate: function (value, params) {
        value = <string>value

        return /^[a-zA-Z0-9 ]+$/i.test(value.trim());
    }

}