import React, { useState } from 'react';
import styled from 'styled-components';
import angry from '../.././resources/icons/angry.png';
import anxious from '../.././resources/icons/anxious.png';
import confused from '../.././resources/icons/devastated.png';
import devastated from '../.././resources/icons/confused.png';
import lonely from '../.././resources/icons/lonely.png';
import sad from '../.././resources/icons/sad.png';
import shocked from '../.././resources/icons/shocked.png';
import moody from '../.././resources/icons/moody.png';
import loved from '../.././resources/icons/loved.png';
import relaxed from '../.././resources/icons/relaxed.png';
import happy from '../.././resources/icons/happy.png';
import fantastic from '../.././resources/icons/fantastic.png';

export default function PracentageSingleMoodStatistic({ mood,pracent }) {
  const getImage = (name) => {
    const image = pics.find(pic => pic.includes(name));
    return image ? image : '';
  }
  const pics = [angry, anxious, confused, devastated, lonely, sad, shocked, moody, loved, happy, fantastic, relaxed];
  return (
    <Box>
     <Number>{pracent}%</Number>
     <Image src={getImage(mood)} />
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