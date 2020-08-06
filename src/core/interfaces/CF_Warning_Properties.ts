import { Warning_Code } from "../global/index";

/**
 * Format of the  {@link CF_Warning} class properties.
 * 
 */
export interface CF_Warning_Properties {

    /**
     *  Warning code based on {@link Warning_Code}
     * 
     */
    code: Warning_Code,

    /**
     * Detailed description about the {@link Warning_Code}
     * 
     */
    desciption: string,

}