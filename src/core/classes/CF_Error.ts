 import { Error_Code as Ecode, App } from "../global/index";
import { CF_Error_Properties} from '../interfaces/CF_Error_Properties'


/**
 * CleverForm Error object structure.
 * Instances used to be `thrown` for CF customized error log/display in the console.
 * Thrown instances will be `catch` in the {@link CleverForm.constructor} .
 * 
 */
class CF_Error implements CF_Error_Properties{


    /**
     * Initialize CleverForm Error and automatically log in the console.
     * @param code Library Error Code based on {@link Error_Code } Enum. It will be use to get error details/solutions in the documentation.
     * @param concreteMsg Message that may contain helpul concrete data about the error.
     * 
     */
    constructor(code: Ecode, private readonly concreteMsg?: string) {

        let details = this.getDetails(code)
        
        this.code = details.code
        this.desciption = details.desciption
        
        this.log()

    }

    /**
     * Value must be based on {@link Error_Code} Enumeration.
     * 
     */
    public readonly code: Ecode;

    /**
     * Error descriptions based on {@link CF_Error.code | code}
     * 
     */
    public readonly desciption: string;



    /**
     * Displaying Error details in Console for fast debugging.
    * 1. Console the Error details.
    * 2. Display error solutions link in the documentation with .
    *
    */
    private log(){

        // Line 1:  Print error details
        console.error(`[${App.Initial} error] : ${this.desciption} ${ this.concreteMsg || '' } [Error Code: ${this.code}]`)

        // Line 2:   Print solutions link with warn(yellow log)
        console.warn(`Read more: www.cleverform.org/error-code#${this.code}`)

    }


    /**
    * Get the error details using the error  {@link Ecode |  code} Enumeration.
    * @param code Library Error Code
    * 
    */
    private getDetails(code: Ecode) : CF_Error_Properties{
        switch (code) {

            case Ecode.Form_Not_Found:

                return {
                    code: Ecode.Form_Not_Found,
                    desciption: 'Form not found in the DOM with the provided `form id`.',

                    // SOLUTIONS should be in the documentations (to save bytes), once added delete this comments.
                    
                    // solutions: [
                    //     'Double Check your `form id` in HTML code.',
                    //     'Must match the provided `id` propery/element inside `configObject` parameter of `CleverForm(configObject)`.'
                    // ]
                }

            case Ecode.Form_Id_Not_In_Form_Tag:

                return {
                    code: Ecode.Form_Id_Not_In_Form_Tag,
                    desciption: "Provided `form id` was used by non `<form>` tag/element in the DOM.",

                    // SOLUTIONS should be in the documentations (to save bytes), once added delete this comments.

                    // solutions: [
                    //     'Use your provided `form id` in a `<form>` tag only.',
                    //     'Other HTML tag\'s id attribute must NOT be the same by your `form id`.'
                    // ]
                }

            case Ecode.Form_Already_Initialized:

                return {
                    code: Ecode.Form_Already_Initialized,
                    desciption: 'Provided form id was already initialized by other CleverForm instance.',

                    // SOLUTIONS should be in the documentations (to save bytes), once added delete this comments.
                    
                    // solutions: [
                    //     'Instantiate provided form id only once.',
                    // ]
                }


            case Ecode.Constructor_No_New_Keyword:

                return {
                    code: Ecode.Constructor_No_New_Keyword,
                    desciption: 'CleverForm is a `constructor` function and should be called with the `new` keyword.',

                    // SOLUTIONS should be in the documentations (to save bytes), once added delete this comments.

                    // solutions: [
                    //     'Use `new` keyword before `CleverForm` to create a CleverForm instance',
                    //     `Example: var myInstance = new CleverForm(dataObject);`,
                    // ]
                }
            
            case Ecode.Unknown_Rule:

                return {
                    code: Ecode.Unknown_Rule,
                    desciption: 'Unknow validation rule used.'
                }

            case Ecode.Rules_Collision:

                return {
                    code: Ecode.Rules_Collision,
                    desciption: 'Rule names collision.'
                }

            
            case Ecode.Custom_Rule_Error:

                return {
                    code: Ecode.Custom_Rule_Error,
                    desciption: 'Custom validation rule error.'
                }


                

            default:
                return {
                    code: Ecode.Unknown,
                    desciption: "Unknown CleverForm Error detected.",

                    // SOLUTIONS should be in the documentations (to save bytes), once added delete this comments.

                    // solutions: [
                    //     'Submit issue request to the developer via Github',
                    //     `Ask Google :)`
                    // ]
                }
        }
    }

}

export default CF_Error