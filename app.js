// import functions and grab DOM elements
const answers = [
    'Awful question- I refuse to Answer',
    'Yes, but how embarassing for you',
    'If you have to ask, then it\'s obviously no',
    'Well since you put it like that... no lol',
    'Think about what you just asked, go sit in time out and then ask again',
    'Well duh...', 
    'Worst question I\'ve heard all week. I don\'t get paid enough for this'
];
// const question = document.getElementById('question');
const answer = document.getElementById('answer');
const button = document.getElementById('button');
// initialize global state

const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
      
};


// set event listeners 
button.addEventListener('click', ()=> {
    const randomAnswer = getRandomNumber(answers.length);
    console.log(answers[randomAnswer]);



});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
