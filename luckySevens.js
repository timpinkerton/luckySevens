
let form = document.forms.luckySevens;
let element = form.elements;

const startingBet = element.startingBet.value;

const totalRollsTilBroke = 10;
const highestAmountWon = 630;

const rollCountAtHighestWon = 8;



// This will create a pop up window asking the user for the starting bet
alert("Please enter your starting bet");

function results() {
    document.getElementById("resultsStartingBet").innerText = startingBet;
    document.getElementById("totalRollsTilBroke").innerText = totalRollsTilBroke;
    document.getElementById("highestAmountWon").innerText = highestAmountWon;
    document.getElementById("rollCountAtHighestWon").innerText = rollCountAtHighestWon;
}

results();