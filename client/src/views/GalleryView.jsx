import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PhotoCard from '../components/PhotoCard';

export default function PhotoGallery() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = JSON.parse(localStorage.getItem('image'));
        setPics([response]);
      } catch (error) {
        console.error('Error loading cards:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <GalleryContainer>
      <GalleryWrapper>
        {pics.map((pic, index) => (
          <PhotoCardWrapper key={index}>
            <PhotoCard img={pic.image} mood={pic.moodName} />
          </PhotoCardWrapper>
        ))}
      </GalleryWrapper>
    </GalleryContainer>
  );
}

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
