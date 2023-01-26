import { IBuilderOptions, IConditionSymbols, IConnectors, IConnectorsString, ISelectedOptions } from "../types";

export const conditionSymbols: IConditionSymbols =  {
    "Equals": "==",
    "Does not equal": "!=",
    "Like": "Like",
    "Not Like": "Not Like",
    "Is Empty": "Is Empty",
    "Is": "Is",
    "Is Not": "Is Not"
}

export const builderOptions: IBuilderOptions[] = [
    { label: 'Field', placeholder: 'Select Field', name: 'field', options: ['Theme' , 'Sub-theme' , 'Reason' , 'Language' , 'Source' , 'Rating' , 'Time Period' , 'Customer ID'] },
    { label: 'Condition', placeholder: 'Select Condition', name: 'condition', options: ['Equals' , 'Does not equal' , 'Like' , 'Not Like' , 'Is Empty' , 'Is' , 'Is Not'] },
    { label: 'Criteria', placeholder: 'Select Criteria', name: 'criteria', options: ['Offers' , 'Performance' , 'Platform' , 'Product Feedback'] }
]

export const Connectors: Record<IConnectorsString, IConnectors> = {
    'AND': '&&',
    'OR': '||'
}

export const connectors = ['AND', 'OR']

export const defaultOptions: ISelectedOptions = { 
    field: '',
    condition: '',
    criteria: '',
    index: 0,
}

export const QueryResultFormats = ["Query JSON", "Query String"]