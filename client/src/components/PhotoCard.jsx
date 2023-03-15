import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import angry from '../resources/icons/angry.png';
import anxious from '../resources/icons/anxious.png';
import confused from '../resources/icons/devastated.png';
import devastated from '../resources/icons/confused.png';
import lonely from '../resources/icons/lonely.png';
import sad from '../resources/icons/sad.png';
import shocked from '../resources/icons/shocked.png';
import moody from '../resources/icons/moody.png';
import loved from '../resources/icons/loved.png';
import relaxed from '../resources/icons/relaxed.png';
import happy from '../resources/icons/happy.png';
import fantastic from '../resources/icons/fantastic.png';

const StyledCard = styled(Card)`
  position: relative;
  transition: transform 0.6s ease-in-out, box-shadow 0.2s ease-in-out;
  transform-style: flat;
  ${({ flipped }) => flipped && `
    transform: rotateY(180deg);
  `}
  border:4px solid pink;
  margin-bottom: 5px;
`;

const CardBack = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const CardFront = styled(Card)`
  width: 100%;
  height: 100%;
`;

const Image = styled(Card.Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

const TextMood = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  transform-origin: left;
  transform: rotateY(0deg);
  ${({ flipped }) => flipped && `
    transform: rotateY(180deg);
  `}
`;

const Emoji = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  transform-origin: left;
  transform: rotateY(0deg);
  ${({ flipped }) => flipped && `
    transform: rotateY(180deg);
  `}
`;

export default function PhotoCard({ img, mood }) {
  const getImage = (name) => {
    const image = pics.find(pic => pic.includes(name));
    return image ? image : '';
  }
  const pics = [angry, anxious, confused, devastated, lonely, sad, shocked, moody, loved, happy, fantastic, relaxed];

  const [flipped, setFlipped] = useState(false);
  const handleClick = () => setFlipped(!flipped);

  return (
    <StyledCard
      style={{ width: '18rem', height: '18rem' }}
      flipped={flipped}
      onClick={handleClick}
    >
      <CardFront>
        <Image variant="top" src={img} />
      </CardFront>
      <CardBack style={{ visibility: flipped ? 'visible' : 'hidden' }}>
        {flipped && (
          <div style={{ transform: 'rotateY(180deg)' }}>
            <Emoji src={getImage(mood)} alt="Emoji" flipped={flipped} />
          </div>
        )}
        <TextMood flipped={flipped}>{mood}</TextMood>
      </CardBack>
    </StyledCard>
  );
}