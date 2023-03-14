import React,{useState } from "react";
import styled from "styled-components";

export default function WeeklyMoodStatistic() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const daysNmood = [
    { day: "Mon", mood: "sad", color: '#A9DEF9' },
    { day: "Tue", mood: "happy", color: '#EDE7B1' },
    { day: "Wed", mood: "loved", color: '#F694C1' },
    { day: "Thu", mood: "loved", color: '#F694C1' },
    { day: "Fri", mood: "sad", color: '#A9DEF9' },
    { day: "Sat", mood: "happy", color: '#EDE7B1' },
    { day: "Sun", mood: "happy", color: '#EDE7B1' },
  ];

  const handlePrevWeek = () => setCurrentWeek(currentWeek - 1);
  const handleNextWeek = () => setCurrentWeek(currentWeek + 1);

  return (
    <OuterBox>
      <ButtonContainer>
        <Button onClick={handlePrevWeek}>{"<"}</Button>
        <WeekDisplay>Week {currentWeek}</WeekDisplay>
        <Button onClick={handleNextWeek}>{">"}</Button>
      </ButtonContainer>

      <InnerBoxContainer>
      {daysNmood.map((item, index) => (
      item && (
      <InnerBox key={item.day} color={item.color}>
      <Image src={`../../icons/${item.mood}.png`} />
      <Day>{item.day.slice(0, 3)}</Day>
    </InnerBox>)))}
      </InnerBoxContainer>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  width: 350px;
  height: 200px;
  background-color: rgba(30, 30, 30, 0.32);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius:10px;
  padding: 10px;
`;

const InnerBoxContainer = styled.div`
width: 100%;
height: 194px; 
display: flex;
justify-content: center;
align-items: center;
overflow-x: auto; 
& > *:not(:last-child) {
  margin-right: 10px;
}
`;

const InnerBox = styled.div`
  width: 37px;
  height: 100%; 
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  border-radius:20px;
`;

const Image = styled.img`
width: 34px;
height: 39px;
margin-top: 25px; /* added margin-top to center the image */
`;

const Day = styled.div`
font-size: 12px;
color: #ffffff;
margin-bottom: 10px; /* added margin-bottom for spacing */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #1e1e1e;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const WeekDisplay = styled.div`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;
