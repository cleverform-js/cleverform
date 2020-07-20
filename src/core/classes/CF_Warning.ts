 import { Warning_Code as Wcode, App } from "../global/index";
import { CF_Warning_Properties} from '../interfaces/CF_Warning_Properties'


/**
 * CleverForm Warning object structure.
 * Instances used to be display in the browser console that will help developer to use the library properly.
 * This will not throw error unlike {@link CF_Error}, it will just display msg via `console.warn()`.
 * 
 */
class CF_Warning implements CF_Warning_Properties{


    /**
     * Initialize CleverForm Warning and automatically log in the console.
     * 
     * @param code Library Warning Code based on {@link Warning_Code } Enum. It will be use to get warning details/solutions in the documentation.
     * @param concreteMsg Message that may contain helpul concrete data about the warning.
     * 
     */
    constructor(code: Wcode, private readonly concreteMsg?: string) {

        let details = this.getDetails(code)
        
        this.code = details.code
        this.desciption = details.desciption
        
        this.log()

    }

    /**
     * Value must be based on {@link Warning_Code} Enumeration.
     * 
     */
    public readonly code: Wcode;

    /**
     * Warning descriptions based on {@link CF_Warning.code | code}
     * 
     */
    public readonly desciption: string;



    /**
    * Displaying Warning details in Console for tips/hints only, no interference at runtime.
    *
    */
    private log(){

        // Print warning details and more details link to the documentation with warn(yellow log)
        console.warn(`[${App.Initial} warn] : ${this.desciption} ${this.concreteMsg || ''}[Warning Code: ${this.code}]\n\nRead more: www.cleverform.org/warning-code#${this.code}`)

    }


    /**
    * Get the warning details using the  {@link Warning_Code } Enumeration.
    * 
    * @param code Library Warning Code
    * 
    */
    private getDetails(code: Wcode): CF_Warning_Properties{
        switch (code) {

            // case Wcode.Form_Not_Found:

            //     return {
            //         code: Wcode.Form_Not_Found,
            //         desciption: 'Form not found in the DOM with the provided `form id`.',
            //     }




            default:
                return {
                    code: Wcode.Unknown,
                    desciption: "Unknown CleverForm Warning detected.",
                }
        }
    }

}

export default CF_Error