import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sadCappy from '../resources/icons/sad.png'
import PhotoCard from '../components/PhotoCard';

export default function PhotoGallery() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = JSON.parse(localStorage.getItem('images'));
        setPics(response);
      } catch (error) {
        console.error('Error loading cards:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <GalleryContainer>
      <GalleryWrapper>
        {pics ? (
          pics.map((pic, index) => (
            <PhotoCardWrapper key={index}>
              <PhotoCard img={pic.image} mood={pic.moodName} />
            </PhotoCardWrapper>
          ))
        ) : (
          <NoPicturesWrapper>
            <NoPicturesText>No pictures yet</NoPicturesText>
            <NoPicturesImage src={sadCappy} alt="No pictures yet" />
          </NoPicturesWrapper>
        )}
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

const NoPicturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const NoPicturesText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const NoPicturesImage = styled.img`
  max-width: 50%;
  margin-top: 20px;
`;

