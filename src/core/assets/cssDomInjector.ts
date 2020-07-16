import { App } from "../global/App";
import { Default } from "../global/Default";

/**
 * Inject CleverForm default CSS `classes` in the `<head>` tag.
 * It is the default style if the user did not add their custom css classes.
 * 
 */
export function cssDomInjector() {
    
    /**
     * Array of valid css style in string format.
     */
    let ccStyles = [
        `/* ${App.Name} styles (auto generated) */`,

        `input { -moz-box-sizing: border-box;  -webkit-box-sizing: border-box;  box-sizing: border-box; }`,
        
        // for label(errors also) holder/
        `.${Default.labelSuccessClass} { color: #7bc98d; }`,
        `.${Default.labelErrorClass} { color: #df5368; }`,

        //for field inputs...
        "." + Default.fieldSuccessClass +" { background-color: #f2fbf4 !important; border-color: #7bc98d !important; border-width: 1px !important; border-style: solid !important; padding-right: calc(1.5em + .75rem) !important; background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") !important; background-repeat: no-repeat; background-position: center right calc(.375em + .1875rem); background-size: calc(.75em + .375rem) calc(.75em + .375rem); }",
        "." + Default.fieldErrorClass +" { background-color: #fff5f5 !important; border-color: #f0aab1 !important; border-width: 1px !important; border-style: solid !important; padding-right: calc(1.5em + .75rem) !important; background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\"); background-repeat: no-repeat; background-position: center right calc(.375em + .1875rem); background-size: calc(.75em + .375rem) calc(.75em + .375rem);}",
    ];

    let style = document.createElement('style');

    style.type = 'text/css';
    style.innerHTML = "\n\n" + ccStyles.join("\n") + "\n\n";
    let head = document.getElementsByTagName('head')[0];

    /**
     * insert CF css styles as first child node of <head> tag
     */
    head.insertBefore(style, head.childNodes[0])

}