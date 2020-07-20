

/**
 * This is an comprehensive documentation of {@link CleverForm | CleverForm's} error codes.
 * 
 * Error codes are logged in the browsers console when an error is detected.
 * They are `hint` for the errors occured in the library.
 * 
 * Every error code has its corresponding meaning and should be addressed correctly to solve it easily and fast.
 * 
 * Error code's `description`, `solutions` and solution `examples` are listed below.
 * 
 * @Tip Use your browser's `search` functionality for fast search of error codes. (` Ctrl+F ` for most browser)
 * 
 * 
 */
export enum Error_Code {

    /**
     * Unknown CleverForm Error detected.
     * The error code is not recognized by CleverForm.
     * 
     * @Solution
     * 
     * Submit issue request to the developer via `Github`.
     * 
     */
    Unknown = 1000,

    
    /**
     * CleverForm is a `constructor` function and should be called with the `new` keyword.
     * 
     * @Solution
     * 
     * Use `new` keyword before `CleverForm` to create a CleverForm instance.
     * 
     * @Example
     * 
     * ```javascript
     *  
     *  // ❌ Wrong instantiation, no `new` keyword
     *  // With error.
     *  var wrongForm = CleverForm(configObject);
     * 
     *  // ✅ Correct instantiation
     *  // No error
     *  var correctForm = new CleverForm(configObject);
     * 
     * ```
     * 
     */
    Constructor_No_New_Keyword ,    // = 'Constructor_No_New_Keyword',


    /**
     * Form not found in the DOM with the provided form `id`.
     * 
     * @Solution 
     * Double Check your `form id` in HTML code.
     * 
     * Must match the provided `id` propery/element inside `configObject` parameter of `CleverForm(configObject)`.
     * 
     * @Example
     * 
     * ```html
     *  <!--  Html form -->
     *  <form method="POST" id="regForm" >
     *     ...
     *  </form>
     * ```
     * 
     * Javascript :
     * 
     * ```javascript
     *  
     *  // Pass the `regForm` to the id propery of the `configObject` parameter as shown below:
     *  var regForm = new CleverForm({
     *                    id : 'regForm',
     *                    //...other configObject properties/elements here
     *                });
     * ```
     */
    Form_Not_Found ,    // = 'Form_Not_Found',

    /**
     * Provided `form id` was used by non `<form>` tag/element in the DOM.
     * 
     * @Solutions 
     * 
     * Use your provided `form id` in a `<form>` tag only.
     * 
     * Other HTML tag's `id` attribute must NOT be the same by your `form id` value.
     * 
     * @Example
     * 
     * ```html
     * 
     *  <!-- Div tag that contains id of `loginForm` -->
     *  <!-- ❌ This is the source of error, `loginForm` must be changed to something like `loginFormDiv`-->
     *  <div id='loginForm'>
     *  
     *      <!-- Html form that contain id of `loginForm` also, the <div> tag must not used the same `id` of `loginForm` -->
     *      <form method="POST" id="loginForm" >
     *         ...
     *      </form>
     * 
     *  </div>
     * ```
     * 
     * 
     * 
     */
    Form_Id_Not_In_Form_Tag ,   // = 'Form_Id_Not_In_Form_Tag',

    /**
     * Provided `form id` was already initialized by other {@link CleverForm} instance.
     * 
     * @Solution
     * 
     * Instantiate provided `form id` only once.
     * 
     * @Example
     *
     * ```javascript
     *
     *
     *  // ✅ First instantiation of `form1`
     *  // No error
     *  var form1 = new CleverForm({
     *                    id : 'form1',
     *                    ...
     *                });
     *
     *
     *  // ❌ Duplicate instantiation of `form1`
     *  // With error
     *  var otherForm = new CleverForm({
     *                    id : 'form1',
     *                    ...
     *                });
     * ```
     * 
     */
    Form_Already_Initialized ,  // = 'Form_Already_Initialized',
}