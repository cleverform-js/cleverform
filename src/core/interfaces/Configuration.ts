import { Form_Events } from "./Form_Events";
import { CssClass } from "./CssClass";

/**
 * Configuration is the object `parameter` of {@link CleverForm} constructor function when instantiating.
 * 
 * ```javascript
 *    
 *    var form = new CleverForm({
 *                   id: "regForm",
 *                   rules: {
 *                      email: "required|email",
 *                      firstname: "required|minLen:4|maxLen:10",
 *                      lastname: "required|minLen:6|maxLen:15",
 *                   },
 *
 *                   customName: {
 *                      email: "Email address",
 *                      firstname: "First name",
 *                      lastname: "Last name",
 *                   },
 *                   
 *                   //...other configurations here
 *              )};
 *    
 * ```
 * 
 * The configuration `object` where in the `property` name is the configuration name, 
 * and the `value` is the configuration value.
 * 
 * @note The required properties are tagged as `required` below.
 * @note Configuration properties can be added in any order.
 * @warning All properties are case sensitive.
 * 
 * Property `id` (small letters) and `ID` (All caps) are different property name.
 * 
 * So always use the configuration properties as what you see in the documentation.
 */
export interface Configuration{
   
   /**
    * `id` property is the form `id` attribute value in the HTML.
    * 
    * * @Usage
    *
    * ```html
    *    // id value is `regForm`
    *    <form method="POST" id="regForm" >
    *       ...
    *    </form>
    * ```
    * 
    * Javascript: 
    * 
    * ```javascript
    *
    *    var form = new CleverForm({
    *                   id: 'regForm'
    *                   //...other configurations here
    *              )};
    *
    * ```
    * 
    * @required
    * 
    */
   id: string,

   /**
   * 
   * `rules` property holds every field's validation rules.
   * 
   * `rules` hold the collection of form field `names` and its validation rules in string.
   *
   * @Usage
   * 
   * ```javascript
   *
   *    var form = new CleverForm({
   *                   
   *                   rules: {
   *                      email: "required|email",
   *                      firstname: "required|minLen:4|maxLen:10",
   *                      lastname: "required|minLen:6|maxLen:15",
   *                   },
   *
   *                   //...other configurations here
   *              )};
   *
   * ```
   * 
   * @required
   */
   rules: { [fieldName: string]: string },
   
   /**
     * `formEvents` property holds Form events object.
     * 
     *  See form events documentation at {@link Form_Events | Form events}.
     * 
     * 
     */
   formEvents?: Form_Events,
   
   /**
    * `customName` property holds every fields custom name.
    * 
    * This is used for customizing field name in the error message.
    * 
    * @Usage
    * 
    * ```javascript
    *
    *    var form = new CleverForm({
    *                   
    *                   customName: {
    *                      email: "Email address",
    *                      firstname: "First name",
    *                      lastname: "Last name",
    *                   },
    *
    *                   //...other configurations here
    *              )};
    *
    * ```
    * 
    * In the example codes above, when the `email` field display `required` validation error,
    * The error will display the ff: error message:
    * 
    * `The Email address field is required.`
    * 
    *  instead of...
    * 
    *  `The email field is required.`
    */
   customName?: { [fieldName: string]: string },
  
  /**
   * Customization of css `classes` to be injected in the `field` and `label` node classes.
   * 
   * The css class name should be created explicitly by the user inside `<style>` tag or via external css.
   * 
   * @note If a css class is not customized, Library will use the its default css Classes .
   * @note `default` css classes are injected in the `<head>` `<style>` tag by CleverForm itself.
   * 
   * @more Read all customizable css class {@link CssClass | here}.
   * 
   */
  cssClass?: CssClass



  /**
   * Form settings
   */
  settings? : {

    /**
     * Delay of form of actual submition when the submit is triggered.
     * In mili seconds.
     */
    submitDelay ? : number | null,

    /**
     *  Language of the Error messages
     */
    lang ? : string | null,

    /**
     * Used in {@link Field.setAttribute } and {@link Field.toggleAttribute }
     */
    injectAttribute ? : boolean | null,
  }

}