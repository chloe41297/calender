import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import DayGrid from "./components/DayGrid";
import MonthHeader from "./components/MonthHeader";
import SideBar from "./components/SideBar";

function App() {
  const [TODAY, setTODAY] = useState(new Date());
  const [DATES, setDATES] = useState(new Array(14).fill(null));
  const [sideBarState, setSideBarState] = useState(false);
  const [toggleState, setToggleState] = useState<Date | undefined>(undefined);
  const currentDay = TODAY.getDay();
  const currentDate = TODAY.getDate();
  const currentMonth = TODAY.getMonth();
  const currentYear = TODAY.getFullYear();

  const getWeekDates = () => {
    let currentArr = DATES.map((day, i) => {
      let gap = currentDay === 0 ? i - 6 : i - (currentDay - 1);
      let diffDate = new Date(currentYear, currentMonth, currentDate + gap);
      return diffDate;
    });
    setDATES([...currentArr]);
  };

  useEffect(() => {
    getWeekDates();
  }, [TODAY]);
  return (
    <div className="App">
      <Main>
        <MonthHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          TODAY={TODAY}
          setTODAY={setTODAY}
        ></MonthHeader>
        <DayGrid
          DATES={DATES}
          sideBarState={sideBarState}
          setToggleState={setToggleState}
          setSideBarState={setSideBarState}
        ></DayGrid>
        <SideBar
          toggleState={toggleState}
          sideBarState={sideBarState}
          setToggleState={setToggleState}
          setSideBarState={setSideBarState}
        ></SideBar>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  margin: 80px;
  width: calc(100vw - 160px);
  /* transition: all 1s ease-in-out; */
`;
