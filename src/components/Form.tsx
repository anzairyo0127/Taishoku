import React, { useContext, useState, useEffect, ChangeEvent } from "react";
import * as Bl from "react-bulma-components";

import { Store } from "./Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";


const Form = () => {
  const {state, dispatch} = useContext(Store);
  const [name, setName] = useState(state.name);

  const handleChange = (event:any) => {
    setName(event.target.value);
    dispatch({
      type: E.Action.ADD_STRING,
      payload: {name: event.target.value},
      error: false
    })
  };
  return (
      <Bl.Columns.Column className="is-7">
        <Bl.Form.Label>辞める人の名前</Bl.Form.Label>
        <Bl.Form.Input name="name" value={name} onChange={handleChange} />
      </Bl.Columns.Column>
  );
};

export default Form;
