import React from "react";

import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";
import { reducer } from "../scripts/scripts"

export const initState: I.State = {
  isWish: false, // これは退職願か？
  name: "名無之権兵衛", // 退職者名
  department: "IT推進部", // 退職者の部署
  createdDate: new Date(), // 作成日
  retirementDate: new Date(), // 辞めたい日
  companyName: "新日本ほげほげ株式会社", // 辞める会社名
  distinationDepartment: "代表取締役社長", // 渡す人の部署
  distinationName: "偉位人太郎", // 渡す人の名前
};

export const Store = React.createContext<I.State | any>(initState);

export const StoreProvider = ({children}:any):JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
      <Store.Provider value={{ state, dispatch }}>{ children }</Store.Provider>
  );
};