
/**
 * Library Error Types.
 * 
 * Every {@link Error_Code} belongs to Error types.
 * 
 * Types describe in which part of the Library the error occur.
 * 
 */
export enum Error_Type {

    /**
     * Error occur during initialization of a {@link CleverForm} instance.
     * 
     * Errors in validating {@link ConfigObject } the param passed in the {@link CleverForm} facade : `CleverForm({param})`.
     * 
     * Possible errors on required element in parameter.
     * 
     */
    Init_Error = 'Initialization Error',

    /**
     * Error occur when Validation rules have error in its:
     * 
     * 1. Existence (rules do not exists)
     * 2. Parameter requirement (missing)
     * 3. Parameter value
     * 
     */
    Rules_Error = 'Validation Rules Error',

    /**
     * Unknown error, Fallback for unknown error.
     * 
     */
    Unknown_Error = 'Unknown Error',

}