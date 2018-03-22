$(document).ready(function() {
// V A R I A B L E S
var goalTotal;
var goalTotalMin = 19;
var goalTotalMax = 120;
var playerTotal = 0;
var differenceFromGoal;// = goalTotal - playerTotal;
var wins = 0;
var losses = 0;
var sushi1Value;
var sushi2Value;
var sushi3Value;
var sushi4Value;
var sushiValueMin = 1;
var sushiValueMax = 12;
var sushiPossibleValues = [];

// F U N C T I O N S
//reset game
function reset() {
    sushiPossibleValues = [];
    randomGoalTotal();
    randomSushiValue();
    playerTotal=0;
}

//generate and assign random number for the target
function randomGoalTotal() {
    goalTotal = Math.floor(Math.random() * (goalTotalMax - goalTotalMin) + goalTotalMin);
    $("#goalTotal").text("$"+goalTotal);
}

//generate and assign random number to each sushi. *added condition: do not repeat values.
function randomSushiValue() {
    for (var i=0; i < sushiValueMax; i++) {
        sushiPossibleValues[i] = sushiPossibleValues.push(i);
    }
    sushi1Value = Math.floor(Math.random() * (sushiValueMax - sushiValueMin) + sushiValueMin);
    sushiPossibleValues.splice(sushiPossibleValues[sushiPossibleValues.indexOf(sushi1Value)-1],1);
    // console.log(sushi1Value);
    // console.log(sushiPossibleValues);
    sushi2Value = sushiPossibleValues[Math.floor(Math.random() * sushiPossibleValues.length)];
    sushiPossibleValues.splice(sushiPossibleValues.indexOf(sushi2Value),1);
    // console.log(sushi2Value);
    // console.log(sushiPossibleValues);
    sushi3Value = sushiPossibleValues[Math.floor(Math.random() * sushiPossibleValues.length)];
    sushiPossibleValues.splice(sushiPossibleValues.indexOf(sushi3Value),1);
    // console.log(sushi3Value);
    // console.log(sushiPossibleValues);
    sushi4Value = sushiPossibleValues[Math.floor(Math.random() * sushiPossibleValues.length)];
    // console.log(sushi4Value);
    // console.log(sushiPossibleValues);
}


// G A M E P L A Y & E V E N T S
// playerTotal = 0;
randomGoalTotal();
randomSushiValue();
differenceFromGoal = goalTotal - playerTotal;

// console.log(goalTotal);
// console.log(playerTotal);
// console.log(differenceFromGoal);
//if player total exceeds target, restart game
if (differenceFromGoal < 0) {
    reset();
    losses++;
    $("#scoreboard-losses").text(losses);
    alert("You exceeded your budget! Go wash the dishes.. you LOSE");
} else if (differenceFromGoal === 0) {
//if player total = target, then restart game and add one to win count
    reset();
    wins++;
    $("#scoreboard-wins").text(wins);
    alert("Mission accomplished!");
} else if (differenceFromGoal > 0) {
//if under target, game proceeds
    //on click: keep running total of value of clicked items
    $("#sushi-1").on("click", function() {
        playerTotal=playerTotal+sushi1Value;
        $("#playerTotal").text("$"+playerTotal);
        differenceFromGoal = goalTotal - playerTotal;
        console.log(differenceFromGoal);
        // console.log(goalTotal);
        // console.log(playerTotal);
    });
    $("#sushi-2").on("click", function() {
        playerTotal=playerTotal+sushi2Value;
        $("#playerTotal").text("$"+playerTotal);
        differenceFromGoal = goalTotal - playerTotal;
        console.log(differenceFromGoal);
    });
    $("#sushi-3").on("click", function() {
        playerTotal=playerTotal+sushi3Value;
        $("#playerTotal").text("$"+playerTotal);
        differenceFromGoal = goalTotal - playerTotal;
        console.log(differenceFromGoal);
    });
    $("#sushi-4").on("click", function() {
        playerTotal=playerTotal+sushi4Value;
        $("#playerTotal").text("$"+playerTotal);
        differenceFromGoal = goalTotal - playerTotal;
        console.log(differenceFromGoal);
    });


}



});

//PROBLEM IS THAT DIFFERENCEFROMGOAL IS SET TO GOALTOTAL