import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";

interface styledProps {
  sideBarState: Boolean;
  defaultWidth: string;
}

interface Iprops {
  toggleState: Date | undefined;
  setToggleState: React.Dispatch<React.SetStateAction<Date | undefined>>;
  sideBarState: boolean;
  setSideBarState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({
  toggleState,
  setToggleState,
  sideBarState,
  setSideBarState,
}: Iprops) {
  const DAYS = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THUESDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  const selectedDay =
    DAYS[
      Number(toggleState?.getDay()) === 0
        ? 6
        : Number(toggleState?.getDay()) - 1
    ];
  const selectedMonth = Number(toggleState?.getMonth()) + 1;
  const selectedYear = toggleState?.getFullYear();
  const selectedDate = toggleState?.getDate();
  const defaultWidth = "550px";

  const handleCloseBtn = () => {
    setSideBarState(false);
  };
  return (
    <Container sideBarState={sideBarState} defaultWidth={defaultWidth}>
      <CloseBtn onClick={handleCloseBtn}>{">>"}</CloseBtn>
      <Divider></Divider>
      <DayTitle>{selectedDay}</DayTitle>
      <div>
        <DaySubtitle>
          {selectedYear + "/" + selectedMonth + "/" + selectedDate}
        </DaySubtitle>
      </div>
      <Spacer></Spacer>
      <InputForm toggleState={toggleState}></InputForm>
    </Container>
  );
}

const Container = styled.section<styledProps>`
  position: fixed;
  top: 0;
  right: ${(props) => `-${props.defaultWidth}`};
  height: 100%;
  width: ${(props) => `${props.defaultWidth}`};
  background-color: white;
  transform: ${(props) =>
    props.sideBarState
      ? `translateX(-${props.defaultWidth})`
      : "translateX(0px)"};
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
  padding: 4px 16px 16px 16px;
  /* border-left: 1px solid black; */
  box-shadow: -5px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

const CloseBtn = styled.div`
  padding: 4px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  font-weight: 400;
  color: #aaa;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Spacer = styled.div`
  margin-top: 80px;
`;
const DayTitle = styled.div`
  font-size: 48px;
  font-weight: 800;
`;

const DaySubtitle = styled.div`
  font-size: 32px;
  font-weight: 400;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;
