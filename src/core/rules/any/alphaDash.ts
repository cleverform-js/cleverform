import { RuleObject } from "../../types/index";

/**
 * The field under validation may have alpha-numeric characters, as well as dashes and underscores.
 * 
 */
export const alphaDash: RuleObject = {

    name: 'alphaDash',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no ruleParamsStr validation
        return null;
    },

    validate: function (value, params) {
        value = <string>value

        return /^[a-zA-Z0-9 _-]+$/i.test(value.trim());
    }

}