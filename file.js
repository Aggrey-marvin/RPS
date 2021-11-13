// This is where we start

let choices = ['rock', 'paper', 'scissors'];

let player;

let draw = 'It\'s a draw';
let win = 'You win!';
let loss = 'You Lose!';
let rockWin = ' Rock beats scissors';
let paperWin = ' Paper beats rock';
let scissorsWin = ' Scissors beat paper';
let wins = 0;
let loses = 0;
let result;
let computer;

let userName = window.prompt('Enter Username!', 'Username');

console.log('Welcome ' + userName);

// Game function call
game();

// computerPlay function
function computerPlay() {
  return Math.floor(Math.random()*3);
}

// Game function
function game() {
  let ctr = 0;
  for(ctr = 0; ctr < 5; ctr++){
    computer = choices[computerPlay()];
    console.log(computer);
    result = round(computer);
  
    if(result.includes(win)) wins++;
    else if(result.includes(loss)) loses++
  }

  // Test for win
  if(wins > loses) console.log('Congratulations, You\'ve won');
  else if(wins === loses) console.log('It\'s a Draw');
  else console.log('Sorry! You\'ve Lost');
}



// round function
function round(comp) {
  let result;
  let playerChoice = prompt('Make a choice');
  player = playerChoice.toLowerCase();
  if(player === 'rock' && computer === 'rock'){
    result = draw;
    console.log(draw);
  } 
    
  else if(player === 'rock' && computer === 'paper')
  {
    result = loss + paperWin;
    console.log(loss + paperWin);
  } 
  else if(player === 'rock' && computer === 'scissors') 
  {
    result = win + rockWin;
    console.log(win + rockWin);
  }
  else if(player === 'paper' && computer === 'rock') 
  {
    result = win + paperWin;
    console.log(win + paperWin);
  }
  else if(player === 'paper' && computer === 'paper') 
  {
    result = draw;
    console.log(draw);
  }
  else if(player === 'paper' && computer === 'scissors')
  {
    result = loss + scissorsWin;
    console.log(loss + scissorsWin);
  }
  else if(player === 'scissors' && computer === 'rock') 
  {
    result = loss + rockWin;
    console.log(loss + rockWin);
  }
  else if(player === 'scissors' && computer === 'paper') 
  {
    result = win + scissorsWin;
    console.log(win + scissorsWin);
  }
  else if(player === 'scissors' && computer === 'scissors')
  {
    result = draw;
    console.log(draw);
  }
  else console.log('INCORRECT INPUT!');

  return result;
}