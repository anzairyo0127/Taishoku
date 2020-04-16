import React, { useContext, useState, useEffect, ChangeEvent } from "react";
import * as Bl from "react-bulma-components";

import { Store } from "./Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";

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
    };
    dispatch({
      type: E.Action.ADD_STRING,
      payload,
      error: false
    });  
  };
  return (
    <Bl.Columns.Column className="is-7">
      <Bl.Form.Label>辞める人の名前</Bl.Form.Label>
      <Bl.Form.Input name="name" value={name} onChange={handleChange} />
      <Bl.Form.Label>辞める人の部署とか</Bl.Form.Label>
      <Bl.Form.Input name="department" value={department} onChange={handleChange} />
    </Bl.Columns.Column>
  );
};

export default Form;
