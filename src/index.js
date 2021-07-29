import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import setScores from './Assets/Javascript/post.js';
import getScores from './Assets/Javascript/get.js';
import buildStructure from './Assets/Javascript/buildHTML.js';
let submitScoreBtn = document.getElementById('submit_score_btn')
let nameInput = document.getElementById('name_input')
let scoreInput = document.getElementById('score_input')
let refresh_btn = document.getElementById('refresh_btn')
let messageTag = document.getElementById('messageTag')

function loadScores(){
  let resultJSON = getScores();
  resultJSON.then(function(data) {
    buildStructure(data.result);
  });
}

submitScoreBtn.addEventListener('click',(event)=>{
  event.preventDefault();
 setScores(nameInput.value,scoreInput.value)
messageTag.innerHTML = "Score Added ✓"
  setTimeout(()=>{messageTag.innerHTML = ""},1000) 
})

refresh_btn.addEventListener('click',(event)=>{
  event.preventDefault();
 loadScores();
});
loadScores()