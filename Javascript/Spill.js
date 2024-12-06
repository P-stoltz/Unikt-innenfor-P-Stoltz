let score = 0;
let timerStarted = false;
let timer;
const scoreDisplay = document.getElementById('score');
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  if (!timerStarted) {
    timerStarted = true;
    message.textContent = ''; // Fjern eventuell tidligere melding
    timer = setTimeout(() => {
      message.textContent = `Tid ute! Poeng: ${score}`;
      // Pauser spillet i 3 sekunder før det starter på nytt
      setTimeout(() => {
        score = 0;
        scoreDisplay.textContent = score;
        message.textContent = ''; // Fjern meldingen
        timerStarted = false; // Tillat nytt spill
      }, 3000); // 3 sekunder pause
    }, 5000); // 5 sekunder til tiden går ut
  }

  score++;
  scoreDisplay.textContent = score;
});