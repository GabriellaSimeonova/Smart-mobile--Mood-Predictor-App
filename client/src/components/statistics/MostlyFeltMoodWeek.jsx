import React from 'react';
import styled from 'styled-components';

export default function MostlyFeltMoodWeek({ mood }) {
  return (
    <Container>
      In the past week you have been feeling mostly {mood} <Img src={`../../icons/${mood}.png`} alt={`${mood} emoji`} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(30,30,30,0.32);
  color: white;
  padding: 16px;
  font-size: 18px;
  border-radius: 25px;
`;

const Img = styled.img`
  width: 33px;
  height: 34px;
  position: relative;
  left: 5px;
`;

