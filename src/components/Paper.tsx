import React, { useContext, useEffect } from "react";
import { Store } from "../components/Store";
import * as I from "../scripts/Interfaces";
import * as E from "../scripts/Enums";


const Paper = () => {
  const {state, dispatch} = useContext(Store);
  return (
      <section className="sheet padding-10mm">
        <article>This is an A5 document.</article>
      </section>
  );
};

export default Paper;
