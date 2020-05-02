import * as I from "./Interfaces";
import * as E from "./Enums";

interface StringKeyObject {
  // 今回はstring
  [key: string]: any;
}

export const reducer = (state: I.State, action: I.Action):I.State => {
  switch (action.type) {
    case E.Action.ADD_STRING:
      const addString = <I.AddString>action.payload;
      const copyed = Object.assign({}, state);
      Object.keys(addString).map((key)=>{
        copyed[key] = addString[key];
      });
      const assignedString = Object.assign(addString, copyed);
      console.log(`E.Action.ADD_STRING: ${JSON.stringify(assignedString)}`)
      return assignedString;
    case E.Action.ADD_DATE:
      const addDate = <I.AddDate>action.payload;
      const assiginedAddDate = Object.assign({}, state);
      Object.keys(addDate).map((key)=>{
        copyed[key] = assiginedAddDate[key];
      });
      console.log(`E.Action.ADD_DATE: ${JSON.stringify(assiginedAddDate)}`)
      return assiginedAddDate;
    case E.Action.TOGGLE_BOOLEAN:
      const toggleBoolean = <I.ToggleBoolean>action.payload;
      const assignedBoolean = Object.assign(toggleBoolean, state);
      console.log(`E.Action.TOGGLE_BOOLEAN: ${JSON.stringify(assignedBoolean)}`)
      return assignedBoolean;
    default:
      return state;
  }
};
