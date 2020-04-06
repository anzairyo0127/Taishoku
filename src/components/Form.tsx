import React, { useContext, useEffect } from "react";
import { Store } from "./Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";


const Form = () => {
  const {state, dispatch} = useContext(Store);
  return (
      <div>
        <p>hoge</p>
      </div>
  );
};

export default Form;
