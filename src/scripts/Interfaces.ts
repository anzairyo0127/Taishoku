import * as E from "./Enums";

export interface State {
  isWish: boolean; // これは退職願か？
  name: string; // 退職者名
  department?: string; // 退職者の部署
  createdDate: Date; // 作成日
  retirementDate: Date; // 辞めたい日
  companyName: string; // 辞める会社名
  distinationName: string; // 渡す人の名前
  distinationDepartment: string; // 渡す人の部署
}

export interface Action {
  type: E.Action;
  payload: AddString | ToggleBoolean | AddDate;
  error: boolean;
}

export interface AddString {
  [keys:string]: string;
}

export interface ToggleBoolean {
  [keys:string]: boolean;
}

export interface AddDate {
  [keys:string]: string | Date;
}