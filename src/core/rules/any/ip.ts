import { RuleObject } from "../../types/index";
import { isIPv4, isIPv6 } from "../../util/index";

/**
 * The field under validation must be an IP address.
 * 
 * Either `ipv4` or `ipv6` format.
 *
 */
export const ip: RuleObject = {

    name: 'ip',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no validation
        return null;
    },

    validate: function (value, params) {
        value = <string>value
        return isIPv4(value) || isIPv6(value)
    }

}