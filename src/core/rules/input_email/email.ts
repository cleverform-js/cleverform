import { RuleObject } from "../../types/index";

/**
 * The field under validation must be formatted as an e-mail address.
 * 
 */
export const email: RuleObject = {

    name: 'email',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName) {
        // no ruleParamsStr validation
        return null;
    },

    validate: function (value, params) {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (Array.isArray(value)){
            
            value.forEach(email => {
                if (!re.test(String(value).toLowerCase()))
                    return false // return false automatically if 1 email in array is not email format
            })

            return true;
        }else{
            return re.test(String(value).toLowerCase());
        }
        
    }

}