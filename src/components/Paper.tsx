import React, { useContext, useState, useEffect } from "react";
import * as Bl from "react-bulma-components";

import { Store } from "../components/Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";


const Paper = () => {
  const {state, dispatch} = useContext(Store);
  return (
      <Bl.Columns.Column>
        <table>
          <tbody>
            <tr>
              <td>
                <article>This is an A4 document.</article>
                <article>{state.name}</article>
                <article>{state.department}</article>
              </td>
            </tr>
          </tbody>
        </table>
      </Bl.Columns.Column>
  );
};

export default Paper;
