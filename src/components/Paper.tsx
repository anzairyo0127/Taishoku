import React, { useContext, useState, useEffect } from "react";
import * as Bl from "react-bulma-components";

import { Store } from "../components/Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";


const Paper = () => {
  const {state, dispatch} = useContext(Store);
  const options = {era: 'long'};
  const jaDate = new Intl.DateTimeFormat(['ja-JP-u-ca-japanese'], options).format(state.retirementDate);
  const [reiwa, tuki, hi] = jaDate.split("/");
  const masu = "致します。";
  return (
      <Bl.Columns.Column  className="is-8">
        <div className="sheet">
          <div className="title">退職届</div>
          <div className="dearCompany">
            <p>{state.companyName}</p>
            <p>{state.distinationDepartment}　{state.distinationName}殿</p>
          </div>
          <div className="watashi">
            <p>{state.department}</p>
            <p>{state.name}</p>
          </div>
          <div className="shizi">
            <p>私事、</p>
          </div>
          <div className="reason">
            <p>このたび一身上の都合により、{reiwa}年{tuki}月{hi}日をもって退職{masu}</p>
          </div>
          <div className="ijou">
            <p>以上</p>
          </div>
        </div>
      </Bl.Columns.Column>
  );
};

export default Paper;
