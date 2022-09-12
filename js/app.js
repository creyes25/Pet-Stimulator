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
const moodStatus = document.querySelector('#mood-status')
const resetbtn = document.querySelector('#reset-btn')



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
  moodStatus.textContent = ''

}

function startTimer() {
  counter = setInterval(timerCountDown, 1000)
}

function timerCountDown(){
  timeLeft -= 1
  let min = Math.floor(timeLeft / 60)
  let seconds = Math.floor(timeLeft % 60)
  countdownEl.textContent = `${min < 10 ? '0' : '' }${min} : ${seconds < 10 ? '0' : ''}${seconds}`
  timesUp()
}

function timesUp() {
  if (timeLeft === 0) {
    clearInterval(counter)
    countdownEl.textContent = 'Times Up!'
    disableButtons()
    displayMood()
  }else if (moodProgress === 100 ) {
    clearInterval(counter)
    disableButtons()
    displayMood()
  }
}

function displayMood(){
  const happy = "You're a great pet owner, your pet is happy! "
  const sad = "BOOOHOOO! You're a horrible owner, your pet is sad.... you should be disappointed!"
  if (moodProgress === 100) {
    moodStatus.textContent = happy
  }else {
    moodStatus.textContent = sad
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
    moodProgress += 10
    progressBar.textContent = `${moodProgress}%`
    progressBar.style.width = `${moodProgress}%`
  }
  timesUp()
}

function resetGame() {
  resetbtn.visibility = 'visible'
  resetbtn.textContent = 'Want to try again?'
  init()

}
