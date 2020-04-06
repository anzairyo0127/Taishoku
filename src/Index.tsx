import * as React from "react";
import * as ReactDom from "react-dom";

import Page from "./components/App";
import { StoreProvider } from "./components/Store";


ReactDom.render(
  <StoreProvider>
    <Page />
  </StoreProvider>
, document.getElementById("root")
);
