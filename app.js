// import functions and grab DOM elements

// let state
const questionSection = document.getElementById('question-section');
const askedQuestion = document.getElementById('asked-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  askButton.addEventListener('click', () => {

    // copy question to display
    const question = askedQuestion.value;
    // TODO: user didn't ask question
    questionDisplay.textContent = question;

    // hide question / show answer
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');

    // generate and show answer
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
});
