import { Configuration } from '../interfaces/Configuration'
import { CleverFormData } from '../classes/CleverFormData'
/**
 * Cleverform instances data constainer.
 * Singleton pattern
 */

class FormCollections {

    // same as FormCollections.instance = new FormCollections()
    private static instance: FormCollections; 

    /**
     * The oject constainer of all data/states of CleverForm instances.
     * [formId] : [form data object] pairs.
     */
    public forms: { [formId: string]: CleverFormData};

    private constructor() {
        this.forms = {};
    }

    /**
     * Add new FormData instance to formCollections.
     * @param config The configuration/options object
     * 
     * @returns Return {@link CleverFormData} object.
     */

    public addNewForm(config: Configuration): CleverFormData {
        // validations are in FormData constructor
        return this.forms[config.id] = new CleverFormData(config)

        //to be deleted!! // for testing only
        // console.warn(`Current collection (${Object.keys(this.formCollections).length }):`, this.formCollections )
        
    }

    // /**
    //  * 
    //  * @param formId The id of the form in the DOM
    //  */

    // public getFormDataById(formId: string): FormData {

    //     return "wew";
    // }

    /**
     * Check if the form already exists in the formsState collection
     * @param formId Id of the form to check
     */
    public formExist( formId: string ) : boolean{

        return this.forms[formId] ? true : false;
    }

    /**
     * Get FormCollections instance. This will return the same instance always.
     * If static instance is empty, instantiate it for the first time.
     * 
     * @returns Return FormCollections class instance in Singleton pattern.
     */

    static getInstance() {

        if (!FormCollections.instance) {
            FormCollections.instance = new FormCollections();
        }
        return FormCollections.instance;
    }
}

/**
 * State container of all CF form instance.
 * Storage of all CF instances data in the whole App.  [Singleton pattern]
 */
const formCollections = FormCollections.getInstance()

export { formCollections }