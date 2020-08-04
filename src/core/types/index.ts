
// Custom types, reusable types
// When custom type value here is changed, all other codes that uses this custom type will also be changed its value together

import Field from "../classes/Field";
import { Configuration } from "../interfaces/Configuration";



// /**
//  * Raw rules of whole Form in string structure.
//  */
// export type RulesInString = {
//     [fieldName: string]: string
// }

// /**
//  * Custom name structure
//  */
// export type CustomName = {
//     [fieldName: string]: string
// }


/**
 * Specific field (ruleName : params object) pair to be used in validation
 * ex. {
 *      maxLen : {
 *          params : {
 *              max : 10,
 *              ...// other params here depend on the validation rules
 *          }
 *      },
 *      ... //Next rule
 *    }
 */
export type FieldRulesAndParams = {
    [ruleName: string]: serializedParam
} | null



export type serializedParam = { [paramName : string] : any } | null


/**
 * Collection of validation rules object structure
 * 
 */
export type Rules = {

    /**
     * Rule name / (object of function of rules) pairs
     */
    [ruleName: string]: RuleObject
}

/**
 * Structure of a validation rule object.
 * 
 */
export type RuleObject = {

    /**
     * Validation rule name.
     * 
     * Ex: `required` , `maxLen` ...
     * 
     */
    name : string ,

    /**
     * True if the validation rules is default/built-in in the library.
     * 
     * Otherwise, validation rule is a customized validation rule.
     * 
     */
    default : boolean,

    /**
     * Check the params supplied in the rawRules if minimum param length exists, and return the serialized
     * @param ruleParamsStr The rules and params supplied in string. Ex . 'minLeng:3'
     * @param fieldName The field name attribute value
     * @param field The {@link Field} instance.
     * 
     * @returns Return object collection of [param name: param value] or null , depends on the validation rules. Varies depends on param.
     * 
     */
    checkAndSerializeParams: (ruleParamsStr: string, fieldName: string, field?: Field) => serializedParam,

    /**
     * Method that check the actual validation
     * 
     * @param value The field value to be validated
     * @param serializedParam Serialized parameter(returned  by checkAndSerializeParams method) supplied by user.
     * @param fieldNode The {@link Field.fieldNode | field Node}  where data will be extracted. ex. the value, or if checked(for checkbox)
     * @param field The {@link Field} instance.
     * 
     * @returns Return TRUE if the value in the param passed the validation rule, else return FALSE
     * 
     */
    validate: (value: any, params: serializedParam, fieldNode?: HTMLInputElement, field? : Field) => boolean;
}


/**
 * Structure of a customized validation rule object, almost same like RuleObject above
 * 
 */
export type CustomRuleObject = {

    /**
     * Validation rule name.
     */
    name: string,

    /**
     * @param value The field value to be validated
     * @returns Return TRUE if the value in the param passed the validation rule, else return FALSE
     * 
     */
    validate: (value: any) => boolean, // `  params: serializedParam, fieldNode?: HTMLInputElement, field?: Field ` will be added when the custom validation rule 

    /**
     * The custom error message of the validation rule
     */
    errorMessage : string
}

/**
 * Custom error messages that will override the default error messages
 */
export type CustomErrorMessage = {
    [ruleName : string] : string
}


/**
 * Error msgs template
 */
export type ErrorMessagesTemplate = {
    /**
     * lang example : 'en' or 'es'
     */
    [lang: string]: {

        [ruleName: string] : string
        
    }
}


/**
 * Produce form field's validation errors structure.
 */
export type FieldErrors = { [fieldName: string]: string };

/**
 * Produce form field's unvalidated/validated data structure.
 */
export type FormValData = { [fieldName: string]: any };



export type FormSettings = Configuration['settings']


/**
 * Object with collection of ( formField : Field constructor instance)
 */
export type FormFields = { [fieldName: string]:  Field };


export type FormStates = {

    /**
     * the form is finished all initialization... Default must be FALSE
     */
    isInitialized: boolean,

    /**
     * the form is currently submitting... Default FALSE
     */
    isSubmitting: boolean,

    /**
     * the current errors(objects) of the form of the last submit with error, reset this to null when form has no more error
     */
    activeErrors: FieldErrors | null,

    /**
     * an async activity is fetching (from server)...
     */
    isFetchingData: false,

    /**
     * counter of form submit try with errors , 0 start.
     */
    attemptsWithError: number,

};

// export type CssClass = {

//     /**
//      * Custom CSS class to be injected when Field is success or error free
//      */
//     fieldSuccessClass: string | null;
//     /**
//      * Custom CSS class to be injected for Field with error
//      */
//     fieldErrorClass: string | null;
//     /**
//      * Custom CSS class to be injected in the specified label node when the connected field has no error
//      */
//     labelSuccessClass: string | null;
//     /**
//      * Custom CSS class to be injected in the specified label node when the connected field has error
//      */
//     labelErrorClass: string | null;
// }


//  ==================|  Callback functions    |==================

// /**
//  * Structure of Callback function onInit
//  */
// export type OnInitCallback = (() => void) | null

// /**
//  * Structure of Callback function onError.
//  * Events if a form get validation error on any rules when form is submitted.
//  * 
//  * @param errors Object of errors , [fieldName] : [errorMsg] value pairs.
//  * @param errorsCount The number of fields with error.
//  * @param attemptsWithError Count/flag of unsuccessful form submition. Form submit that encounter error in validation.
//  */
// export type OnErrorCallback = ((
//     errors?: FieldErrors,
//     errorsCount?: number,
//     attemptsWithError?: number
// ) => void) | null


// /**
//  * Structure of Callback function onSuccess.
//  * Events if a form has no error in form validation/rules when form issubmitted.
//  *
//  * @param validatedData Object of form fields data, [fieldName] : [field Value] value pairs.
//  * @param formSubmit The secured form Object in the DOM, hidden by the CF internally. Can be used for native form submit in HTML (not AJAX).
//  */
// export type OnSuccessCallback = ((
//     validatedData?: ValidatedData,
//     formSubmit?: any // any to be changed?
// ) => void) | null