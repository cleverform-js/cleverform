import { CleverFormData } from "./CleverFormData"
import { Form } from "../global/events/FormEvent"

class SubmitButton {

    /**
     * Constructor initialization.
     * @param parentForm The {@link CleverFormData} instance where the {@link SubmitButton} instance belongs.
     * 
     */
    constructor(private parentForm: CleverFormData) {

        //Queried inside form only 
        this.buttonNode = this.parentForm.formNode.querySelector('[type="submit"]')
        
        
        this.checkButton()
        this.extractMessages()
        this.disable(true)

        let button = this;
        this.parentForm.$on(Form.onInit , function () {
            button.disable(false)
        })
    }
    
    /**
     * The submit button `node` in the DOM.
     * It can be `<button>` or `<input>` tag/node that has attribute `type="submit"`
     * 
     */
    private buttonNode: HTMLButtonElement | null // not just <labe> tag

    /**
     * The extracted button text or content.
     * The value comes from either: 
     * 1. `innerHTML` value of the the `<button>` tag.
     * 2. `getAttribute("value")` value of the `<input>` tag.
     */
    private buttonText! : string | null

    /**
     * The submitting text/msg extracted from the attribute custom `cf-submitting-msg` value of the {@link SubmitButton.buttonNode | buttonNode}.
     * It may contain html code in `string` to be used in the `<button>` tag only when rendering submitting text.
     * @Example 
     * 
     * ```html
     *  <button cf-submitting-msg='<img src="loading.gif">' >Submit</button>
     * ```
     * In the example, the extracted `cf-submitting-msg` value is a `img` element node in string format.
     * When the form submitting event is triggered, the button innerHTML will have a `loading.gif` image.
     *  
     */
    private submittingText! : string | null // or text or HTML
    

    /**
     * 1. Verify the form if has submit button.
     * 2. Verify {@link SubmitButton.buttonNode | buttonNode} `name` attribute.
     * Its value must NOT equal to `submit` string, since it will interfere {@link CleverFormData.nativeSubmit}.
     * It must be any string as long as its not `submit` string value.
     * 
     */
    private checkButton() : void | never{

        if ( this.buttonNode ){

            let submitBtnName = this.buttonNode.getAttribute("name");
            
            if(submitBtnName === 'submit' ){
                throw "CF does not allow using  name='submit'  on a form submit button. \n\n " + this.buttonNode.outerHTML.replace('name="submit"', '>>> name="submit" <<<') + "\n\n Solutions (Edit on your HTML code): \n 1. Use any word except 'submit' on form submit button's name attribute or...  \n 2. Do not add name attribute in form submit button."
            }
        }else{
            throw "CF do not found any submit button, Please add submit button on your form";
            
        }
        
    }

    /**
     * Extract the text/messages of the button, both {@link SubmitButton.buttonText | buttonText} and {@link SubmitButton.submittingText | submittingText}.
     */
    private extractMessages(){
        
        // buttonText
        if (this.buttonNode!.tagName === "BUTTON") {
            this.buttonText = this.buttonNode!.innerHTML;

        } else if (this.buttonNode!.tagName === "INPUT") {
            this.buttonText = this.buttonNode!.getAttribute("value");

        }

        // submittingText or the message
        this.submittingText = this.buttonNode?.getAttribute("cf-submitting-msg") || null

    }

    /**
     * Rendering the submit button text to `submitting text` or vice versa, 
     * depending on the Form {@link CleverFormData.states.isSubmitting | isSubmitting} state.
     * 
     */
    public reRender(){

        if (this.parentForm.states.isSubmitting){
            
            this.disable(true)

            if (this.buttonNode!.tagName === "BUTTON") {
                this.buttonNode!.innerHTML = this.submittingText!
            } else if (this.buttonNode!.tagName === "INPUT") {
                this.buttonNode!.setAttribute("value", this.submittingText!)
            }

        }else{

            this.disable(false)

            if (this.buttonNode!.tagName === "BUTTON") {
                this.buttonNode!.innerHTML = this.buttonText!
            } else if (this.buttonNode!.tagName === "INPUT") {
                this.buttonNode!.setAttribute("value", this.buttonText!)
            }
            
        }

        
    }


    /**
     *  Disable/Enable button in the DOM
     * 
     * @param bol True for disabling, false for enabling
     */
    public disable(bol : boolean){
        this.buttonNode!.disabled = bol;
    }

    
}

export default SubmitButton