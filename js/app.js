/*-------------------------------- Constants --------------------------------*/
const counter = setInterval(timer, 1000)

/*-------------------------------- Variables --------------------------------*/
let timeLeft = 60
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
// startBtn.addEventListener('click', increaseMood)
feedBtn.addEventListener('click', increaseMood)
attentionBtn.addEventListener('click', increaseMood)
entertainBtn.addEventListener('click', increaseMood)
restBtn.addEventListener('click', increaseMood)


/*-------------------------------- Functions --------------------------------*/

init()
function init() {
  countdownEl.textContent = '02 : 00'
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
  let min = Math.floor(timeLeft / 60)
  let seconds = Math.floor(timeLeft % 60)
  countdownEl.textContent = `${min < 10 ? '0' : '' }${min} : ${seconds < 10 ? '0' : ''}${seconds}`

  if (timeLeft <= 0) {
    clearInterval(counter)
    countdownEl.textContent = 'Times Up!'
  }
}
