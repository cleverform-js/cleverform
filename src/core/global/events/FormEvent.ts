
/**
 * Event names for {@link CleverFormData}.
 * 
 */
export enum Form{

    /**
     * The form finished initialization.
     * 
     */
    onInit      =   'onInit',

    /**
     * 
     * The form have validation errors on its field/s.
     * 
     */
    onError     =   'onError',

    /**
     * The form have success validation.
     * 
     * Ready to be submitted via form normal submit or via AJAX.
     * 
     */
    onSuccess   =   'onSuccess',

}