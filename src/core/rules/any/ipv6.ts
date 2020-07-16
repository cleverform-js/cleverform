import { RuleObject } from "../../types/index";
import { isIPv6 } from "../../util/index";

/**
 * The field under validation must be an `ipv6` IP address.
 *
 */
export const ipv6: RuleObject = {

    name: 'ipv6',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no validation
        return null;
    },

    validate: function (value, params) {
        value = <string>value
        return isIPv6(value)
    }

}