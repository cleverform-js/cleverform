import { ErrorMessagesTemplate } from "../types/index";
import CF_Error from "../classes/CF_Error";
import { Error_Code } from "../global";

/**
 * Error messages string templates.
 */
 const errorMessagesTemplate: ErrorMessagesTemplate = {

    /**
     * English templates
     */
    en : {
        
        required:'The :fieldName field is required.',

        minLen:'The :fieldName must be at least :min characters.',
        maxLen: 'The :fieldName may not be greater than :max characters.',

        accepted: 'The :fieldName must be accepted.',

        alpha: 'The :fieldName may only contain letters.',
        alphaNum: 'The :fieldName may only contain letters and numbers.',
        alphaDash: 'The :fieldName may only contain letters, numbers, dashes and underscores.',
        betweenLen: 'The :fieldName must be :min to :max characters.',
        // betweenLen: 'The :fieldName must be between :min and :max characters.', // - min and max exclusive
        

        email: 'The :fieldName must be a valid email address.',
        matched: 'The :fieldName does not match :fieldToMatch.',

        min: 'The :fieldName must be at least :min.',
        max: 'The :fieldName may not be greater than :max.',
        
        numeric: 'The :fieldName must be a number.',
        integer: 'The :fieldName must be an integer.',
        positive: 'The :fieldName must be a positive number.',
        negative: 'The :fieldName must be a negative number.',

        ip: 'The :fieldName must be a valid IP address.',
        ipv4: 'The :fieldName must be a valid IPv4 address.',
        ipv6: 'The :fieldName must be a valid IPv6 address.',


        extensions: 'Select :_extentionNames file/s only for :fieldName.',

        minFS: 'Each :fieldName file must be at least :minSize :sizeUnit.',
        maxFS: 'Each :fieldName file may not be greater than :maxSize :sizeUnit.',
        betweenFS: 'Each :fieldName file must be :minSize to :maxSize :sizeUnit.',
        // betweenFS: 'Each :fieldName file must be between :minSize-:maxSize :sizeUnit.', // - min and max exclusive

        minTFS: ':fieldName total file size must be at least :minSize :sizeUnit.',
        maxTFS: ':fieldName total file size may not be greater than :maxSize :sizeUnit.',
        betweenTFS: ':fieldName total file size must be :minSize to :maxSize :sizeUnit.',
        // betweenTFS: ':fieldName total file size must be between :minSize-:maxSize :sizeUnit.', // - min and max exclusive
        
        // minFiles: 'Select at least :min files for :fieldName',
        // maxFiles: 'Select not greater than :max files for :fieldName',
        minFiles: 'Select minimum of :min files for :fieldName',
        maxFiles: 'Select maximum of :max files for :fieldName',
        exactFiles: 'Select exactly :exactFileCount files for :fieldName',
        
        
        // _____: '_________',
        // _____: '_________',
        // _____: '_________',
        
        


        
    },

    // custom error message template storage, priority in looking for templates
    custom : {

    }
};


/**
 * 
 * @param ruleName The ruleName of the Template
 * @param message String template of the error message
 */
function addCustomErrorMsg(ruleName : string ,  message : string){
    
    if (typeof message !== "string" || message.trim() == '') {
        throw new CF_Error(Error_Code.Custom_ErrMsg_Error, `error message must be a valid string`);
    }

    errorMessagesTemplate.custom[ruleName] = message;

    console.log(errorMessagesTemplate.custom)
}


export { errorMessagesTemplate, addCustomErrorMsg};