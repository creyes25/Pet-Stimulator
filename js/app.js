/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let timeLeft = 2
let counter
let moodProgress = 0 


/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start')
const feedBtn = document.querySelector('#feed-btn')
const attentionBtn = document.querySelector('#attention-btn')
const entertainBtn = document.querySelector('#entertain-btn')
const restBtn = document.querySelector('#rest-btn')
const moodBar = document.querySelector('.progress')
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
    timesUp()
  }
}

function timesUp() {
  if (timeLeft === 0 ) {
    disableButtons()
    finalMood()
  }
}

function finalMood(){
  let happy, sad
  moodBar.display = 'none'
  if (moodProgress >= 100) {
    happy = 'Wow! Your pet is happy!'
    console.log(happy)
  }else {
    sad = "Boohoo! you're a horrible owner"
    console.log(sad)
  }
}

function disableButtons(){
  feedBtn.disabled = true
  attentionBtn.disabled = true
  entertainBtn.disabled = true
  restBtn.disabled = true
}


function increaseMood(evt) {
  if (evt) {
    moodProgress += 1
    progressBar.style.width = `${moodProgress}%`
  }
  finalMood()
}



function render () {

}