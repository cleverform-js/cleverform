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

            console.log(fields)

            for (const fieldName in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
                    
                    Object.defineProperty(this, fieldName, {
                        get() { return fields[fieldName].val() },
                        set(newVal) { return fields[fieldName].setVal(newVal) },
                    });

                    // console.log(fieldName)
                    
                }
            }

            Object.freeze(this)

        }catch (error) {

            if (!(error instanceof CF_Error) ){
                new CF_Error( Error_Code.Unknown_Error_Code, error );
                throw error;
            }

            
        }        

    }

    public id!: any;



    // same like Vue.component , for creating component
    // static createRule = " **Function here for creating rule for the library user , must refer to another folder inside source like public api** ";

    // create a static function here for removing cssDomInjector injected css in the DOM. ?

}

export default CleverForm