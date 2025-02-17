// Game Sound Clips and Answers (You can add more sounds here)
const gameSounds = {
  easy: [
    { sound: 'audio/halo.mp3', answer: 'Halo' },
    { sound: 'audio/fortnite.mp3', answer: 'Fortnite' }
  ],
  medium: [
    { sound: 'audio/doom.mp3', answer: 'DOOM' },
    { sound: 'audio/overwatch.mp3', answer: 'Overwatch' },
    { sound: 'audio/csgo.mp3', answer: 'Counter-Strike' }
  ],
  hard: [
    { sound: 'audio/zelda.mp3', answer: 'Zelda' },
    { sound: 'audio/skyrim.mp3', answer: 'Skyrim' },
    { sound: 'audio/r6.mp3', answer: 'Rainbow Six Siege' }
  ]
};

let currentScore = 0;
let currentGameIndex = 0;

// Play sound based on selected difficulty
const playSoundButton = document.getElementById('playSound');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');
const difficultySelect = document.getElementById('difficulty');

playSoundButton.addEventListener('click', () => {
  const selectedDifficulty = difficultySelect.value;
  const selectedSounds = gameSounds[selectedDifficulty];
  currentGameIndex = Math.floor(Math.random() * selectedSounds.length);
  const audio = new Audio(selectedSounds[currentGameIndex].sound);
  audio.play();
});

// Check guess and update score
const submitGuessButton = document.getElementById('submitGuess');
const gameGuessInput = document.getElementById('gameGuess');

submitGuessButton.addEventListener('click', () => {
  const userGuess = gameGuessInput.value.trim().toLowerCase();
  const correctAnswer = gameSounds[difficultySelect.value][currentGameIndex].answer.toLowerCase();

  if (userGuess === correctAnswer) {
    currentScore++;
    feedback.textContent = "Correct! Well done!";
    feedback.classList.remove('incorrect');
    feedback.classList.add('correct');
    const correctAudio = new Audio('audio/correct.mp3'); // Correct sound
    correctAudio.play();
  } else {
    feedback.textContent = "Oops! Try again.";
    feedback.classList.remove('correct');
    feedback.classList.add('incorrect');
    const incorrectAudio = new Audio('audio/incorrect.mp3'); // Incorrect sound
    incorrectAudio.play();
  }

  score.textContent = `Your Score: ${currentScore}`;
  gameGuessInput.value = ''; // Clear input after each guess
});
