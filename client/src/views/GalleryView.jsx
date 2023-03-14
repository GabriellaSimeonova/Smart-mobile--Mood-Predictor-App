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

const PhotoCardWrapper = styled.div`
  flex-basis: 33.33%; /* for larger screens, display 3 pictures per row */
  @media screen and (max-width: 768px) {
    flex-basis: 50%; /* for smaller screens like phones, display 2 pictures per row */
  }
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
          <PhotoCardWrapper key={card.id}>
            <PhotoCard img={card.img} mood={card.mood} />
          </PhotoCardWrapper>
        ))}
      </GalleryWrapper>
    </GalleryContainer>
  );
}



