import { IConditions, IConnectorsString, IFields, IRule, IRuleGroup, ISelectedOptions } from "../types";
import _ from 'lodash'
import { conditionSymbols, Connectors } from "./data";

export class QueryFormatterUtil {
    constructor(public selectedOptions: ISelectedOptions[], public connector: IConnectorsString) {}

    getQueryString() {
        return this.selectedOptions
                .map(({ field, condition, criteria }: ISelectedOptions) => `\"(field.${field}) ${condition ? conditionSymbols[condition] : ''} ${criteria ? `\\"${criteria}\"\\"` : ''}`)
                .join(` ${Connectors[this.connector]} `)
    }

    getRuleCollection(): IRule[] {
        const groupedOptions = _.groupBy(this.selectedOptions, (item: ISelectedOptions) => {
            return [item['field'], item['condition']];
        });
        
        return Object.keys(groupedOptions).map(key => {
            const [field, condition] = key.split(',')
            const values = groupedOptions[key].map(val => val.criteria)
            
            return {
                field: field as IFields,
                condition: condition as IConditions,
                value: values,
                type: 'rule'
            }
        })
    }

    getRuleGroup(): IRuleGroup {
        return {
            children: this.getRuleCollection(),
            conjunction: this.connector,
            not: true,
            type: 'rule_group'
        }
    }

    generateOutputQueryResults() {
        return {
            outputQueryObject: this.getRuleGroup(),
            outputQueryString: this.getQueryString()
        }
    }
}