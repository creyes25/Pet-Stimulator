/*-------------------------------- Constants --------------------------------*/
const currentNeeds = [
  "I'm hungry", 
  "Can you give me food?", 
  "I feel lonely", 
  "I want your attention", 
  "I'm bored", 
  "I want to play", 
  "I'm tired", 
  "I'm ready to sleep"
]

/*-------------------------------- Variables --------------------------------*/
let timeLeft = 75
let counter
let randomNeed, needs
let moodProgress = 0 


/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start')
const feedBtn = document.querySelector('#feed')
const attentionBtn = document.querySelector('#attention')
const entertainBtn = document.querySelector('#entertain')
const restBtn = document.querySelector('#rest')
const progressBar = document.querySelector('.progress-bar')
const countdownEl = document.querySelector('#timer')
const moodStatus = document.querySelector('#mood-status')
const petNeed = document.querySelector('#need')
const resetGame = document.querySelector('#reset')
const panda = document.querySelector('#panda')
const instructionBtn = document.querySelector('#instructions')
const instructions = document.querySelector('#collapseExample')



/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', init)
feedBtn.addEventListener('click', increaseMood)
attentionBtn.addEventListener('click', increaseMood)
entertainBtn.addEventListener('click', increaseMood)
restBtn.addEventListener('click', increaseMood)
resetGame.addEventListener('click', gameReset )
instructionBtn.addEventListener('show.bs.collapse', instructionsCard)




/*-------------------------------- Functions --------------------------------*/
function init() {
  startBtn.hidden = startBtn.hidden === true ? false : true
  countdownEl.textContent = ''
  moodProgress = 0
  progressBar.style.width = '0'
  moodStatus.textContent = ''
  petNeed.textContent = ''
  timeLeft = 75
  if (counter && needs) {
    clearInterval(counter)
    clearInterval(needs)
    counter = null
    needs = null
  }else {
    startTimer()
  }
  panda.src = "/assets/images/panda.gif"
}

function startTimer() {
  needs = setInterval(displayNeed, 2000)
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
  randomNeed = currentNeeds[Math.floor(Math.random() * currentNeeds.length)]
  petNeed.textContent = randomNeed
  
  if (randomNeed === currentNeeds[0] || randomNeed === currentNeeds[1]) {
    panda.src = '/assets/images/hungry.gif'
  }else if (randomNeed === currentNeeds[2] || randomNeed === currentNeeds[3]) {
    panda.src = '/assets/images/lonely.gif'
  }else if (randomNeed === currentNeeds[4] || randomNeed === currentNeeds[5]) {
    panda.src = '/assets/images/bored.gif'
  }else if (randomNeed === currentNeeds[6] || randomNeed === currentNeeds[7]) {
    panda.src = '/assets/images/tired.gif'
  }
  

}

function increaseMood(evt) {
  let needBtn = evt.target.id

  if (randomNeed === currentNeeds[0] || randomNeed === currentNeeds[1]) {
    if (needBtn === 'feed'){
      moodProgress += 2
      progressBar.style.width = `${moodProgress}%`
      progressBar.textContent = `${moodProgress}%`
      panda.src = '/assets/images/feed.gif'
    }
  }else if (randomNeed === currentNeeds[2] || randomNeed === currentNeeds[3]) {
    if (needBtn === 'attention'){
      moodProgress += 2
      progressBar.style.width = `${moodProgress}%`
      progressBar.textContent = `${moodProgress}%`
      panda.src = '/assets/images/attention.gif'
    }
  }else if (randomNeed === currentNeeds[4] || randomNeed === currentNeeds[5]) {
    if (needBtn === 'entertain'){
      moodProgress += 2
      progressBar.style.width = `${moodProgress}%`
      progressBar.textContent = `${moodProgress}%`
      panda.src = '/assets/images/entertain.gif'
    }
  }else if (randomNeed === currentNeeds[6] || randomNeed === currentNeeds[7]) {
    if (needBtn === 'rest'){
      moodProgress += 2
      progressBar.style.width = `${moodProgress}%`
      progressBar.textContent = `${moodProgress}%`
      panda.src = '/assets/images/rest.gif'
    }
  }

  timesUp()
}

function timesUp() {
  if (timeLeft === 0) {
    clearInterval(counter)
    clearInterval(needs)
    countdownEl.textContent = 'Times Up!'
    finalMood()
    resetGame.removeAttribute('hidden')

  }else if (moodProgress === 100 ) {
    clearInterval(counter)
    clearInterval(needs)
    finalMood()
    resetGame.removeAttribute('hidden')

  }
}

function finalMood(){
  const happy = "You're a great pet owner, your pet is happy! "
  const sad = "BOOOHOOO! You're a horrible owner, your pet is sad.... you should be disappointed!"
  if (moodProgress === 100) {
    moodStatus.textContent = happy
    panda.src = '/assets/images/happy.gif'
  }else {
    moodStatus.textContent = sad
    panda.src = '/assets/images/sad.gif'
  }
  petNeed.textContent = ''
  disableButtons()
}

function disableButtons(){
  feedBtn.disabled = true
  attentionBtn.disabled = true
  entertainBtn.disabled = true
  restBtn.disabled = true
}

function gameReset(){
  feedBtn.disabled = false
  attentionBtn.disabled = false
  entertainBtn.disabled = false
  restBtn.disabled = false
  resetGame.hidden = true
  init()
}

function instructionsCard(evt) {
  console.log(evt)
}

