const timerContent = document.querySelector('.timer');


function updateTimer() {
  const date = new Date();

  const timer = Intl.DateTimeFormat('pt-br', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)

  timerContent.innerText = timer;
}
updateTimer()

const interval = 1000 * 15;
setInterval(() => {
  updateTimer()
}, interval);