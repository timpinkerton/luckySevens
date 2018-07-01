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
var initialBalance = 0; 

// playGame function is called when the submit(playButton) is clicked
function playGame() {

    

    // parseInt will convert the input into a number (instead of a string)
    var startingBet = parseInt(element.startingBet.value);

    if (rollCounter === 0) {
        gameMoney = startingBet;
        initialBalance = startingBet;
    }

    if (gameMoney > 0) {

        shakeDie();

        console.log("-----------------")
        console.log("Current Game Money: " + gameMoney);
        console.log("Game Money is of type " + typeof gameMoney);

        rollCounter += 1;

        console.log("Roll number " + rollCounter);

        var die1 = roll();
        var die2 = roll();

        document.getElementById("dieOne").src = dieImage(die1);
        document.getElementById("dieTwo").src = dieImage(die2);

        var diceOutcome = die1 + die2;

        document.getElementById("diceDisplay").style.display = "block"; 

        console.log("die1 is: " + die1);
        console.log("die2 is: " + die2);
        console.log("You rolled a: " + diceOutcome);

        if (diceOutcome === 7) {
            gameMoney += 4;
            document.getElementById("winOrLose").innerText = "You win $4 !!!";
            console.log("You Win 4!");

            if (gameMoney > highestAmountWon) {
                highestAmountWon = gameMoney;
                rollCountAtHighestWon = rollCounter;
            }
        } else {
            gameMoney -= 1;
            document.getElementById("winOrLose").innerText = "You lose $1";
            console.log("You Lose 1!");
        }
        console.log("New Game Money: " + gameMoney);
        console.log("Here game Money is of type " + typeof gameMoney);
        console.log("Highest amount won is currently: " + highestAmountWon);
        console.log("-----------------")

        document.forms["luckySevens"]["startingBet"].value = gameMoney;

        gameStats();

        if (gameMoney === 0) {
            showResults();
            console.log("Sorry you're out of money.");
        }

        function gameStats() {
            document.getElementById("gameStats").style.display = "block";
        }

        function showResults() {
            document.getElementById("resultsStartingBet").innerText = initialBalance;
            document.getElementById("totalRollsTilBroke").innerText = rollCounter;
            document.getElementById("highestAmountWon").innerText = highestAmountWon;
            document.getElementById("rollCountAtHighestWon").innerText = rollCountAtHighestWon;

            document.getElementById("playButton").style.display = "none";
            document.getElementById("resetButton").style.display = "block";
            document.getElementById("results").style.display = "block";
            document.getElementById("gameStats").style.display = "none";
            document.getElementById("rules").style.display = "none"; 

            return false;
        }
    }
    return false;
}

// roll function will return the random number in the variable die
function roll() {
    var die = Math.ceil(Math.random() * (1 + 6 - 1));
    return die;
}

function dieImage(die) {
    var dieImage = "";

    if (die === 1) {
        dieImage = "images/die1.png";
    } else if (die === 2) {
        dieImage = "images/die2.png";
    } else if (die === 3) {
        dieImage = "images/die3.png";
    } else if (die === 4) {
        dieImage = "images/die4.png";
    } else if (die === 5) {
        dieImage = "images/die5.png";
    } else {
        dieImage = "images/die6.png";
    }
    return dieImage;
}

// resetForm() function will update the button and reset all the counters
function resetForm() {
    document.getElementById("playButton").style.display = "block";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("diceDisplay").style.display = "none";
    document.getElementById("rules").style.display = "block"; 

    rollCounter = 0;
    highestAmountWon = 0;
    rollCountAtHighestWon = 0;
    gameMoney = 0;

    // location.reload();

    playGame();
}

function shakeDie() {
    console.log("shakeDie has been called");

    $( "#diceDisplay" ).effect( "shake", {times: 1, distance: 40, direction: "left"}, 50);
    $( "#diceDisplay" ).effect( "shake", {times: 1, distance: 40, direction: "up"}, 50);
    $( "#diceDisplay" ).effect( "shake", {times: 1, distance: 40, direction: "right"}, 50);
    $( "#diceDisplay" ).effect( "shake", {times: 1, distance: 40, direction: "down"}, 50);
}