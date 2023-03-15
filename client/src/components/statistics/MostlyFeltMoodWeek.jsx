import React from 'react';
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

export default function MostlyFeltMoodWeek({ mood }) {
  const getImage = (name) => {
    const image = pics.find(pic => pic.includes(name));
    return image ? image : '';
  }
  const pics = [angry, anxious, confused, devastated, lonely, sad,moody, loved, happy, fantastic, relaxed];
  return (
    <Container>
      In the past week you have been feeling mostly {mood} <Img src={getImage(mood)} alt={`${mood} emoji`} />
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

