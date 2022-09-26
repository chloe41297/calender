import React, { useState } from "react";
import styled from "styled-components";

interface props {
  isMouseOver: boolean;
  setToggleState: React.Dispatch<React.SetStateAction<Date | undefined>>;
  date: Date;
  sideBarState: boolean;
  setSideBarState: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddContentBtn({
  isMouseOver,
  setToggleState,
  date,
  sideBarState,
  setSideBarState,
}: props) {
  const handleToggleState = () => {
    setSideBarState(true);
    setToggleState(date);
  };
  return <>{isMouseOver && <AddBtn onClick={handleToggleState}> + </AddBtn>}</>;
}

export default AddContentBtn;

const AddBtn = styled.button`
  width: 100%;
  background-color: whitesmoke;
  border: none;
  font-size: 20px;
  padding: 5px 0;
  border-radius: 5px;
  cursor: pointer;
`;
