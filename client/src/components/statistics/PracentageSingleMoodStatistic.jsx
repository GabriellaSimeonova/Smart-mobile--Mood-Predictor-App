import React, { useState } from 'react';
import styled from 'styled-components';

export default function PracentageSingleMoodStatistic({ mood,pracent }) {
 
  return (
    <Box>
     <Number>{pracent}%</Number>
     <Image src={`../../icons/${mood}.png`} />
     <Word>{`${mood}`.toUpperCase()}</Word>
   </Box>
  );
}

const Box = styled.div`
  width: 100px;
  height: 137px;
  background-color: rgba(30, 30, 30, 0.32);
  border-radius:25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 79px;
  height: 77px;
`;

const Number = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 4px;
`;

const Word = styled.div`
  font-size: 12px;
  color: #ffffff;
`;