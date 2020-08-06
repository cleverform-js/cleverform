import { Rules, RuleObject } from "../types/index";
import * as R from "../rules/index";
import CF_Error from "../classes/CF_Error";
import { Error_Code } from "../global";

/**
 * Validation rules container
 * Singleton pattern
 */

class ValidationRule {

    // same as ValidationRule.instance = new ValidationRule()
    private static instance: ValidationRule; 

    /**
     * The oject constainer of all validation rules available.
     * 
     * `default` and `custom`
     */
    public rules: Rules;

    private constructor() {

        
        this.rules = {};

        //add default rules...



        //Others
        this.addRule(R.required);
        this.addRule(R.accepted);
        this.addRule(R.email);
        this.addRule(R.matched);

        this.addRule(R.ip);
        this.addRule(R.ipv4);
        this.addRule(R.ipv6);


        //String related
        this.addRule(R.minLen);
        this.addRule(R.maxLen);
        this.addRule(R.betweenLen);
        // this.addRule(R.exactLen); // ??? make this??
        this.addRule(R.alpha);
        this.addRule(R.alphaNum);
        this.addRule(R.alphaDash);

        
        //numeric related
        this.addRule(R.min);
        this.addRule(R.max);
        // this.addRule(R.betweenDigit);  // or just between // ??? make this??
        this.addRule(R.numeric); // improve numeric? add parameter step? default step is `any`
        this.addRule(R.integer);
        this.addRule(R.positive);
        this.addRule(R.negative);
        

        



        // File input related
        this.addRule(R.extensions);

        // per selected file.
        this.addRule(R.maxFS);
        this.addRule(R.minFS);
        this.addRule(R.betweenFS);

        //intended for input file MULTIPLE 
        this.addRule(R.maxTFS);
        this.addRule(R.minTFS);
        this.addRule(R.betweenTFS);
        
        //intended for input file MULTIPLE 
        this.addRule(R.minFiles);
        this.addRule(R.maxFiles);
        this.addRule(R.exactFiles);
        
        
        
        // this.addRule(R.___);
        // this.addRule(R.___);
        // this.addRule(R.___);
        // this.addRule(R.___);
        // this.addRule(R.___);
        // this.addRule(R.___);

        

        // console.log(this)
    }
    
    /**
     * Add validation rules object in sub-property of {@link ValidationRule.rules | rules} property.,
     * 
     * @param ruleObj Validation rule object
     */
    public addRule(ruleObj: RuleObject){

        if ( !this.rules.hasOwnProperty(ruleObj.name) ){
            this.rules[ruleObj.name] = ruleObj;
        }else{
            // make a CF error code here!/                    
            throw new CF_Error(Error_Code.Rules_Collision, `Validation rule ${ruleObj.name} already exists!. Use other name instead.`);
        }

        //to be removed
        //for debuging
        // console.clear()
        // console.log(this.rules)
    }


    /**
     * Get ValidationRule instance. This will return the same instance always.
     * If static instance is empty, instantiate it for the first time.
     * 
     * @returns Return ValidationRule class instance in Singleton pattern.
     */

    static getInstance() {

        if (!ValidationRule.instance) {
            ValidationRule.instance = new ValidationRule();
        }
        return ValidationRule.instance;
    }

}


/**
 * Storage of all Validation rules[Singleton pattern]
 * 
 */

const rulesContainer = ValidationRule.getInstance();
const validationRules = rulesContainer.rules

export { rulesContainer , validationRules }
