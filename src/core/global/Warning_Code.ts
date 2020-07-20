

/**
 * This is an comprehensive documentation of {@link CleverForm | CleverForm's} Warning codes.
 *
 * CF warnings DO NOT interfere and DO NOT stop the Cleverform execution at runtime it only spit the warning message with its code in the browsers console.
 * It gives developer hint and possible approach in using the library.
 *
 * Warning codes are logged in the browsers console when an error is detected.
 * They are `hint` for the warnings occured in the library.
 *
 * Every warning code has its corresponding meaning and should be addressed correctly to avoid its warning again.
 *
 * Error code's `description`, `solutions` and solution `examples` are listed below.
 *
 * @Tip Use your browser's `search` functionality for fast search of error codes. (` Ctrl+F ` for most browser)
 *
 *
 */
export enum Warning_Code {

    /**
     * Unknown CleverForm warning detected.
     * The warning code is not recognized by CleverForm.
     * 
     * @Solution
     * 
     * Submit issue request to the developer via `Github`.
     * 
     */
    // 5000 is the start of Warning codes
    // this warning code will most likely not used in the library.
    Unknown = 5000,


}