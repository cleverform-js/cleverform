import { Error_Type, Error_Code } from "../global/index";

/**
 * Format of the  CF_Error class properties.
 * 
 */
export interface CF_Error_Properties {

    /**
     *  Error code based on {@link Error_Code}
     * 
     */
    code: Error_Code,

    /**
     * Error type based on {@link Error_Type}
     * 
     */
    type: Error_Type,

    /**
     * Detailed description about the {@link Error_Code}
     * 
     */
    desciption: string,

    /**
     * Possible solution how to solve the problem in String array or can be null.
     * 
     * Will be loop on displaying possible solution in console.
     * 
     */
    solutions: string[] | null

}