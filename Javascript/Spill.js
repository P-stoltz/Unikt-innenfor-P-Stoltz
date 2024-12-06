let score = 0;
  let timerStarted = false;
  let timer;

  const scoreDisplay = document.getElementById('score');
  const button = document.getElementById('clickButton');

  button.addEventListener('click', () => {
    if (!timerStarted) {
      timerStarted = true;
      timer = setTimeout(() => {
        alert(`Tid ute! Poeng: ${score}`);
        score = 0;
        scoreDisplay.textContent = score;
        timerStarted = false; // Restart spill
      }, 5000); // 5 sekunder
    }

    score++;
    scoreDisplay.textContent = score;
  });