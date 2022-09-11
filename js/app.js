/*-------------------------------- Constants --------------------------------*/
const counter = setInterval(timer, 1000)




/*-------------------------------- Variables --------------------------------*/
let timeLeft = 5
let moodProgress = 0 


/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start')
const feedBtn = document.querySelector('#feed-btn')
const attentionBtn = document.querySelector('#attention-btn')
const entertainBtn = document.querySelector('#entertain-btn')
const restBtn = document.querySelector('#rest-btn')
const progressBar = document.querySelector('.progress-bar')
const countdownEl = document.querySelector('#countdown')





/*----------------------------- Event Listeners -----------------------------*/
// startBtn.addEventListener('click', increaseMood)
feedBtn.addEventListener('click', increaseMood)
attentionBtn.addEventListener('click', increaseMood)
entertainBtn.addEventListener('click', increaseMood)
restBtn.addEventListener('click', increaseMood)


/*-------------------------------- Functions --------------------------------*/

init()
function init() {
  clearInterval(counter)
  progressBar.style.width = '0'
  progressBar.textContent = ''
}

function increaseMood(evt) {
  if (evt) {
    moodProgress += 1
    progressBar.style.width = `${moodProgress}%`
    progressBar.textContent = `${moodProgress}%`
  }
}

function timer(){
  timeLeft -= 1
  countdownEl.textContent = `${timeLeft} seconds`
  if (timeLeft <= 0) {
    clearInterval(counter)
  }
}

