import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import DayGrid from "./components/DayGrid";
import MonthHeader from "./components/MonthHeader";

function App() {
  const [TODAY, setToday] = useState(new Date());
  const [DATES, setDATES] = useState(new Array(14).fill(null));
  const currentDay = TODAY.getDay();
  const currentDate = TODAY.getDate();
  const currentMonth = TODAY.getMonth();
  const currentYear = TODAY.getFullYear();
  const currentIdx = new Date().getDay() - 1;

  const getWeekDates = () => {
    let currentArr = DATES.map((day, i) => {
      let gap = i - currentIdx;
      let diffDate = new Date(currentYear, currentMonth, currentDate + gap);
      return diffDate.getDate();
    });
    setDATES([...currentArr]);
  };

  useEffect(() => {
    getWeekDates();
  }, []);
  return (
    <div className="App">
      <Main>
        <MonthHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          setToday={setToday}
        ></MonthHeader>
        <DayGrid DATES={DATES} currentIdx={currentIdx}></DayGrid>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  margin: 80px;
  width: calc(100vw - 160px);
`;
