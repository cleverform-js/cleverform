 import { Error_Code as Ecode, Error_Type as Etype, App } from "../global/index";
import { CF_Error_Properties} from '../interfaces/CF_Error'


/**
 * CleverForm Errors object structure.
 * Instances used to be `thrown` for CF customized error log/display in the console.
 * Thrown instances will be `catch` in the {@link CleverForm.constructor} .
 * 
 */
class CF_Error implements CF_Error_Properties{


    /**
     * Initialize CleverForm Error and automatically log in the console.
     * @param code Library Error Code based on {@link Error_Code } Enum. It will be use to get errorDetail.
     * @param dynamicMsgDynamic Message that may contain helpul concrete data about the error.
     * 
     */
    constructor(code: Ecode, private readonly dynamicMsg?: string) {

        let details = this.getDetails(code)
        
        this.code = details.code
        this.type = details.type
        this.desciption = details.desciption
        this.solutions = details.solutions
        
        this.log()

    }

    /**
     * Error code, its value is `number`.
     * Value must be based on {@link Ecode} Enumeration.
     * 
     */
    public readonly code: Ecode;
    
    /**
     * Error type, its value is `string`.
     * Value must be based on {@link Etype} Enumeration.
     * 
     */

    public readonly type: Etype;

    /**
     * Error descriptions based on {@link CF_Error.code | code}
     * 
     */
    public readonly desciption: string;

    /***
     * The solutions for the error.
     * Array of strings.
     * 
     */
    public readonly solutions: string[] | null;


    /**
     * Displaying Error details in Console for fast debugging.
    * 1. Console the Error details.
    * 2. Display error solutions, if their is available.
    *
    */
    private log(){

        // Line 1:  Print error details
        console.error(`[${App.Initial} warning] : ${this.desciption} ${ this.dynamicMsg || '' }  \n\n [Error Code: ${this.code}] - ${this.type}`)

        // Line 2:   Print  possible solutions with warn(orange log) if their is recommended solution
        if (this.solutions) {
            console.warn(`Posible solution/s:\n\n- ${this.solutions.join('\n- ')} \n\n`)
        }

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
                    type: Etype.Init_Error,
                    desciption: 'Form not found in the DOM with the provided `form id`.',
                    solutions: [
                        'Double Check your `form id` in HTML code.',
                        'Must match the provided `id` propery/element inside `configObject` parameter of `CleverForm(configObject)`.'
                    ]
                }

            case Ecode.Form_Id_Not_In_Form_Tag:

                return {
                    code: Ecode.Form_Id_Not_In_Form_Tag,
                    type: Etype.Init_Error,
                    desciption: "Provided `form id` was used by non `<form>` tag/element in the DOM.",
                    solutions: [
                        'Use your provided `form id` in a `<form>` tag only.',
                        'Other HTML tag\'s id attribute must NOT be the same by your `form id`.'
                    ]
                }

            case Ecode.Form_Already_Initialized:

                return {
                    code: Ecode.Form_Already_Initialized,
                    type: Etype.Init_Error,
                    desciption: 'Provided form id was already initialized by other CleverForm instance.',
                    solutions: [
                        'Instantiate provided form id only once.',
                    ]
                }


            case Ecode.Constructor_No_New_Keyword:

                return {
                    code: Ecode.Constructor_No_New_Keyword,
                    type: Etype.Init_Error,
                    desciption: 'CleverForm is a `constructor` function and should be called with the `new` keyword.',
                    solutions: [
                        'Use `new` keyword before `CleverForm` to create a CleverForm instance',
                        `Example: var myInstance = new CleverForm(dataObject);`,
                    ]
                }


            // case Error_Code:

            //     return {
            //         code: Error_Code,
            //         type: Error_Type,
            //         desciption: "",
            //         solutions: [
            //             ``,
            //         ]
            //     }


            // case Error_Code:

            //     return {
            //         code: Error_Code,
            //         type: Error_Type,
            //         desciption: "",
            //         solutions: [
            //             ``,
            //         ]
            //     }


            // case Error_Code:

            //     return {
            //         code: Error_Code,
            //         type: Error_Type,
            //         desciption: "",
            //         solutions: [
            //             ``,
            //         ]
            //     }




            default:
                return {
                    code: Ecode.Unknown_Error_Code,
                    type: Etype.Unknown_Error,
                    desciption: "Unknown CleverForm Error detected.",
                    solutions: [
                        'Submit issue request to the developer via Github',
                        `Ask Google :)`
                    ]
                }
        }
    }

}

export default CF_Error