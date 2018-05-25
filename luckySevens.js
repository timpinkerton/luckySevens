// Global variables
const form = document.forms.luckySevens;
const element = form.elements;

document.forms["luckySevens"]["startingBet"].value = 0;

// rollCounter initialized at 0
var rollCounter = 0;
var highestAmountWon = 0;
var rollCountAtHighestWon = 0;

// initializing gameMoney equal to 0
var gameMoney = 0;

// playGame function is called when the submit(playButton) is clicked
function playGame() {

    // parseInt will convert the input into a number (instead of a string)
    var startingBet = parseInt(element.startingBet.value);

    if (rollCounter === 0) {
        gameMoney = startingBet;
    }

    if (gameMoney > 0) {

        console.log("-----------------")
        console.log("Current Game Money: " + gameMoney);
        console.log("Game Money is of type " + typeof gameMoney);

        rollCounter += 1;

        console.log("Roll number " + rollCounter);

        var diceOutcome = rollDice();

        console.log("You rolled a: " + diceOutcome);

        if (diceOutcome === 7) {
            gameMoney += 4;
            console.log("You Win 4!");

            if (gameMoney > highestAmountWon) {
                highestAmountWon = gameMoney;
                rollCountAtHighestWon = rollCounter;
            }
        } else {
            gameMoney -= 1;
            console.log("You Lose 1!");
        }
        console.log("New Game Money: " + gameMoney);
        console.log("Here game Money is of type " + typeof gameMoney);
        console.log("Highest amount won is currently: " + highestAmountWon);
        console.log("-----------------")

        document.forms["luckySevens"]["startingBet"].value = gameMoney;

        if (gameMoney === 0) {
            showResults();
            console.log("Sorry you're out of money.");
        }

        function showResults() {
            document.getElementById("resultsStartingBet").innerText = startingBet;
            document.getElementById("totalRollsTilBroke").innerText = rollCounter;
            document.getElementById("highestAmountWon").innerText = highestAmountWon;
            document.getElementById("rollCountAtHighestWon").innerText = rollCountAtHighestWon;
            document.getElementById("playButton").style.display = "none";
            document.getElementById("resetButton").style.display = "block";
            document.getElementById("results").style.display = "block";

            return false;
        }
    }
    return false;
}

// The rollDice function will provide a random number for our roll
function rollDice() {
    // roll function will return the random number in the variable die
    function roll() {
        var die = Math.ceil(Math.random() * (1 + 6 - 1));
        return die;
    }
    // Calling the roll() function and saving the result in die1 and die2
    var die1 = roll();
    var die2 = roll();
    var diceTotal = die1 + die2;
    console.log("Current roll: " + die1 + die2 + diceTotal);
    return diceTotal;
}

// resetForm() function will update the button and reset all the counters
function resetForm() {
    document.getElementById("playButton").style.display = "block";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("results").style.display = "none";

    rollCounter = 0;
    highestAmountWon = 0;
    rollCountAtHighestWon = 0;
    gameMoney = 0;

    playGame();
}