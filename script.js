
const options = ['rock', 'paper', 'scissors'];

let playerOneWins = 0;
let playerTwoWins = 0;
let ties = 0;

const computerChoice = options[Math.floor(Math.random() * options.length)];

function setVisibleImage(player, playerChoice) {
    const playerSelector = `.player${player}Choice`;

    $(playerSelector).toggle(false);
    $(`${playerSelector}.${playerChoice}`).toggle(true);

};

$(".rpsChoice").on("click", function(event){
    setVisibleImage("One", event.currentTarget.value)
});