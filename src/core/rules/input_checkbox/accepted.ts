import { RuleObject } from "../../types/index";

/**
 * The field under validation must be checked to return True.
 * 
 */
export const accepted: RuleObject = {

    name: 'accepted',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        // field attribute modifier
        field?.toggleAttribute('required', true)

        // no ruleParamsStr validation
        return null;
    },

    validate: function (value, params , fieldNode) {

        return fieldNode!.checked;
    }

}