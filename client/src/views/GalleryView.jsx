import React, { useState } from 'react';
import styled from 'styled-components';
import Jabi from '../resources/pics/Jabi_San.jpg';
import Fashionista from '../resources/pics/Fashionista.jpeg';
import Jabimodo from '../resources/pics/Jabimodo.jpeg';

import PhotoCard from '../components/PhotoCard';

const GalleryContainer = styled.div`
  max-height: 92.1vh;
  overflow-y: scroll;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export default function PhotoGallery() {
  const [cards, setCards] = useState([
    { id: 1, img: Jabi, mood: 'relaxed' },
    { id: 2, img: Fashionista, mood: 'happy' },
    { id: 3, img: Jabimodo, mood: 'sad' },
  ]);

  return (
    <GalleryContainer>
      <GalleryWrapper>
        {cards.map((card) => (
          <PhotoCard key={card.id} img={card.img} mood={card.mood} />
        ))}
      </GalleryWrapper>
    </GalleryContainer>
  );
}


