import { Error_Code } from "../global/index";

/**
 * Format of the  {@link CF_Error} class properties.
 * 
 */
export interface CF_Error_Properties {

    /**
     *  Error code based on {@link Error_Code}
     * 
     */
    code: Error_Code,

    /**
     * Detailed description about the {@link Error_Code}
     * 
     */
    desciption: string,

}