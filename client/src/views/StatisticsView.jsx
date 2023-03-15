import React, { useState } from 'react';
import styled from 'styled-components';
import MostlyFeltMoodWeek from '../components/statistics/MostlyFeltMoodWeek';
import PracentageSingleMoodStatistic from '../components/statistics/PracentageSingleMoodStatistic';
import WeeklyMoodStatistic from '../components/statistics/WeeklyMoodStatistic';

const data = [
  { mood: 'happy', pracent: 75 },
  { mood: 'loved', pracent: 60 },
  { mood: 'sad', pracent: 40 },
];

export default function StatisticsView(){
    
    return(
        <Container>
          <Title>Hello, user!</Title>
          <Subtitle>Your mood overview</Subtitle>
          <WeeklyMoodStatistic/>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <MostlyFeltMoodWeek mood={'happy'}/>
          </div>
          <ParcentageContainer>
            {data.map((item, index) => (
              <PracentageWrapper key={index}>
                <PracentageSingleMoodStatistic mood={item.mood} pracent={item.pracent}/>
              </PracentageWrapper>
            ))}
          </ParcentageContainer>
        </Container>
    );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
`;

const Subtitle = styled.h2`
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ParcentageContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap:5%;
`;

const PracentageWrapper = styled.div`
  margin-top: 20px;
  flex-basis: 100%;
  max-width: 400px;
`;


