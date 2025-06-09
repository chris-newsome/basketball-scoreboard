let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let timerDisplay = document.getElementById("timer-display");

let timerInterval = null;
let timerSeconds = 12 * 60; // 12 minutes in seconds

function addOneToHome() {
  homeScore.textContent = parseInt(homeScore.textContent) + 1;
  updateLeaderHighlight();
}

function addTwoToHome() {
  homeScore.textContent = parseInt(homeScore.textContent) + 2;
  updateLeaderHighlight();
}

function addThreeToHome() {
  homeScore.textContent = parseInt(homeScore.textContent) + 3;
  updateLeaderHighlight();
}

function addOneToGuest() {
  guestScore.textContent = parseInt(guestScore.textContent) + 1;
  updateLeaderHighlight();
}
function addTwoToGuest() {
  guestScore.textContent = parseInt(guestScore.textContent) + 2;
  updateLeaderHighlight();
}
function addThreeToGuest() {
  guestScore.textContent = parseInt(guestScore.textContent) + 3;
  updateLeaderHighlight();
}

function updateLeaderHighlight() {
  const home = parseInt(homeScore.textContent);
  const guest = parseInt(guestScore.textContent);

  homeScore.classList.remove("leading");
  guestScore.classList.remove("leading");

  if (home > guest) {
    homeScore.classList.add("leading");
  } else if (guest > home) {
    guestScore.classList.add("leading");
  }
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals

  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      return;
    }
    timerSeconds--;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetGame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;

  homeScore.classList.remove("leading");
  guestScore.classList.remove("leading");

  timerSeconds = 12 * 60; // Reset to 12 minutes
  updateTimerDisplay();
  pauseTimer();
}
