/*-------------------------------- Constants --------------------------------*/
const currentNeeds = [
  "I'm hungry", 
  "Can you give me food?", 
  "I feel lonely", 
  "I want your attention", 
  "I'm bored", "I want to play", 
  "I'm tired", "I'm ready to sleep"
]

/*-------------------------------- Variables --------------------------------*/
let timeLeft = 5
let counter
let randomNeed = currentNeeds[Math.floor(Math.random() * currentNeeds.length)]
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
const petNeed = document.querySelector('#need')



/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', init)
feedBtn.addEventListener('click', increaseMood)
attentionBtn.addEventListener('click', increaseMood)
entertainBtn.addEventListener('click', increaseMood)




/*-------------------------------- Functions --------------------------------*/
function init() {
  
  countdownEl.textContent = '02 : 00'
  moodProgress = 0
  progressBar.style.width = '0'
  moodStatus.textContent = ''
  if (counter) {
    clearInterval(counter)
    counter = null
  }else {
    startTimer()
  }

}

function startTimer() {
  startBtn.style.display = 'none'
  displayNeed()
  counter = setInterval(timerCountDown, 1000)
}

function timerCountDown(){
  timeLeft -= 1
  let min = Math.floor(timeLeft / 60)
  let seconds = Math.floor(timeLeft % 60)
  countdownEl.textContent = `${min < 10 ? '0' : '' }${min} : ${seconds < 10 ? '0' : ''}${seconds}`
  timesUp()
}

function displayNeed() {
  petNeed.textContent = randomNeed
}

function increaseMood(evt) {
  if (evt) {
    moodProgress += 10
    progressBar.textContent = `${moodProgress}%`
    progressBar.style.width = `${moodProgress}%`
  }
  timesUp()
}

function timesUp() {
  if (timeLeft === 0) {
    clearInterval(counter)
    countdownEl.textContent = 'Times Up!'
    finalMood()
  }else if (moodProgress === 100 ) {
    clearInterval(counter)
    finalMood()
  }
}
function finalMood(){
  const happy = "You're a great pet owner, your pet is happy! "
  const sad = "BOOOHOOO! You're a horrible owner, your pet is sad.... you should be disappointed!"
  if (moodProgress === 100) {
    moodStatus.textContent = happy
  }else {
    moodStatus.textContent = sad
  }
  disableButtons()
}


function disableButtons(){
  feedBtn.disabled = true
  attentionBtn.disabled = true
  entertainBtn.disabled = true
  restBtn.disabled = true
}



