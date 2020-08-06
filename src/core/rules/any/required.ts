import { RuleObject } from "../../types/index";

/**
 * The field under validation is required and must have a value..
 *
 */
export const required: RuleObject = {

    name: 'required',
    default : true,
    
    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        // field attribute modifier
        field?.toggleAttribute('required' , true)


        // no validation
        return null;
    },

    validate: function (value, params , fieldNode) {
        
        /*
            value - string from input
            params - contains null

            @validation : value must not be emty
        */

        /**
         * intended for multi select, and multi file?
         */

        
        if (fieldNode!.type === "file") {

            if(fieldNode!.multiple){
                return value.length > 0 ? true : false;
            }else{
                return value ? true : false;
            }

        }else{

            //checking array
            if (Array.isArray(value)) {
              return value.length > 0 ? true : false;
            }

            //checking string
            value = <string>value;
            return value && value.trim().length > 0 ? true : false;

        }

        
        
    }

}