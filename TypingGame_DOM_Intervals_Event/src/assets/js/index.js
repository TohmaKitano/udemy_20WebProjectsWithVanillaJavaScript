import  '../scss/style.scss';

const word             = document.getElementById('word'),
      text             = document.getElementById('text'),
      scoreEl          = document.getElementById('score'),
      timeEl           = document.getElementById('time'),
      endgameEl        = document.getElementById('end-game-container'),
      settingsBtn      = document.getElementById('settings-btn'),
      settings         = document.getElementById('settings'),
      settingsForm     = document.getElementById('settings-form'),
      difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty = localStorage.getItem('difficulty') !== null 
  ? localStorage.getItem('difficulty')
  : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null 
? localStorage.getItem('difficulty')
: 'medium';

// Focus on text on start
text.focus;

// Start Counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
// console.log(getRandomWord());

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Upadate time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(time);

    // endgame
    gameOver();
  }
}

// Game over , show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event Listers

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  // console.log(insertedText);

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    // time += 2;
    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
})

// Settings btn click
settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
})

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  // console.log(difficulty);
  localStorage.setItem('difficulty', difficulty);
})