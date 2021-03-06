import React from "react";
import * as Bl from "react-bulma-components";

import Forms from "./Form";
import Paper from "./Paper";

const Page = () => {
  const columnsClasses = ["is-fullheight"].join(" ");
  return (
    <Bl.Columns className={columnsClasses}>
      <Paper />
      <Forms />
    </Bl.Columns>
  );
};

export default Page;
