/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let timeLeft = 5
let counter
let moodProgress = 0 


/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start')
const feedBtn = document.querySelector('#feed-btn')
const attentionBtn = document.querySelector('#attention-btn')
const entertainBtn = document.querySelector('#entertain-btn')
const restBtn = document.querySelector('#rest-btn')
const progressBar = document.querySelector('.progress-bar')
const countdownEl = document.querySelector('#timer')


/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', init)
feedBtn.addEventListener('click', increaseMood)
attentionBtn.addEventListener('click', increaseMood)
entertainBtn.addEventListener('click', increaseMood)
restBtn.addEventListener('click', increaseMood)


/*-------------------------------- Functions --------------------------------*/


function init() {
  startBtn.style.display = 'none'
  countdownEl.textContent = '02 : 00'
  if (counter) {
    clearInterval(counter)
    counter = null
  }else {
    startTimer()
  }
  progressBar.style.width = '0'
  progressBar.textContent = ''
}

function startTimer() {
  counter = setInterval(timerCountDown, 1000)
}


function timerCountDown(){
  timeLeft -= 1
  let min = Math.floor(timeLeft / 60)
  let seconds = Math.floor(timeLeft % 60)
  countdownEl.textContent = `${min < 10 ? '0' : '' }${min} : ${seconds < 10 ? '0' : ''}${seconds}`
  if (timeLeft <= 0) {
    clearInterval(counter)
    countdownEl.textContent = 'Times Up!'
  }
}

function increaseMood(evt) {
  if (evt) {
    moodProgress += 1
    progressBar.style.width = `${moodProgress}%`
    progressBar.textContent = `${moodProgress}%`
  }
}