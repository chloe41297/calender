import React from "react";
import styled from "styled-components";
import "./App.css";
import DayGrid from "./components/DayGrid";
import MonthHeader from "./components/MonthHeader";
import Month from "./components/MonthHeader";

function App() {
  return (
    <div className="App">
      <Main>
        <MonthHeader></MonthHeader>
        <DayGrid></DayGrid>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  margin: 80px;
  width: calc(100vw - 160px);
`;
