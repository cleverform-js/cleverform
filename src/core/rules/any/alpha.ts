import { RuleObject } from "../../types/index";

/**
 * The field under validation must be entirely alphabetic characters.
 * 
 */
export const alpha: RuleObject = {

    name: 'alpha',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no ruleParamsStr validation
        return null;
    },

    validate: function (value , params) {
        value = <string> value
        
        return /^[a-zA-Z ]+$/i.test(value.trim() );
    }

}