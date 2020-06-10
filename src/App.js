import React from "react";

import { MainPage } from "./comp/area";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="app_wrapper">
      <BrowserRouter>
        <MainPage />{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
