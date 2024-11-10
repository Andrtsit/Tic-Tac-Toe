`use strict`;

(()=>{

const Elements = {
    player1Score : document.getElementById(`score1`),
    player2Score : document.getElementById(`score2`),
    grid : document.getElementById(`grid`),
    btnReset : document.getElementById(`reset`),
    winner : document.getElementById(`winner`) 
}
const player1 = {
    score: 0,
    mark: `X`,
}
const player2 = {
    score: 0,
    mark: `O`,
}

let currentPlayer = true;
let boxes = [];

// CREATE BOARD
const createBoard = function (number) {
   for(let i =0 ; i < number ; i++){
   const box = document.createElement(`div`)
   box.classList.add(`box`)
   box.setAttribute(`coords`,`${i}`)
   boxes.push(box)
   grid.appendChild(box)    
}
}

createBoard(9);

// RESET BOARD 

const resetBoard = ()=>{
    boxes.forEach(box=> box.textContent = "")
    currentPlayer = true;
    Elements.winner.style.display = `none`
    Elements.player1Score.textContent = player1.score
    Elements.player2Score.textContent = player2.score
}

// GAME SCENARIOS /CHECK WINNER


const GAME_SCENARIOS = {
    HORIZONTAL: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    VERTICAL: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    DIAGONAL: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

const player1Wins = function(){
    player1.score += 1;
    Elements.player1Score.textContent =  player1.score ;
    Elements.winner.textContent = "Player 1 Wins"
    Elements.winner.style.display = `block`
    setTimeout(resetBoard,1000)
}

const player2Wins = function(){
    Elements.player2Score.textContent =  player2.score + 1;
    Elements.winner.textContent = "Player 2 Wins"
    Elements.winner.style.display = `block`
    setTimeout(resetBoard,1000)
}

 
const checkWinner = function(){
    if(GAME_SCENARIOS.HORIZONTAL[0].every(index =>boxes[index].textContent === `X`)) {
      player1Wins()
    }
    if(GAME_SCENARIOS.HORIZONTAL[1].every(index =>boxes[index].textContent === `X`)) {
       player1Wins()
     }
     if(GAME_SCENARIOS.HORIZONTAL[2].every(index =>boxes[index].textContent === `X`)) {
        player1Wins()
     }
     if(GAME_SCENARIOS.VERTICAL[0].every(index =>boxes[index].textContent === `X`)) {
        player1Wins()
     }
     if(GAME_SCENARIOS.VERTICAL[1].every(index =>boxes[index].textContent === `X`)) {
        player1Wins()
     }
     if(GAME_SCENARIOS.VERTICAL[2].every(index =>boxes[index].textContent === `X`)) {
        player1Wins()   
     }
     if(GAME_SCENARIOS.DIAGONAL[0].every(index =>boxes[index].textContent === `X`)) {
        player1Wins()     
     }
     if(GAME_SCENARIOS.DIAGONAL[1].every(index =>boxes[index].textContent === `X`)) {
        player1Wins()    
     }
    
}


 
// EVENT LISTENERS 

boxes.forEach(box => {
    box.addEventListener(`click`,function(){
    currentPlayer ? box.textContent = player1.mark : box.textContent = player2.mark;
    currentPlayer = !currentPlayer;
    checkWinner()  
    }
    )
 })

Elements.btnReset.addEventListener(`click`,function(){
    resetBoard()
    player1.score = 0;
    player2.score = 0;
})
 
})();