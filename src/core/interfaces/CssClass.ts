
/**
* Customization of css `classes` to be injected in the `field` and `label` node classes.
*
* The css class name should be created explicitly by the user inside `<style>` tag or via external css.
*
* @note If a css class is not customized, Library will use the its default css Classes .
* @note `default` css classes are injected in the `<head>` `<style>` tag by CleverForm itself.
*
* @Usage
* 
* ```javascript
*
*    var form = new CleverForm({
*                   
*             //Make sure that all customized css class names...
*             //have css styles in your `<style>` tag or in the external css files
*
*                   cssClass: {
*
*                      fieldSuccess: 'my-custom-fieldSuccess-class',
*
*                      fieldError: 'my-custom-fieldError-class',
*
*                      labelSuccess: 'my-custom-labelSuccess-class',
*
*                      labelError: 'my-custom-labelError-class',
*
*                   },
*
*                   //...other configurations here
*              )};
*
* ```
*
*/
export interface CssClass {

    /**
     * CSS class to be injected when Field is success or error free.
     * 
     * 
     * @default `cf-field-success`
     * 
     */
    fieldSuccess?: string;

    /**
     * CSS class to be injected for Field with error.
     * 
     * @default `cf-field-error`
     * 
     */
    fieldError?: string;

    /**
     * CSS class to be injected in the specified label node when the connected field has no error.
     * 
     * @default `cf-label-success`
     * 
     */
    labelSuccess?: string;

    /**
     * CSS class to be injected in the specified label node when the connected field has error.
     * 
     * @default `cf-label-error`
     * 
     */
    labelError?: string;

}