import { FieldRulesAndParams } from "../types/index";
import Label from "../classes/Label";
import { CleverFormData } from "../classes/CleverFormData";

/**
 * Field class/constructor interface
 */
export interface FieldInterface{


    /**
     * The form where the field is belong to.
     */
    parentForm : CleverFormData,

    /**
     * DOM Form element/node reference
     */
    fieldNode: HTMLInputElement,

    /**
     * Name attribute value of the field
     */
    fieldName : string , 
    
    /**
     * The custom Name used for error msgs, ex 'f_name' => 'First name'
     */
    customName : string | null,

    /**
     * Form element tag name,
     * Ex: input,textarea,select,
     */
    tagName : string, // must use literal type? // 'input' | 'textarea' | 'select'

    /**
     * Type if input tag,
     * Ex. text, email, password, etc.
     */
    type : string | null

    /**
     * 
     */
    rules: FieldRulesAndParams,

    /**
     * Field rules in string,
     */
    rawRules: string,

    /**
     * Label instance object that handle the showing/removing of success/error Messages.
     */
    label : Label,

    /**
     * Current validation Error that the field has.
     */
    validationError : string | null,

    /**
     * Method for getting field value.
     * Different validation depending on the form input type and tag...
     */
    val: () => string | any[] | FileList | File;


    /**
     *  Add class to field node classList.
     */
    addClass : ( styleClass : string ) => void;

    /**
     * Remove class to field node classList.
     */
    removeClass: ( styleClass : string ) => void;

    /**
     * Focus on the field.
     */
    focus: () => void;

}