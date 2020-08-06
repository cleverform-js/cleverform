import { RuleObject } from "../../types/index";

/**
 * The field under validation must have a matching value from another field. Best used in confirm password field.
 * 
 * 
 */
export const matched: RuleObject = {

    name: 'matched',
    default: true,

    checkAndSerializeParams: function (ruleParamsStr, fieldName, field) {

        if (!ruleParamsStr)
            throw (`Field '${fieldName}' - '${this.name}' rule expects 'field name' parameter for matching.`);

        let paramsArr = ruleParamsStr.split(',')
        let fieldToMatch = paramsArr[0]

        if (!field?.parentForm.formNode.querySelector(`input[name="${fieldToMatch}"]`) )
            throw (`Field '${fieldName}' - '${this.name}' rule matching field '${fieldToMatch}' does not exists in the form.`);

        //tips
        // if (paramsArr.length > 1)
        //     console.warn(`Field '${fieldName}' - '${this.name}' rule expects only 1 parameter.\n ${paramsArr.length} parameters detected.`);

        return {
            fieldToMatch: fieldToMatch
        };

    },

    validate: function (value, params,fieldNode , field) {
        
        let fieldToMatch = params!.fieldToMatch;
        let fieldToMatch_value = field?.parentForm.fields[fieldToMatch].val()

        return value === fieldToMatch_value

    }

}