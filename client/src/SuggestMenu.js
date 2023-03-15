import './SuggestMenu.css';
import React from 'react';
import moods from './moods.json';
import {useNavigate } from 'react-router-dom';
import angry from './resources/icons/angry.png';
import anxious from './resources/icons/anxious.png';
import confused from './resources/icons/devastated.png';
import devastated from './resources/icons/confused.png';
import lonely from './resources/icons/lonely.png';
import sad from './resources/icons/sad.png';
import shocked from './resources/icons/shocked.png';
import moody from './resources/icons/moody.png';
import loved from './resources/icons/loved.png';
import relaxed from './resources/icons/relaxed.png';
import happy from './resources/icons/happy.png';
import fantastic from './resources/icons/fantastic.png';

function SuggestMenu() {
  let id = 10
  if(localStorage.getItem("clickedMoodID")){
    id = localStorage.getItem("clickedMoodID"); // get the id value from localStorage
  }
  const navigate = useNavigate();
  const mood = moods.moods.find((el) => el.id === parseInt(id));
  const pics = [angry, anxious, confused, devastated, lonely, sad, shocked, moody, loved, relaxed, happy, fantastic];

  const handleClick = (e) => {
    localStorage.setItem("selectedOptionID", e)
    navigate("/Suggestion");
  }

  let moodText;
  let mainOption;
  let otherOptions = ["Music", "Meditation", "Healthy Habit", "Quote", "Meme"];

    if (mood.id >= 9) {
      moodText = "Boost your good mood even more with";
      mainOption = "Meme"
    } else {
      moodText = "Fix your bad mood with";
      mainOption = "Quote";
    }
    const getImage = (name) => {
      const image = pics.find(pic => pic.includes(name));
      return image ? image : '';
    }

  return (
    <div className='suggestor-wrapper'>
      <img className='suggestPic' src={getImage(localStorage.getItem("clickedMoodName"))} alt={mood.name} />
      <h1 className='suggestor-text'>{moodText}</h1>
      <button id={mainOption} className='pink-button' onClick={() => handleClick(mainOption)} >{mainOption}</button>
      <div className='others-wrapper'>
        <h2 className='suggestor-text'>Try also:</h2>
        {otherOptions.filter(option => option !== mainOption).map((option) => (
          <button key={option} id={option} className='pink-button otherbtn' onClick={() => handleClick(option)}>{option}</button>
        ))}
      </div>
    </div>
  )
}

export default SuggestMenu;
