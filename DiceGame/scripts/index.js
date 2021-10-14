let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 12;

function onSubmit(event) {
  event.preventDefault();
  const formData = document.querySelectorAll('input')
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;

  document.querySelector('.form-container').style.display = "none";
  document.querySelector('.board-container').style.display = "block";

  document.querySelector('#player1').querySelector('.heading').innerHTML = firstPlayerName
  document.querySelector('#player2').querySelector('.heading').innerHTML = secondPlayerName
}

function rollDice(playerIndex) {
  const randomScore = getRandom()
  const playerNodes = document.querySelector(`#player${playerIndex}`);
  playerNodes.querySelector('.dice img').setAttribute('src', `../images/dice${randomScore}.png`)
  switch(playerIndex) {
    case 1:
      firstPlayerScore += randomScore
      playerNodes.querySelector('.score').innerHTML = firstPlayerScore;
      playerNodes.querySelector('input').setAttribute('disabled', true)
      document.querySelector('.player2').querySelector('input').removeAttribute('disabled')
    break;

    case 2:
      secondPlayerScore += randomScore
      playerNodes.querySelector('.score').innerHTML = secondPlayerScore;
      playerNodes.querySelector('input').setAttribute('disabled', true)
      document.querySelector('.player1').querySelector('input').removeAttribute('disabled')
    break;

    default:
      break;
  }

  if(checkWinner()) {
    document.querySelector('.restart-game').style.display = "flex"
  }
}


function checkWinner() {
  if(firstPlayerScore >= totalScore) {
    document.querySelector('#player1').innerHTML += `<div class="winner"></div>`
    document.querySelector('.player2').querySelector('input').setAttribute('disabled', true)

    return true
  }
  if(secondPlayerScore >= totalScore) {
    document.querySelector('#player2').innerHTML += `<div class="winner"></div>`
    document.querySelector('.player1').querySelector('input').setAttribute('disabled', true)

    return true
  }
   
  return false
}

function getRandom() {
  return Math.floor(Math.random()*6)+1;
}

// Restart the game with same player
function restart() {
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  document.querySelector(`#player1`).querySelector('.score').innerHTML = firstPlayerScore
  document.querySelector(`#player2`).querySelector('.score').innerHTML = secondPlayerScore
  document.querySelector(`#player1`).querySelector('input').removeAttribute('disabled')
  document.querySelector('.player2').querySelector('input').setAttribute('disabled', true)
  document.querySelector('.winner').remove()
  document.querySelector('.dice img').setAttribute('src', `../images/dice1.png`)

  document.querySelector('.restart-game').style.display = "none"
}


//restart with anothr player
function restartNow() {
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  firstPlayerName = ""
  secondPlayerName = ""
  document.querySelector(`#player1`).querySelector('.score').innerHTML = firstPlayerScore
  document.querySelector(`#player2`).querySelector('.score').innerHTML = secondPlayerScore
  document.querySelector(`#player1`).querySelector('input').removeAttribute('disabled')
  document.querySelector('.player2').querySelector('input').setAttribute('disabled', true)
  
  document.querySelector('.winner').remove()

  document.querySelector('.dice img').setAttribute('src', `../images/dice1.png`)

  const formData = document.querySelectorAll('input')
  formData[0].value = ""
  formData[1].value = ""
  formData[2].value = ""

  document.querySelector('.form-container').style.display = "flex";
  document.querySelector('.board-container').style.display = "none";


  document.querySelector('.restart-game').style.display = "none"
}
