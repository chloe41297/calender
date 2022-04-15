import React from "react";
import styled from "styled-components";

interface props {
  currentMonth: number;
  currentYear: number;
  setToday: React.Dispatch<React.SetStateAction<Date>>;
}

export default function MonthHeader({
  currentMonth,
  currentYear,
  setToday,
}: props) {
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Wrapper>
      <MainTitle>{MONTH[currentMonth]}</MainTitle>
      <MainTitle>{currentYear}</MainTitle>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-right: 40px;
`;
