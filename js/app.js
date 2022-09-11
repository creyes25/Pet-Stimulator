/*-------------------------------- Constants --------------------------------*/





/*-------------------------------- Variables --------------------------------*/
let moodProgress = 0 


/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#start')
const feedBtn = document.querySelector('#feed-btn')
const attentionBtn = document.querySelector('#attention-btn')
const entertainBtn = document.querySelector('#entertain-btn')
const restBtn = document.querySelector('#rest-btn')
const progressBar = document.querySelector('.progress-bar')





/*----------------------------- Event Listeners -----------------------------*/
// startBtn.addEventListener('click', increaseMood)
feedBtn.addEventListener('click', increaseMood)
attentionBtn.addEventListener('click', increaseMood)
entertainBtn.addEventListener('click', increaseMood)
restBtn.addEventListener('click', increaseMood)


/*-------------------------------- Functions --------------------------------*/

function init() {

}

function increaseMood(evt) {
  console.log(evt.target)
}