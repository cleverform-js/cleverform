import { RuleObject } from "../../types/index";

/**
 *  This is intended for checkbox field. The field under validation must be accepted/checked.
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