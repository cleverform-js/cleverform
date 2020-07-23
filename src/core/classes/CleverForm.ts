import { Configuration } from '../interfaces/Configuration'
import { formCollections } from '../states/index'
import { Error_Code } from '../global/index';
import CF_Error from './CF_Error';
import { cssDomInjector } from '../assets/cssDomInjector';


//Inject Css styles in the DOM head style
cssDomInjector();


// It only holds its form ID, the other elements are getters accessing its value in the formState or forms collection
// Instances are like an access pass for the Library app internally since it hold the id of the form instance.
// [[include: pangalawa.md]]

/**
 * 
 * Constructor function for creating CleverForm Instance.
 * This the library facade, all public API is here.
 * 
 * When having multiple form in a page, every HTML form must be initialized separately.
 * 
 * @Example 
 * ```javascript
 * var registrationForm =  new CleverForm(ConfigObject);
 * var loginForm =  new CleverForm(ConfigObject);
 * ```
 * 
 * @Note Dont forget to use the `new` keyword prefix in instantiation.
 * 
 * @Note All codes must only be inside the constructor function because if not everything will be exposed in the library facade.
 * 
 */

class CleverForm{

    /**
     * Initialization of instance.
     * 
     * @param config The configuration/options object.
     * 
     */
    constructor(config: Configuration){
        
        try {

            //check if they uses 'new' keyword
            if (!(this instanceof CleverForm))
                throw new CF_Error( Error_Code.Constructor_No_New_Keyword );

            Object.defineProperty(this, "id", { get: function () {
                    return config.id;
                }
            })
            
            const cfData = formCollections.addNewForm(config);
            const fields = cfData.fields;

            // to be removed
            console.log(fields)

            // Adding getters and setters facade for every field in the form

            for (const fieldName in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
                    
                    Object.defineProperty(this, fieldName, {
                        get() { return fields[fieldName].val() },
                        set(newVal) { return fields[fieldName].setVal(newVal) },
                    });

                    // console.log(fieldName)
                    
                }
            }

            // Adding validate() that trigger CleverForm.startValidate() method
                // Object.defineProperty(this, 'validate', {
                //     get() {
                //         // return a  function to be executed
                //         return function () {
                //             cfData.startValidate()
                //         }
                //     },
                // });


            // Adding reset() that trigger CleverForm.startValidate() method
                // Object.defineProperty(this, 'reset', {
                //     get() {
                //         // return a  function to be executed
                //         return function () {
                //             return cfData.reset()
                //         }
                //     },
                // });

            Object.freeze(this)

        }catch (error) {

            // if CF unknown error caught
            if (!(error instanceof CF_Error) ){
                new CF_Error( Error_Code.Unknown, error );
                throw error;
            }

            
        }        

    }

    public id!: any;

    /**
     * Trigger CleverFormData form validation at runtime.
     * 
     */

    public validate() {
        formCollections.forms[this.id].startValidate()
    }


    /**
     * Reset the form, remove the error messages in the DOM and return the data that are reset.
     * 
     */

    public reset() {
        return formCollections.forms[this.id].reset()

    }

    /**
     * Return the unvalidated form fields data.
     * 
     */
    
    public rawData() {
        return formCollections.forms[this.id].getData()

    }



    // same like Vue.component , for creating component
    // static createRule = " **Function here for creating rule for the library user , must refer to another folder inside source like public api** ";

    // create a static function here for removing cssDomInjector injected css in the DOM. ?

}

export default CleverForm