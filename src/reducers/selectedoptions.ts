import { ACTION_TYPES, ISelectedOptions } from "../types";
import { defaultOptions } from "../utils/data";

export function selectedOptionsReducer(
  state: ISelectedOptions[],
  action: ACTION_TYPES
): ISelectedOptions[] {
  switch (action.type) {
    case "assign":
      return action.payload;
    case "add_filter":
      return [...state, { ...defaultOptions, index: state.length }];
    case "edit_filter_option":
      const { name, value, rowIndex } = action.payload;

      return state.map((obj, i) => {
        if (i === rowIndex) return { ...obj, [name]: value, index: rowIndex };
        else return obj;
      });
    case "delete_filter":
      return state.filter((_, i) => i !== action.payload.rowIndex);
    default:
      return state;
  }
}
