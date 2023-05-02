const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId);
    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        timerEl.textContent = '0';
        return;
      }

      let hours = Math.floor(remainingSeconds / 3600);
      let minutes = Math.floor((remainingSeconds - hours * 3600) / 60);
      let seconds = remainingSeconds % 60;

      let timerText = '';

      if (hours > 0) {
        timerText += `${hours.toString().padStart(2, '0')}:`;
      }

      timerText += `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      timerEl.textContent = timerText;

      remainingSeconds--;
    }, 1000);
  };
};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
