import './Quiz.css';
import moods from './moods.json'
import React, { useState } from 'react';
import PageTitle from './PageTitle';
import PinkButton from './PinkButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Quiz() {
    const [chosenMood, setChosenMood] = useState(null);
    const navigate = useNavigate();
    const handleMoodClick = (mood) => {
      setChosenMood(mood.id);
      localStorage.setItem("clickedMood", mood.id)
    }

    //register the mood and the date in the db
    const registerMoodDb = async (mood) => {
      try {
        const response = await axios.post('http://localhost:5000/mood', {
          moodName: mood.name,
          dateOfRegistration: new Date().toISOString(),
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
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
