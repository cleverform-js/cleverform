
//logger
// export * from './logger/index'


/**
 * Generate random String.
 * 
 * @param length Length of the generated random string
 * @param withNumber Set true if allow number to be generated in the random string
 */
export function randomString(length : number, withNumber : boolean = false) : string{

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (withNumber) {
        characters = characters + "0123456789";
    }

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    console.log("randomString: (remove this!) : ", result);
    return result;

}

/**
 * Check if a value is a valid number.
 * 
 * Including number with decimals , positive and negative.
 * 
 * @param val Value to check
 * 
 */
export function isNumeric(val : any){
    return !isNaN(val);
}

/**
 * Check if a value is a valid integer.
 * Negative and positive are integers.
 * 
 * A whole number; a number that is not a fraction and without decimals
 *
 * @param val Value to check
 * 
 */
export function isInt(val : any){
    
    // isNumeric is needed because withouth it, the value with letters like '33gg' will return true, it become 33.
    let parsedVal = parseFloat(val) as any
    return isNumeric(val) && /^-?\d+$/.test(parsedVal);
}

/**
 * Check if a value is if converted to parsefloat will result to positive.
 * 
 * Regardless if integer or decimal
 * @param val Value to check 
 */
export function isPositive(val: any) {
    return parseFloat(val) > 0;
}

/**
 * Check if a value is if converted to parsefloat will result to negative.
 * 
 * Regardless if integer or decimal
 * @param val Value to check 
 */
export function isNegative(val: any) {
    return parseFloat(val) < 0;
}

/**
 * Check if a value is positve Integer.
 * 
 * @param val Value to check 
 * 
 */
export function isPositiveInt(val: any) {

    let parsedVal = parseFloat(val)
    return isInt(val) && parsedVal > 0;

}

/**
 * Check if a value is negative Integer.
 * 
 * @param val Value to check 
 * 
 */
export function isNegativeInt(val: any) {
    
    let parsedVal = parseFloat(val)
    return isInt(val) && parsedVal < 0;

}

/**
 * The field under validation must be an `IPv4` address.
 * 
 * @param val Value to check 
 */
export function isIPv4(val: string) {

    // source : https://www.regexpal.com/104036
    return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(val)
}

/**
 * The field under validation must be an `IPv6` address.
 * 
 * @param val Value to check 
 */
export function isIPv6(val: string) {

    // source : https://www.regexpal.com/?fam=104037
    return /([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4(}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(val)
}



/**
 * Allowed file size units.
 * 
 * Available are `bytes`, `KB`, `MB`, `GB`
 * 
 * `TB` and up are not included, not ideal
 */
export const fileSizeUnits = ['bytes', 'KB', 'MB', 'GB'];

/**
 * Conver bytes to specific file size unit.
 * 
 * @param bytes Bytes to convert
 * @param unit File size unit to convert to
 */
export function convertFileSize(bytes: number, unit: 'KB'| 'MB'| 'GB' ) : number {

    switch (unit) {
        case 'KB':
            //convert `bytes` to `KB` kilo bytes
            return  bytes / 1024
        break;

        case 'MB':
            //convert `bytes` to `MB` megabytes
            return  bytes / 1024 / 1024
        break;

        case 'GB':
            //convert `bytes` to `GB` Gigabytes
            return  bytes / 1024 / 1024 / 1024
        break;

        default:
            return bytes;
        break;
    }

}