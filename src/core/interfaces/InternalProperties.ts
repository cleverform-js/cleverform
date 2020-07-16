import { FieldErrors, FormSettings, FormStates, FormFields } from "../types/index";

/**
 * Other property/elements of a CleverFormData instance besides from RequiredProperties.
 * 
 */
export interface InternalProperties {


    /**
     * Reference of Form node element.
     * 
     */
    formNode : HTMLFormElement,

    /**
     * Custom setting supplied by user
     * 
     */
    settings: FormSettings,

    /**
     * Form states
     * 
     */
    states: FormStates,

    /**
     * Form field collection
     * 
     */
    fields : FormFields



}