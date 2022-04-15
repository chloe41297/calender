import React from "react";
import styled from "styled-components";
import DayCell from "./DayCell";

interface props {
  DATES: number[];
  currentIdx: number;
}

export default function DayGrid({ DATES, currentIdx }: props) {
  const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

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
