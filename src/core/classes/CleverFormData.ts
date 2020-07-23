import { Error_Code, App } from '../global/index';
import { Configuration } from '../interfaces/Configuration';
// interfaces
import { InternalProperties } from '../interfaces/InternalProperties';

import { formCollections } from '../states/index';

// types
import { FormSettings, FormStates, FormFields, FormValData, FieldErrors } from '../types/index';
import CF_Error from './CF_Error';
import Field from './Field';
import { Default } from '../global/Default';
import SubmitButton from './SubmitButton';
import { EventEmitter } from './abstract/EventEmitter';
import { Form } from '../global/events/FormEvent';


/**
 * This hold the actual values/data of {@link Cleverform | CleverForm } instance.
 * The {@link Cleverform | CleverForm } instance only hold the form id, and that id is used to access {@link CleverFormData}
 * 
 */
export class CleverFormData extends EventEmitter implements InternalProperties{
    

   /**
    * Constructor.
    * 
    * @param config The configuration/options object
    * 
    */

    constructor(config: Configuration){

      //EventEmitter
      super();

      //passing data here
      this.configObj = config
      this.id = config.id;
      this.formNode = document.getElementById(config.id) as HTMLFormElement

      
      
      // validations here
      this.checkRequiredParam();        //   Still empty... to be created
      this.validateParam();             //   Still empty... to be created
      this.otherValidation(config.id)

      
       this.rules = config.rules;

       //passing callback function
       this.formEvents = config.formEvents
       this.addEventsInternally();

       this.cssClass = config.cssClass;
       this.setDefaultSettings()
       this.setDefaultStates()
       
       this.fields = this.getFormFieldsInfo();


       this.submitBtn = new SubmitButton(this)
       this.setNativeSubmit()
       this.setSubmitListener();
       
       this.checkIfHasFileInput();

       //Done all initialization
       this.states.isInitialized = true;
       this.$emit(Form.onInit , [])

    }

   /**
    * Form submit button Object
    * 
    */
   public submitBtn : SubmitButton;

   /**
    * Form node in the DOM
    * 
    */
   public formNode: HTMLFormElement;
   
   /**
    * Form custom events listener/calback functions holder.
    * 
    * To be added internally in the CleverFormData _events
    * 
    */
   public formEvents?: Configuration['formEvents'];
   
   /**
    * Form collection of {@link FormField} data.
    * 
    */
   public fields: FormFields;

   /**
    * Form custom Css classes for different field,label status.
    * This will be used to be inserted in field,label node class attribute depending on the validation status (success|Error).
    * 
    */
   public cssClass?: Configuration['cssClass'];

   /**
    * Form settings.
    * 
    */
   public settings!: FormSettings;

   /**
    * Form states.
    * 
    */
   public states!: FormStates;
    
   /**
    * Form id attribute value in the DOM.
    * 
    */
   public readonly id: string;

   /**
    * Form fields's validation rules.
    * Collection of fieldName and its validation rules based on {@link ConfigObject.rules} structure.
    * 
    */
   public rules: Configuration['rules'];

   /**
    * The field name of the last focused Field in the Html form.
    * Changes the value in {@link Field.validate} method
    * 
    */
   public focusedField : string | null = null;

   /**
    * The config/options object supplied in the CleverForm(data) facade
    * 
    */
   public configObj: Configuration;

   /**
    * Hold the form node native submit method of the form.
    * Since it will not be available in the `node` itself
    * This also binded the form `this` variable ready to invoke inside `CF App` ONLY.
    * 
    */
   private nativeSubmit!: () => void
   
   /**
    * Check if has input type field and modify its `enctype` attribute.
    * 
    * It is usefull since `enctype='multipart/form-data'` always forgotten
    * in the form attribute if its fields has input `type='file'`;
    * 
    * Forgetting enctype will put the files data in the `$_POST` global variable in `PHP`
    * instead in the `$_FILES` global variable.
    * 
    */
   private checkIfHasFileInput() : void{

      for (const fieldName in this.fields) {
         if (this.fields.hasOwnProperty(fieldName)) {

            if (this.fields[fieldName].type === 'file'){
               this.formNode.setAttribute('enctype', 'multipart/form-data')
               return // return automatically if one input is file
            }
            
         }
      }
      // for
   }


    /**
     * Add the custom Events to the listener of CleverForm Internally.
     * 
     */
   private addEventsInternally(){
      
      if (this.formEvents?.onInit)
         this.$on(Form.onInit, this.formEvents.onInit);

      if (this.formEvents?.onError)
         this.$on(Form.onError, this.formEvents.onError);
      
      if (this.formEvents?.onSuccess)
         this.$on(Form.onSuccess, this.formEvents.onSuccess);

   }

   /**
    * Hide the Form.submit native method in the DOM,
    * Avoid user to submit the Form in the console or any part of the App, 
    * except by invoking {@link CleverFormData.nativeSubmit | nativeSubmit }
    * 
    */
   private setNativeSubmit() : void {

      this.nativeSubmit = this.formNode.submit.bind(this.formNode);

      //change the value of the submit property on the formNode
      this.formNode.submit = () => {
         console.warn(`You can only submit the form via Cleverform.\n\ ${App.Name} managed form submition (with id of '${this.id}').`);
      }

   }

   /**
    * function that run the native submit
    * run other tasks before actual form normal submition in PHP for example.
    * 
    */

   private runNativeSubmit () : void{
      

      //disable the form submit button before the Native form submit to avoid multi submit for users with bad connections
      this.states.isSubmitting = true;
      this.submitBtn.reRender()

      this.nativeSubmit();
      
   }
   


   /**
    * Set the default Settings based on the FormSettings type
    * 
    */
   private setDefaultSettings() {

      // add a runtime checking of settings property type and throw CF error??????


      this.settings = {
         submitDelay: this.configObj?.settings?.submitDelay,
         lang: this.configObj?.settings?.lang,
         injectAttribute : this.configObj?.settings?.injectAttribute,
      }

      
   }

   /**
    * Set the default States based on the FormStates type
    * 
    */
   private setDefaultStates() {
      this.states = {
         isInitialized: false,
         isSubmitting: false,
         activeErrors: null,
         isFetchingData: false,
         attemptsWithError: 0,
      }
   }

   
    /**
     * Check if all required(minimun requirements) elements of {@link ConfigObject} object was supplied.
     * All element value validation is in the validateParam() method.
     * 
     */
    private checkRequiredParam() {

    }

    /**
     * Validate every values, check if every values adhere CF possible values (just like the possible rules)
     * 
     */
    private validateParam() {

    }

    /**
     * Remaining form validation and checking, before finishing initialization.
     * @param formId 
     * 
     */
    private otherValidation(formId: string) : void {

       //check if form element exists in the DOM
       if (!this.formNode)
          throw new CF_Error( Error_Code.Form_Not_Found, `(Form id: '${formId}')`);
          
       //check if DOM element queried is FORM tag
       if (this.formNode!.tagName !== 'FORM')
          throw new CF_Error(Error_Code.Form_Id_Not_In_Form_Tag, `('${formId}' id was found in <${this.formNode.tagName.toLowerCase()}> tag/element.)` )

       // check if form already exists in form Collection  
       if (formCollections.formExist(formId))
          throw new CF_Error(Error_Code.Form_Already_Initialized, `(Form id: '${formId}')` )
    }

    /**
     * Loop the Form field elements and return a collection of Field constructor instance
     * 
     * @returns Return FormFields Object
     */
    private getFormFieldsInfo() : FormFields{

       // Array of:
       // 1. Form input field.
       // 2. Form select tag
       // 3. Form textarea.

       let nodeFieldsArr = this.formNode!.querySelectorAll(
          
         // 1st - all input types with name attribute(not blank)
         // 2nd - all select tag with name attribute(not blank)
         // 3rd - all textarea tag with name attribute(not blank)
          'input[name]:not([name=""]) , select[name]:not([name=""]) , textarea[name]:not([name=""])'
       );

       let fields: FormFields = {}

       if (nodeFieldsArr.length > 0) {

         
          for (let i = 0; i < nodeFieldsArr.length; i++) {

             if (nodeFieldsArr[i].getAttribute("name")) {

                // extract attribute name -> rules -> parameters

                let node = nodeFieldsArr[i];
                let fieldName = nodeFieldsArr[i].getAttribute("name");
               //  alert(fieldName)
                if (fieldName === 'submit'){
                   continue
                }


                let customName = this.configObj.customName?.[fieldName!]
                let tagName = nodeFieldsArr[i].tagName;
                let type = nodeFieldsArr[i].getAttribute("type")?.toLowerCase(); // may be undefined else convert the type to lowercase
                let rawRules = this.rules[fieldName!]//nodeFieldsArr[i].getAttribute("cf-rules");
               //  console.warn(`${fieldName} : ${rawRules}`)
               //  console.log(this.rules)

                fields[fieldName!] = new Field(
                   this,
                   node as HTMLInputElement,
                   fieldName!,
                   customName || null, // used for displaying error
                   tagName,
                   type || null,
                   rawRules
                );


             } else {

                console.warn("Every form fields required a non blank \'name\' attribute.");

             }

          } //for loop closing... 

       } else {
          console.warn("No fields detected for future validation on form submit.");

       }


       return fields;

    }

    /**
     * Validate all fields of the form,
     * If their is error, it will be stored to Field validationError propery. 
     * 
     */

     private validateAllFields(){
         
         for (const fieldName in this.fields) {
            //Double check if not from prototype
            if (this.fields.hasOwnProperty(fieldName)) {
               const field = this.fields[fieldName];
               field.validate();
            }
         }

     }

   /**
    * Return all fields errors in object.
    * 
    */
   private getFieldsError() {

      let errors: FieldErrors = {};

      for (const fieldName in this.fields) {

         //Double check if not from prototype
         if (this.fields.hasOwnProperty(fieldName)) {
            const field = this.fields[fieldName];

            //add if there is validation error
            if (field.validationError) {
               errors[fieldName] = field.validationError;
            }

         }
      }

      return errors;

   }

   /**
    * Get the form data, fields data/value
    * 
    * @param onlyValidated Set true to return the validated data only( fields with out error). Default is false.
    */
   public getData(onlyValidated : boolean = false): FormValData{

      let data: FormValData = {};

      for (const fieldName in this.fields) {

         //Double check if not from prototype
         if (this.fields.hasOwnProperty(fieldName)) {

            const field = this.fields[fieldName];
            
            //if onlyValidated is TRUE and the field has validation error, automatically break the loop so that the field value will not be included in the data to be returned.
            if (onlyValidated && field.validationError){
               break;
            }

            data[fieldName] = field.val();

         }
      }

      return data;

   }

   /**
    * Return a FormData instance from the form node.
    * 
    * Ready form data for XHR AJAX FETCH
    * 
    */
   public getFormData() : FormValData {
      return new FormData(this.formNode);
   }

   /**
    * Return fields errors count
    * 
    */
   private getFieldsErrorCount() : number{

      let errors = 0;

      for (const fieldName in this.fields) {
         //Double check if not from prototype
         if (this.fields.hasOwnProperty(fieldName)) {
            const field = this.fields[fieldName];

            //add if there is validation error
            if (field.validationError) {
               errors++;
            }

         }
      }

      return errors;

   }

   /**
    * Set form Submit Listener, That trigger {@link CleverFormData.validate | validate} method
    * 
    */
   private setSubmitListener(){

      // let that = this

      this.formNode.addEventListener('submit', (e) => {
         e.preventDefault();

         // this.formNode.reset()
         this.startValidate()
         
      })
   }


   /**
    * Validate the form via:
    * 
    * 1. when called via form submit listener
    * 2. running Cleverform.validate() method facade
    * 
    */
   public startValidate() {
      
      //reset
      this.focusedField = null;

      this.states.isSubmitting = true;
      this.submitBtn.reRender()

      /**
       * All field validations, Field instances responsiblity, once error is detected, Field's will generate and display error in DOM.
       */
      this.validateAllFields()

      let errorsCount = this.getFieldsErrorCount();




      // check  if has no error
      if (errorsCount === 0) {

         console.warn("Success! no error!, delay of : " + (this.settings?.submitDelay || Default.Submit_Delay))

         //delay depends on submit delay
         setTimeout(() => {

            // invoke onSuccess callback if exists , form will be possibly submitted via AJAX or fetch,
            if (this?.formEvents?.onSuccess) {
               this.$emit(Form.onSuccess, [this.getData(true), this.getFormData(), this.runNativeSubmit.bind(this)]);

               this.states.isSubmitting = false;
               this.submitBtn.reRender()
               // how about the button here? still enable?
            } else {
               // Submit form via a normal form submition POST/GET , For PHP server 
               // Form without 'onSuccess' callback is intended for submitting form to a server, not by Ajax
               this.runNativeSubmit()
               // the submit button still disabled
               // avoid the user to double submit the form specially if the user internet is slow
            }

         }, this.settings?.submitDelay || Default.Submit_Delay);


      } else {

         // with errors

         this.states.attemptsWithError++;

         this.$emit(Form.onError, [this.getFieldsError(), errorsCount, this.states.attemptsWithError]);

         this.states.isSubmitting = false;
         this.submitBtn.reRender()

      }
   }

   /**
    * Reset the form and return the data
    */
   public reset() {
      
      let rawData = this.getData(false)
      this.formNode.reset()

      for (const fieldName in this.fields) {
         //Double check if not from prototype
         if (this.fields.hasOwnProperty(fieldName)) {
            const field = this.fields[fieldName];
            field.clean();
         }
      }

      return rawData;

   }

   


   


 }