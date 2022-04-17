import React from "react";
import styled from "styled-components";

interface props {
  title: string;
  subTitle: string;
}

export default function ContentBox({ title, subTitle }: props) {
  console.log(title, subTitle);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
