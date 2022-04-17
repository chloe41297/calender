import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";

interface props {
  dateProp: Date;
  isToday: boolean;
}
interface isTodayColor {
  isToday: boolean;
}

interface dataType {
  [props: number]: any;
}

export default function DayCell({ dateProp, isToday }: props) {
  const data: dataType = {
    1650034800000: [
      {
        id: 1,
        content: { title: "i love it!!!!!!", subTitle: "Oops i did it again" },
      },
      {
        id: 2,
        content: {
          title: " this is second",
          subTitle: "woooow",
        },
      },
      {
        id: 3,
        content: {
          title: " this is second",
          subTitle: "woooow",
        },
      },
    ],
  };
  const currentId = dateProp.valueOf();

  return (
    <Wrapper>
      <Bar isToday={isToday}></Bar>
      <Date isToday={isToday}>{dateProp.getDate()}</Date>
      <Content>
        {data[currentId]
          ? Object.values(data[currentId])?.map((item: any) => {
              const { title, subTitle } = item.content;

              return (
                <ContentBox
                  title={title}
                  subTitle={subTitle}
                  key={item.id}
                ></ContentBox>
              );
            })
          : ""}
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
`;
const Bar = styled.div<isTodayColor>`
  width: 100%;
  height: 5px;
  background-color: ${(item) => (item.isToday ? "#ee5253" : "black")};
`;
const Date = styled.div<isTodayColor>`
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  color: ${(item) => (item.isToday ? "#ee5253" : "black")};
`;
const Content = styled.div`
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  height: 100%;
  box-sizing: border-box;
  word-break: break-all;
`;
