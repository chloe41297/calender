import React from "react";
import styled from "styled-components";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

interface props {
  currentMonth: number;
  currentYear: number;
  TODAY: Date;
  setTODAY: React.Dispatch<React.SetStateAction<Date>>;
}

export default function MonthHeader({
  currentMonth,
  currentYear,
  TODAY,
  setTODAY,
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

  const handlePrev = () => {
    setTODAY(
      new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 7)
    );
  };
  const handleNext = () => {
    setTODAY(
      new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 7)
    );
  };
  const handleNow = () => {
    let current = new Date();
    setTODAY(
      new Date(current.getFullYear(), current.getMonth(), current.getDate())
    );
  };

  return (
    <Wrapper>
      <MainTitle>{MONTH[currentMonth]}</MainTitle>
      <MainTitle>{currentYear}</MainTitle>
      <MdArrowLeft size={40} onClick={handlePrev}></MdArrowLeft>
      <VscCircleFilled size={25} onClick={handleNow}></VscCircleFilled>
      <MdArrowRight size={40} onClick={handleNext}></MdArrowRight>
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
