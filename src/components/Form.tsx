import React, { useContext, useState, useEffect, ChangeEvent } from "react";
import * as Bl from "react-bulma-components";
import Flatpickr from "react-flatpickr";

import { Store } from "./Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";
import { Hook } from "flatpickr/dist/types/options";

/*
const useInput = (initState:string) => {
  const [value, set] = useState(initState);
  return {value, onChange: (e:any)=>{set(e.target.value)}}
};
*/
const Form = () => {
  const {state, dispatch} = useContext(Store);
  const [name, setName] = useState(state.name);
  const [department, setDartment] = useState(state.department);
  const [companyName, setCompanyName] = useState(state.companyName);
  const [distinationName, setDistinationName] = useState(state.distinationName);
  const [distinationDepartment, setDistinationDepartment] = useState(state.distinationDepartment);
  const [retirementDate, setRetirementDate] = useState(state.distinationDepartment);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    const payload = {[key]: value};
    switch (key) {
      case "name":
        setName(value);
        break;
      case "department":
        setDartment(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "distinationName":
        setDistinationName(value);
        break;
      case "distinationDepartment":
        setDistinationDepartment(value);
        break;
    };
    dispatch({
      type: E.Action.ADD_STRING,
      payload,
      error: false
    });
  };

  const datepick: any = (event:any) => {
    const key = event.target.name;
    const value = event.target.value;
    const payload = {[key]: value};
    switch (key) {
      case "retirementDate":
        setRetirementDate(value);
        break
    }
    dispatch({
      type: E.Action.ADD_DATE,
      payload,
      error: false
    });
    return 
  };

  return (
    <Bl.Columns.Column className="is-auto">
      <Bl.Form.Label>辞めたい日</Bl.Form.Label>
      <Flatpickr
        value={retirementDate}
        className="retirementDate"
        onChange={(e)=>{
          const payload = {retirementDate: e[0]};
          setRetirementDate(e[0]);
          dispatch({
            type: E.Action.ADD_DATE,
            payload,
            error: false
          });
        }}
        ></Flatpickr>
      <Bl.Form.Label>辞める人の名前</Bl.Form.Label>
      <Bl.Form.Input name="name" value={name} onChange={handleChange} />
      <Bl.Form.Label>辞める人の部署とか</Bl.Form.Label>
      <Bl.Form.Input name="department" value={department} onChange={handleChange} />
      <Bl.Form.Label>辞める人の会社名</Bl.Form.Label>
      <Bl.Form.Input name="companyName" value={companyName} onChange={handleChange} />
      <Bl.Form.Label>辞める人の会社の代表者の名前</Bl.Form.Label>
      <Bl.Form.Input name="distinationName" value={distinationName} onChange={handleChange} />
      <Bl.Form.Label>辞める人の会社の代表者の所属</Bl.Form.Label>
      <Bl.Form.Input name="distinationDepartment" value={distinationDepartment} onChange={handleChange} />
    </Bl.Columns.Column>
  );
};

export default Form;
