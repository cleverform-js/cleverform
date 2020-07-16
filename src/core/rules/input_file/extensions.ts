import { RuleObject } from "../../types/index";

/**
 * The input file selected file/s must be in the specified file extentions. 
 *
 */


const groupedExt : { [extGroupName : string] : string[] } = {

    //'audio/*', 
    //"any audio file".
    audio: ['3gp', 'aa', 'aac', 'aax', 'act', 'aiff', 'alac', 'amr', 'ape', 'au', 'awb', 'dct', 'dss', 'dvf', 'flac', 'gsm', 'iklax', 'ivs', 'm4a', 'm4b', 'm4p', 'mmf', 'mp3', 'mpc', 'msv', 'nmf', 'nsf', 'ogg', 'opus', 'ra', 'rm', 'raw', 'rf64', 'sln', 'tta', 'voc', 'vox', 'wav', 'wma', 'wv', 'webm', '8svx', 'cda'],

    //'video/*', 
    //"any video file".
    video: ['3g2', '3gp', 'amv', 'asf', 'avi', 'drc', 'flv', 'f4v', 'f4p', 'f4a', 'f4b', 'gif', 'gifv', 'm4v', 'mkv', 'mng', 'mov', 'qt', 'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm2v', 'mts', 'm2ts', 'ts', 'mxf', 'nsv', 'ogv', 'ogg', 'rm', 'rmvb', 'roq', 'svi', 'vob', 'webm', 'wmv', 'yuv'],

    //'image/*', 
    //"any image file"
    image: ['jpg', 'jpeg', 'jpe', 'jif', 'jfif', 'jfi', 'png', 'gif', 'webp', 'tiff', 'tif', 'psd', 'raw', 'arw', 'cr2', 'nrw', 'k25', 'bmp', 'dib', 'heif', 'heic', 'ind', 'indd', 'indt', 'jp2', 'j2k', 'jpf', 'jpx', 'jpm', 'mj2', 'svg', 'svgz', 'ai', 'eps'],

    msWord: ['doc', 'dot', 'wbk', 'docx', 'docm', 'dotx', 'dotm', 'docb'],
    msExcel: ['xls', 'xlt', 'xlm', 'xlsx', 'xlsm', 'xltx', 'xltm', 'xlsb', 'xla', 'xlam', 'xll', 'xlw'],
    msPowerPoint: ['ppt', 'pot', 'pps', 'pptx', 'pptm', 'potx', 'potm', 'ppam', 'ppsx', 'ppsm', 'sldx', 'sldm'],
}

export const extensions: RuleObject = {

    name: 'extensions',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName , field) {
        
        
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects atleast 1 file extention as parameter.`);

        let rawExtentions = ruleParamsStr.trim().split(',')

        //collect the injectable accept strings in array
        let acceptExts : string[] = []
        let friendlyExts : string[] = []

        rawExtentions.forEach( elem => {
            
            let ext = elem.trim();

            if (!ext)
                return;

            switch (ext) {
                case 'audio':
                        acceptExts.unshift('audio/*')
                        friendlyExts.push('audio')
                    break;

                case 'video':
                        acceptExts.unshift('video/*')
                        friendlyExts.push('video')
                    break;

                case 'image':
                        acceptExts.unshift('image/*')
                        friendlyExts.push('image')
                    break;

                case 'msWord':
                        acceptExts = acceptExts.concat(groupedExt.msWord.map((ext) => '.' + ext))
                        friendlyExts.push('Word')
                    break;
                    
                case 'msExcel':
                        acceptExts = acceptExts.concat(groupedExt.msExcel.map((ext) => '.' + ext))
                        friendlyExts.push('Excel')
                    break;
                    
                case 'msPowerPoint':
                        acceptExts = acceptExts.concat(groupedExt.msPowerPoint.map((ext) => '.' + ext))
                        friendlyExts.push('PowerPoint')
                    break;
                
            
                default:
                        acceptExts.push('.' + ext)
                        friendlyExts.push('.' + ext)
                    break;
            }

        });


        /**
         * For displaying of error message
         */
        let _extentionNames : string;

        if (friendlyExts.length > 1) {
            let lastfriendlyExt = friendlyExts.pop()

            
            _extentionNames = friendlyExts.join(', ').concat(` or ${lastfriendlyExt}`)
        }else{
            _extentionNames = friendlyExts[0]
        }

        // field attribute modifier
        field?.setAttribute('accept', acceptExts.join(',') )

        

        return {
            extentions: rawExtentions,
            _extentionNames: _extentionNames
        }


    },

    validate: function (value, params, fieldNode) {

        let fileLists = fieldNode?.files!;

        //no files to validate
        if (fileLists.length === 0)
            return true;

        /**
         * String of array of all file extention allowed
         */
        let allExtentions : string[] = [];

        const extentions = params!.extentions as string[]

        // combine all file extentions first
        extentions.forEach(ext => {

            if ( groupedExt.hasOwnProperty(ext) ){
                // if the supplied ext is groupedExt
                allExtentions = allExtentions.concat( groupedExt[ext] )
            }else{
                allExtentions.push(ext);
            }

        });

        // console.log(allExtentions)



        //loop all files and check its ext is in the specified extentions...
        for (let i = 0; i < fileLists.length; i++) {
            const file = fileLists[i];
            const fileName = file.name;
            
            const last_dot = fileName.lastIndexOf('.')

            /**
             * Extention of the file.
             */
            const ext = fileName.slice(last_dot + 1).toLowerCase()
            
            // return false if the looped file `ext` does not belong to the supplied files `allExtentions`
            if ( allExtentions.indexOf(ext) === -1 ){
                return false;
            }
        }


        //if all validation is passed, return true
        return true;
    }

}