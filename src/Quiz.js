import './Quiz.css';
import moods from './moods.json'
import React, { useState } from 'react';
import PageTitle from './PageTitle';
import { useNavigate } from 'react-router-dom';
import PinkButton from './PinkButton';

function Quiz() {
    const [chosenMood, setChosenMood] = useState(null);
    const navigate = useNavigate();
    const handleMoodClick = (mood) => {
      setChosenMood(mood.id);
      localStorage.setItem("clickedMoodID", mood.id)
    }
  
    return (
      <div className='wrapper'>
      <PageTitle text="How are you feeling today?"/>
         <div className='Quiz-container'>

        {moods.moods.map((mood) => (
          <div
            className={`mood-container ${chosenMood === mood.id ? 'chosen' : ''}`}
            key={mood.id}
            onClick={() => handleMoodClick(mood)}
          >
            <h2 className='moodName'>{mood.name}</h2>
            <img className='moodPic' src={mood.pic} alt={mood.name} />
          </div>
        ))}
        
      </div>
      <button className="pink-button"  onClick={() => navigate("/Camera")}>Save</button>
      <p className='small-text' onClick={() => navigate("/Camera")}>Skip...</p>
      </div>
   
    )
  }
export default Quiz;
