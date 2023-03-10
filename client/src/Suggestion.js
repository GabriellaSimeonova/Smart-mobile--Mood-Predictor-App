import './Suggestion.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { memes, music, healthyHabit, meditation, quotes } from './suggestions.json';
import arrow from './resources/icons/arrow.png';


function Suggestion() {
  const navigate = useNavigate();
  const option = localStorage.getItem('selectedOptionID');
  const [suggestionIndex, setSuggestionIndex] = useState(getRandomIndex(3));

  let contentJSX; // declare variable to hold JSX for content div
  // switch statement to render different content based on option
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
  switch (option) {
    case 'Meme':
      contentJSX = (
        <div>
          <h2>Here's a meme for you:</h2>
          <img src={memes[suggestionIndex].url} alt="Meme" />
        </div>
      );
      break;
    case 'Music':
      contentJSX = (
        <div>
          <h2>Here's a song for you:</h2>
          <iframe width="300" height="300" src={music[suggestionIndex].url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      );
      break;
    case 'Healthy Habit':
      contentJSX = (
        <div>
          <h2>Here's a healthy habit suggestion for you:</h2>
          <h1>{healthyHabit[suggestionIndex].url}</h1>
        </div>
      );
      break;
    case 'Meditation':
      contentJSX = (
        <div>
          <h2>Here's a meditation for you:</h2>
          <h1>{meditation[suggestionIndex].url}</h1>
        </div>
      );
      break;
    case 'Quote':
      contentJSX = (
        <div>
          <h2>Here's a quote for you:</h2>
          <h1>{quotes[suggestionIndex].url}</h1>
        </div>
      );
      break;
    default:
      contentJSX = (
        <div>
          <p>No suggestions found for this option.</p>
        </div>
      );
  }

  function handleAnotherClick() {
    setSuggestionIndex(getRandomIndex(3));
  }

  return (
    <>
      <img className="arrow" src={arrow} onClick={() => navigate("/SuggestMenu")} />
      <div className='suggestion-wrapper'>
        <h1>{option}</h1>
        <div className='content'>
          {contentJSX}
        </div>
        <p>Not good enough?</p>
        <button className='pink-button otherbtn' onClick={handleAnotherClick}> Get Another </button>
      </div>
    </>
  );
}

export default Suggestion;