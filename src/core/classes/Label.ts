import Field from "./Field"
import { Default } from "../global/Default"

/**
 * Field's Label Objects constructor function.
 * 
 * Handle the rendering of error messages in the DOM.
 * 
 * Label does not mean literally the `<label>` tag in the DOM.
 * 
 * It can be any DOM tag/element like `<p>`, `<label>`, `<div>`, `<span>` or any tag that can hold `innerHTML`
 *
 */
class Label {

    /**
     * Initialization.
     * 
     * @param field The corresponding {@link Field} instance that this Label instance belongs to.
     * 
     */
    constructor(private field: Field){
        //Queried inside form only 
        this.labelNode = this.field.parentForm.formNode.querySelector('[cf-msg="' + this.field.fieldName + '"]')
    }
    
    /**
     * The Label instance Node in the DOM.
     * It can be <p>`, `<label>`, `<div>`, `<span>` or any tag/node that can hold `innerHTML`.
     * This can be `null`.
     * 
     */
    private labelNode: HTMLElement | null // not just <labe> tag


    /**
     * Display message(error|success) of the field in the setup label
     * Handle the classList insertion on the label node
     * 
     */
    public display() {

        //reset injected class
        this.removeClass(this.field.parentForm?.cssClass?.labelError || Default.labelErrorClass)


        // Display or undisplay msg in DOM if their is a setup label for the field
        if (this.labelNode){

            this.labelNode.innerText = ''

            if( this.field.hasError() ){
                
                //put error class in the Label node
                this.addClass( this.field.parentForm?.cssClass?.labelError || Default.labelErrorClass )
                
                let that = this;
                
                setTimeout(() => {
                    that.labelNode!.innerText = that.field.validationError!
                }, Default.Rerending_Delay);
                
            }
        }

    }



    /**
     * Inject css class in the label node.
     * @param styleClass Css class to be injected in {@link Label.labelNode | labelNode} `classList`.
     * With some delay.
     * 
     */
    public addClass(styleClass: string): void {
        let that = this
        setTimeout(() => {
            that.labelNode?.classList.add(styleClass);
        }, Default.Rerending_Delay);
    }

    /**
     * Remove css class in the label node.
     * @param styleClass Css class to be remove in {@link Label.labelNode | labelNode} `classList`.
     * 
     */
    public removeClass(styleClass: string): void {
        this.labelNode?.classList.remove(styleClass);
    }
    
}

export default Label