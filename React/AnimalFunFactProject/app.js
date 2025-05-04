import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client';

//this is from main tag id of index.html file
const container = document.getElementById('app');

//create images array
const images = [];

//use for in loop for array looping
for(const animal in animals){
  //add new image item to the existing array
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

//create root variable for render
const root = createRoot(container);
const title = "";
const showBackground = true;
const background = <img className='background' alt='ocean' src='/images/ocean.jpg' />

//this is for background, animals' images
const animalFacts = (
  <div>
      <h1>{title == ""? "Click an animal for a fun fact" : title}</h1>
      {showBackground && background}
      <div className='animals'>
          {images}
      </div>
      <p id='fact'></p>
  </div>
);

//function to display animals' fact when user click
function displayFact (e)  {
  const animalName = e.target.alt;
  //method to create random index
  const animalIndex = Math.floor(Math.random() * animalFacts.length);
  //use the random index to generate a fun fact
  const funFact = animalFacts[animalIndex];
  //this is from id of animalFacts
  document.getElementById('fact').innerHTML=funFact;
}

root.render(animalFacts);
