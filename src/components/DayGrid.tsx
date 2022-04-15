import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DayCell from "./DayCell";

export default function DayGrid() {
  const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const TODAY = new Date();
  const [DATES, setDATES] = useState(new Array(14).fill(null));
  const currentDay = TODAY.getDay();
  const currentDate = TODAY.getDate();
  const currentIdx = currentDay - 1;

  const getWeekDates = () => {
    let currentArr = DATES.map((day, i) => {
      let gap = i - currentIdx;
      return currentDate + gap;
    });
    setDATES([...currentArr]);
  };
  useEffect(() => {
    getWeekDates();
  }, []);

  return (
    <Wrapper>
      {DAYS.map((day) => (
        <Day key={day}>{day}</Day>
      ))}
      {DATES.map((date, i) => {
        return (
          date && (
            <DayCell
              dateProp={date}
              isToday={i === currentIdx ? true : false}
              key={date}
            ></DayCell>
          )
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
  max-width: 2000px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 3%;
  text-align: left;
  margin-top: 40px;
  box-sizing: border-box;
`;
const Day = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
`;
