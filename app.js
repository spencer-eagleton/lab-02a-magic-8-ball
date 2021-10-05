// import functions and grab DOM elements
import { answers } from './answers.js';
// const question = document.getElementById('question');
// const answer = document.getElementById('answer');
const button = document.getElementById('button');
// initialize global state

const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
      
};


// set event listeners 
button.addEventListener('click', ()=> {
    const randomAnswer = getRandomNumber(answers.length);
    

    const answer = document.getElementById('answer');
    answer.textContent = answers[randomAnswer];

});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
