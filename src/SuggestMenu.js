import './SuggestMenu.css';
import React from 'react';
import moods from './moods.json'

function SuggestMenu() {
  const id = localStorage.getItem("clickedMoodID"); // get the id value from localStorage

  const mood = moods.moods.find((el) => el.id === parseInt(id));

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
      <img className='moodPic' src={mood.pic} alt={mood.name} />
      <h1>{moodText}</h1>
      <button id={mainOption} onClick={() => localStorage.setItem("selectedOptionID", mainOption)} >{mainOption}</button>
      <h2>Try also:</h2>

      {otherOptions.filter(option => option !== mainOption).map((option) => (
        <button id={option} onClick={() => localStorage.setItem("selectedOptionID", option)}>{option}</button>
      ))}


    </div>
  )
}

export default SuggestMenu;
