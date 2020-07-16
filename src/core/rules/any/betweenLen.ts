import { RuleObject } from "../../types/index";
import { isPositiveInt } from "../../util/index";

/**
 * The field under validation must have a string length between the given min and max.
 * 
 * Min and max are inclusive!
 * 
 */
export const betweenLen: RuleObject = {

    name: 'betweenLen',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {
        
        //Check if has param
        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 2 integer parameters.`);

        let paramsArr = ruleParamsStr.split(',')
        let min = paramsArr[0]
        let max = paramsArr[1]

        if ( !isPositiveInt(min) )
            throw (`Field '${fieldName}' - '${this.name}' rule 1st parameter must be positive integer. Param '${min}' detected.`);
        if (!isPositiveInt(max))
            throw (`Field '${fieldName}' - '${this.name}' rule 2nd parameter must be positive integer. Param '${max}' detected.`);
        if (!( parseInt(max) > parseInt(min) ) )
            throw (`Field '${fieldName}' - '${this.name}' rule max parameter must be greater than its min`);

        //tips
        if (paramsArr.length > 2)
            console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 2 parameters.\n ${paramsArr.length} parameters detected.`);


        // field attribute modifier
        field?.setAttribute('minlength', min)
        field?.setAttribute('maxlength', max)

        return {
            min: parseInt(min),
            max: parseInt(max)
        };
    },

    validate: function (value, params) {
        value = <string>value
        let length = value.trim().length

        return length <= params!.max && length >= params!.min
    }

}