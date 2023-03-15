import './Quiz.css';
import moods from './moods.json'
import React, { useState } from 'react';
import PageTitle from './PageTitle';
import { useNavigate } from 'react-router-dom';
import PinkButton from './PinkButton';
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




function Quiz() {
    const [chosenMood, setChosenMood] = useState(null);
    const navigate = useNavigate();

    const pics = [angry, anxious, confused, devastated, lonely, sad, shocked, moody, loved, happy, fantastic, relaxed];
    const handleMoodClick = (mood) => {
      setChosenMood(mood.id);
      localStorage.setItem("clickedMoodID", mood.id)
      localStorage.setItem("clickedMoodName", mood.name)

    }

    const getImage = (name) => {
      const image = pics.find(pic => pic.includes(name));
      return image ? image : '';
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
            <img className='moodPic' src={getImage(mood.name)} alt={mood.name} />
          </div>
        ))}
        
      </div>
      <button className="pink-button"  onClick={() => navigate("/Camera")}>Save</button>
      <p className='small-text' onClick={() => navigate("/Camera")}>Skip...</p>
      </div>
   
    )
  }
export default Quiz;
