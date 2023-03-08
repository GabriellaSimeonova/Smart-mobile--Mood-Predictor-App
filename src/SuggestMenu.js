import './SuggestMenu.css';
import React from 'react';
import moods from './moods.json';
import {useNavigate } from 'react-router-dom';

function SuggestMenu() {
  const id = localStorage.getItem("clickedMoodID"); // get the id value from localStorage
  const navigate = useNavigate();
  const mood = moods.moods.find((el) => el.id === parseInt(id));

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

  return (
    <div className='suggestor-wrapper'>
      <img className='suggestPic' src={mood.pic} alt={mood.name} />
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
