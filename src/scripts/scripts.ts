import * as I from "./Interfaces";
import * as E from "./Enums";

interface StringKeyObject {
  [key: string]: any;
}

export const reducer = (state: I.State, action: I.Action):I.State => {
  switch (action.type) {
    case E.Action.ADD_STRING:
      const addString = <I.AddString>action.payload;
      const copyed = {...state, ...addString}
      console.log(`E.Action.ADD_STRING: ${JSON.stringify(copyed)}`)
      return copyed;
    case E.Action.ADD_DATE:
      const addDate = <I.AddDate>action.payload;
      const assiginedAddDate = {...state, ...addDate};
      console.log(`E.Action.ADD_DATE: ${JSON.stringify(assiginedAddDate)}`)
      return assiginedAddDate;
    case E.Action.TOGGLE_BOOLEAN:
      const toggleBoolean = <I.ToggleBoolean>action.payload;
      const assignedBoolean = {...state, ...toggleBoolean}
      console.log(`E.Action.TOGGLE_BOOLEAN: ${JSON.stringify(assignedBoolean)}`)
      return assignedBoolean;
    default:
      return state;
  }
};
