import { FieldInterface } from "../interfaces/FieldInterface";
import { FieldRulesAndParams, serializedParam } from "../types/index";
import { validationRules } from "../states/validationRules";
import Label from "./Label";
import { CleverFormData } from "./CleverFormData";
import { Default } from "../global/Default";
import { errorMessagesTemplate } from "../assets/errorMessagesTemplate";
import { Error_Code } from "../global/Error_Code";
import CF_Error from "./CF_Error";

/**
 * Form's Field Objects constructor function.
 * Holds field details including different field `tags` and `types`
 * 
 */
class Field implements FieldInterface{

    /**
     * Field initialization.
     * 
     * @param parentForm The {@link CleverFormData} instance where the Field instance belong.
     * @param fieldNode The field Node in the DOM.
     * @param fieldName The field `name` attribute value.
     * @param customName The custom name of the field passed in the {@link ConfigObject} param in {@link CleverFormData}(configObject).
     * @param tagName The field node `tag` value. It can be `INPUT` , `TEXTAREA` , `SELECT`. tagName property is always in UPPERCASE.
     * @param type If the {@link Field.tagName | tagName} value is `INPUT`,type can be any input types line `text`, `password`, `email`, `number` and other more input types.
     * @param rawRules The field rawRules with unserialized params.
     */
    constructor(

        public parentForm: CleverFormData,
        public fieldNode: HTMLInputElement,
        public fieldName: string,
        public customName: string | null,
        public tagName: string,
        public type: string | null,
        public rawRules: string,
        
    ){
        
        this.validationError = null
        this.label = new Label(this)
        this.rules = this.getSerializeRulesAndParam();

        
    }

    /**
     * Field's corresponding Label instance.
     * The label instance is responsible for re-rendering error messages on its `labelNode`.
     * 
     */
    public label: Label;

    /**
     * Hold the field validation error.
     * 
     */
    public validationError: string | null;

    /**
     * Field's validation rules, the rules are serialized object based on {@link FieldRulesAndParams}
     * 
     */
    public rules: FieldRulesAndParams 

    /**
     * Get the field value.
     * @returns Returns field input/field `value`
     * 
     */

    /**
     * Set new value of the field depending on the form type/tag
     * 
     * @param newVal New value
     */
    setVal(val: any): void {

        if (this.type === "checkbox") {
            
            if (val === true || val === "on") {
                this.fieldNode.checked = true;
            } else if (val === false || val === "off") {
                this.fieldNode.checked = false;
            }else{
                //must be improved with CF warning
                console.warn("[CF warn:] Setting checkbox value options : true , 'on' , false and 'off'")
            }
        } else if (this.type === "email" && this.fieldNode.multiple) {
            // TO be developed
        } else if (this.type === "radio") {
            // TO be developed
        } else if (this.tagName === "SELECT" && this.fieldNode.multiple) {
            // TO be developed
        }else{
            this.fieldNode.value = val
        }
        
    }

    public val() : string | any[] | FileList | File {
        // alert(this.type)
        //do not trim since other part of the app may need the raw string.

        if (this.type === "checkbox") {
          if (this.fieldNode.checked) {
            //get only the value if checked
            return this.fieldNode.value;
          } else {
            return "";
          }
        } else if (this.type === "email" && this.fieldNode.multiple) {
          let emails = this.fieldNode.value.trim();
          //return array of email or []
          return emails ? emails.split(",") : [];
        } else if (this.type === "radio") {
          let checkedRadio = this.parentForm.formNode.querySelector(
            `input[name="${this.fieldName}"]:checked`
          ) as HTMLFormElement;
          return checkedRadio?.value || "";
        } else if (this.tagName === "SELECT" && this.fieldNode.multiple) {
          /**
           * Selected values holder
           */
          let values: string[] = [];
          let options = ((this.fieldNode as unknown) as HTMLSelectElement)
            .options;

          for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            if (opt.selected) {
              values.push(opt.value || opt.text);
            }
          }

          return values; // array
        } else if (this.type === "file") {
            
            if(this.fieldNode.multiple){
                //return a FileList (its like an array of Files, But does not inherent array methods)
                return this.fieldNode.files!;
            }else{
                return this.fieldNode.files![0] || null;
            }

        }

        
        // console.log(typeof this.fieldNode.value)
        // console.log(this.fieldName + ' : ' + this.fieldNode.value.split(','))

        return this.fieldNode.value
    }


    /**
     * Inject css class in the field node.
     * @param styleClass Css class to be injected in {@link Field.fieldNode | fieldNode} `classList`.
     * (errorClasses | successClass)
     * 
     */
    public addClass(styleClass: string) : void{

        let that = this;

        setTimeout(() => {

            if (this.type === 'radio') {
                let radios = that.parentForm.formNode.querySelectorAll(`input[name="${that.fieldName}"]`)
                radios.forEach(function ( radioNode ) {
                    radioNode.classList.add(styleClass);
                })

            } else {

                // other input types
                // Single node
                
                that.fieldNode.classList.add(styleClass);
            }
            
        }, Default.Rerending_Delay);

        
    }


    /**
     * Remove css class in the field node.
     * @param styleClass Css class to be remove in the {@link Field.fieldNode | fieldNode} `classList`.
     * 
     */
    public removeClass(styleClass: string) : void{

        let that = this;

        if (this.type === 'radio') {

            let radios = that.parentForm.formNode.querySelectorAll(`input[name="${that.fieldName}"]`)
            radios.forEach(function (radioNode) {
                radioNode.classList.remove(styleClass);
            })

        } else {

            // other input types
            // Single node
            that.fieldNode.classList.remove(styleClass);
        }


    }
    
    /**
     * Focus on the {@link Field.fieldNode | fieldNode} in the DOM.
     * This is used for focusing in the 1st field with {@link Field.validationError | validationError}
     * 
     */
    public focus() : void{
        let that = this;
        setTimeout(() => {
            that.fieldNode.focus();
        }, Default.Rerending_Delay);
        
    };

    /**
     * Convert field string Rules(multiple validation rules) to Object and assign to rules property.
     * @returns Return Serialized field `rules` and its `parameters`.
     * 
     */
    private getSerializeRulesAndParam(): FieldRulesAndParams {

        if (!this.rawRules){
            console.warn(`Field ${this.fieldName} has no validation rules.`)
            return null;
        }
            



        let rulesWithParamArr = this.rawRules.split('|');
        let serializedRules: FieldRulesAndParams = {};

        for (let i = 0; i < rulesWithParamArr.length; i++) {

            let ruleAndParams = rulesWithParamArr[i].split(':');
            
            //validation rule `name`
            let ruleName = ruleAndParams[0].trim();
            
            // validation rule `parameters` in string format.
            let paramsStr = ruleAndParams[1];

            if (ruleName) {
                serializedRules[ruleName] = {
                    params: this.verifyRuleNameAndParams(ruleName, paramsStr, this.fieldName)
                }
            }

        } //for loop closing...
        
        return serializedRules;

    }

    /**
     * Check if the used validation rule `name` exists from the {@link defaultRules} object.
     * If the exists, serialized the raw `parameters` and return the serialized.
     * 
     * @param ruleName Validation rule `name`
     * @param paramsStr Validation rule `parameters` in string format.
     * @param fieldName The name of the field that you are verifying rule `name` and `params`.
     * 
     */
    private verifyRuleNameAndParams(ruleName: string, paramsStr: string, fieldName: string): any {
        
        
        if ( validationRules.hasOwnProperty(ruleName) ) {
            //rules exists
            return validationRules[ruleName].checkAndSerializeParams(paramsStr, fieldName, this);

        } else {

            throw new CF_Error(Error_Code.Unknown_Rule, `${ruleName} rule does not exists`);

            //  unknown rules , display all possible rules for `Tips` helper

            // var availableRules = _util.getDefaultRules().sort().join("\n\t- ");

            // _util.note("Validation rules are case sensitive.");
            // _util.ruleError('\'' + ruleName + '\' rule does not exists in ' + _appName + ' available validation rules.\n' +
            //     '(Invalid rule detected in Form \'' + fieldName + '\' field)'
            //     + '\n\n|--- ' + _appName + ' Available rules below ---|\n\n\t- ' + availableRules);

        }

    }

    /**
     * Return TRUE if {@link Field.validationError | validationError } property has error.
     * 
     * @returns True or false
     * 
     */
    public hasError() : boolean {
        return this.validationError ? true : false;
    }

    /**
     * Reset the value of {@link Field.validationError | validationError } property to `null`
     * 
     */
    public emptyError() : void{
        this.validationError = null;
    }

    /**
     * Remove the Error of the Field instance and remove the error message in the DOM.
     */
    public clean(){
        this.emptyError();
        this.displayMsg();
    }


    /**
     * Perform validation in every field validation {@link Field.rules | rules } supplied.
     * Uses the {@link Field.rules | rules } serialized `parameters` to be validated depending on the validation rules.
     * 
     */
    public validate() {
        
        this.emptyError()

        // Loop every validation rules of the field to be used in validation
        let rules = this.rules

        fieldRulesLoop:
        for (let ruleName in rules) {
            if (rules.hasOwnProperty(ruleName)) {

                let value = this.val()
                let params = rules?.[ruleName]?.params;

                // Check if the validation rule has no error
                if (validationRules[ruleName].validate(value, params , this.fieldNode , this) === false) {

                    this.generateErrorMsg(ruleName, params)

                    // Focus on the first field node with error with the help if the parentform.focusedField.
                    if(!this.parentForm.focusedField){
                        this.focus()
                        this.parentForm.focusedField = this.fieldName;
                    }
                    

                    break fieldRulesLoop; // get only 1 error per field
                }
            }
        }

        this.displayMsg()
    }

    
    /**
     * Generate error message depends on the validation rule.
     * Store the generated msg to the validationError field
     * 
     * @param ruleName The name or the Validation rule. Ex: `required` and `maxLen`
     * @param params Serialized `parameters`.
     * 
     */
    private generateErrorMsg(ruleName: string, params : serializedParam){

        //customName or the fieldName
        let finalFieldName = this.customName || this.fieldName;
        let lang = this.parentForm.settings?.lang || Default.Lang;

        // Error message template depends on the validation rule
        // the custom template is priority than the `lang`
        let errorMsgTemplete = errorMessagesTemplate["custom"][ruleName] || errorMessagesTemplate[lang][ruleName]

        if (!errorMsgTemplete){
            throw new Error(`'${ruleName}' rule has no error message template defined.(Internal error)`);
        }

        // Replace all `:fieldName` placeholder to finalFieldName
        let errorMsg = errorMsgTemplete?.replace(":fieldName", finalFieldName);

        // Replace all placeholder(ex. `:min` , `max` ) to its actual serialized `parameter` value
        // Loop the serialized params and replace if the params name is found in the errorMsg template, replace by the param value
        for (let paramName in params) {

            if( params.hasOwnProperty(paramName)){
                
                if  (errorMsg.indexOf(':' + paramName) !== -1 ) {
                    errorMsg = errorMsg.replace(':' + paramName, params[paramName]);
                }

            }

        }

        this.validationError = errorMsg;

    }

    /**
     * Display field error/success msg in the coresponding {@link Field.label.labelNode | Label node} in the DOM
     * If no validationError is empty, display non.
     * 
     */
    public displayMsg(){
        
        this.resetCss()

        // Inject Css in the field node
        if (this.hasError()) {
            //put error class in the field node
            this.addClass(this.parentForm?.cssClass?.fieldError || Default.fieldErrorClass)

        } else {
            //Field no error, put success class in the field node,
            //only if the field has value
            if( this.val() )
                this.addClass(this.parentForm?.cssClass?.fieldSuccess || Default.fieldSuccessClass)
        }

        // Display erro message in field correspoding label node
        this.label.display()
    }

    /**
     * Reset the {@link Field.fieldNode | fieldNode} `classList`.
     * 
     */
    private resetCss() : void {

        this.removeClass(this.parentForm?.cssClass?.fieldError || Default.fieldErrorClass)
        this.removeClass(this.parentForm?.cssClass?.fieldSuccess || Default.fieldSuccessClass)
    }
    
    /**
     *  Modify/edit the field node attribute.
     * 
     *  Same as Field.fieldNode.setAttribute()
     * 
     * @param name The name of the attribute to modify. Example : min,max,multiple,required...
     * @param val The new value of the attribute
     */
    public setAttribute(name : string, val : string  ) : void {
        //some if statement control here depending on the CF setting.( ex: setting.autoInjectAttribute = true; )
        
        if(this.parentForm.settings?.injectAttribute === true)
            this.fieldNode.setAttribute(name, val )
    }

    /**
     * Toggle the attribute of a field node.
     * 
     * @param name The toggable attribute name
     * @param val True or false
     * @param forced Optional, if true the attribute will be forced to toggle regardless of the `settings.injectAttribute` control.
     */
    public toggleAttribute(name: 'required' | 'multiple', val: boolean , forced : boolean = false): void {
        //some if statement control here depending on the CF setting.( ex: setting.autoInjectAttribute = true; )
        // must forced or autoInjectAttribute = true
        if (forced || this.parentForm.settings?.injectAttribute === true ){
            this.fieldNode[name] = val
        }
    }

}

export default Field;