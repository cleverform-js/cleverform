
/**
 * 
 * Form events are something that has happened inside the CleverForm program that you can respond to.
 * 
 * For example if you want to respond to the form after its initialization , on form validation errors or on form success validation.
 * You can do it easily by listening to an event by assigning a `listener`/`callback function` to that event `name`.
 * 
 * There are 3 (three) form event names you can listen to, the `onInit`, `onError` and `onSuccess`
 * 
 * All of the three event names are sub-properties of Configuration's {@link Configuration.formEvents | `formEvents`}  property.
 * 
 * @Example
 * 
 * ``` javascript
 * 
 *  var regForm = new CleverForm({
 *   id: "registrationForm",
 *   rules: {...},
 *   
 *   //the 3 event names are sub properties of `formEvents`
 * 
 *   formEvents: {
 *     
 *      //listener when the form finish its initialization.
 * 
 *            onInit : function () {
 *              //Your codes here you want to run.
 *              console.log('Registration form is now initialized!');
 *            },
 *             
 * 
 *      //listener when the form have validation errors.
 * 
 *            onError: function (errors, errorsCount, attemptsWithError) {
 * 
 *              //Your codes/logic here you want to run.
 *              //Ex. Displaying `errors` in a modal.
 * 
 *              console.log('The form have validation error/s');
 *              console.log('It has ' + errorsCount +' fields with validation error');
 *              console.log('Form submit attempts with error: ' + attemptsWithError );
 *             
 *              //print the errors object
 *              console.log(errors);
 * 
 *            },
 *             
 *            
 *      //listener when the form have success validation.
 * 
 *            onSuccess : function (validatedData, formSubmit) {
 *             
 *              //Your codes/logic here you want to run.
 *              //Ex. submit the `validatedData` via AJAX, fetch or axios
 * 
 *              console.log('The form have success validation.');
 *             
 *              //print the validatedData object
 *              console.log(validatedData);
 * 
 *              //if you still want to submit the form via `normal form submition`,
 *              //you can invoke the `formSubmit` parameter.
 *              formSubmit();
 *              
 *            },
 * 
 * 
 *   },
 *  });
 * 
 * ```
 * 
 */
export interface Form_Events {

    /**
    * Callback function on form initialization.
    * 
    * Events after all initialization is done.
    * 
    * @event
    */
    onInit?: () => void,

    /**
     * Callback function onError.
     * 
     * Events if a form get validation error on any rules when form is being submitted.
     *
     * You can pass 3 helping parameters to your callback function that holds information about the errors.
     * 
     * Parameters are:
     * 
     * @errors  Object of errors , [fieldName] : [errorMsg] value pairs.
     * @errorsCount  The number of fields with error.
     * @attemptsWithError  Count/flag of unsuccessful form submition. Form submit that encounter error in validation.
     * 
     * @event
     */
    onError?: (
        errors?: { [fieldName: string]: string },
        errorsCount?: number,
        attemptsWithError?: number
    ) => void


    /**
     * Callback function onSuccess.
     * 
     * Events if a form has no error in form validation rules when form is submitted.
     * 
     * You can pass 3 helping parameters to your callback function that holds information about the errors.
     * 
     * Parameters are:
     * 
     * @validatedData  Object of form fields data, [fieldName] : [field Value] value pairs.
     * @formData  validated data in aFormData instance structure. Can then be easily sent using the XMLHttpRequest.send() method.
     * @formSubmit  This is a DOM form.submit method, when you invoke this the form will be submitted via `Normal Form Submission`(ex. if you are submitting it via `PHP` )
     * 
     * @event
     */
    onSuccess?: (
        validatedData?: { [fieldName: string]: string },
        formData? : FormData,
        formSubmit?: any // any to be changed?
    ) => void
}