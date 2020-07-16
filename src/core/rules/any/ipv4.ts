import { RuleObject } from "../../types/index";
import { isIPv4 } from "../../util/index";

/**
 * The field under validation must be an `ipv4` IP address.
 *
 */
export const ipv4: RuleObject = {

    name: 'ipv4',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no validation
        return null;
    },

    validate: function (value, params) {
        value = <string>value
        return isIPv4(value)
    }

}