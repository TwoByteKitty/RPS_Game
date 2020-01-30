
const options = ['rock', 'paper', 'scissors'];

let playerOneWins = 0;
let playerTwoWins = 0;
let ties = 0;

let playerOneChoice;

function setVisibleImage(playerSelector, playerChoice) {
    $(`.${playerSelector}`).toggle(false);
    $(`.${playerSelector}.${playerChoice}`).toggle(true);
};

function faceOff(playerOne, playerTwo) {
    if ((playerOne === "rock" && playerTwo === "scissors") ||
    (playerOne === "scissors" && playerTwo === "paper") || 
    (playerOne === "paper" && playerTwo === "rock")) {
    playerOneWins++;
    showWinner("playerOne", playerOne)
  } else if (playerOne === playerTwo) {
    ties++;
    showWinner()
  } else {
    playerTwoWins++;
    showWinner("computer", playerTwo)
  }
};

function showWinner(winner, img){
if(winner){
    setVisibleImage("playerWinnerChoice", img);
    $("#playerOneWins").html(playerOneWins);
    $("#playerTwoWins").html(playerTwoWins);
}else{
    setVisibleImage("playerWinnerChoice", "tie");
}
};




$(".rpsChoice").on("click", function (event) {
    playerOneChoice = event.currentTarget.value
    setVisibleImage("playerOneChoice", event.currentTarget.value)
});

$(".goBtn").on("click", function (event) {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    setVisibleImage("playerTwoChoice", computerChoice)
    faceOff(playerOneChoice, computerChoice)

});

$(".resetBtn").on("click", function (event) {
    setVisibleImage("playerOneChoice", "placeholder")
    setVisibleImage("playerTwoChoice", "placeholder")
});