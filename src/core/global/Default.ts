

/**
 * Libary's default setting/etc.
 * Fallback of user `uncustomized` settings.
 */
export enum Default {

    /**
     * Submit delay in milliseconds of the form `validation and its submission`.
     * Via html form submit to `PHP` | Via `AJAX` , `fetch` or 'axios'.
     * The submit button will be enabled after the delay.
     * 
     */
    Submit_Delay = 500,

    /**
     * Rending delay in milliseconds.
     * Gives a little delay effect on:
     * 1. {@link Field.addClass} and {@link Field.focus} methods.
     * 2. {@link Label.display} and {@link Label.addClass} methods.
     * 
     * @note It is ideal to make {@link Default.Submit_Delay} > its value.
     * Because its better to enable submit button when the `field` and `label` css classes are rendered first.
     * 
     */
    Rerending_Delay = 300,

    //This can be used mostly when the library become big.
    /**
     * The langauage of the app to be used in Validation errors
     * 
     */
    Lang = 'en',

    
    /**
     * Css class to be injected for {@link Field.fieldNode | fieldnode} that has `success` validation
     * 
     */
    fieldSuccessClass = 'cf-field-success',
    
    /**
     * Css class to be injected for {@link Field.fieldNode | fieldnode} that has validation `error`
     * 
     */
    fieldErrorClass = 'cf-field-error',

    /**
     * Css class to be injected for {@link Label.labelNode | labelNode} that has `success` validation
     * 
     */
    labelSuccessClass = 'cf-label-success',

    /**
     * Css class to be injected for {@link Label.labelNode | labelNode} that has validation `error`
     * 
     */
    labelErrorClass = 'cf-label-error',


}