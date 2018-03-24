$(document).ready(function() {
// V A R I A B L E S
var goalTotal;
var goalTotalMin = 19;
var goalTotalMax = 120;
var playerTotal = 0;
var differenceFromGoal;
var gameStart = true;
var wins = 0;
var losses = 0;
var sushiValue1;
var sushiValue2;
var sushiValue3;
var sushiValue4;
var sushiValueMin = 1;
var sushiValueMax = 12;
var sushiPossibleValues = [];
var imageArrayWinner = [
    "assets/images/contentcat.gif",
    "assets/images/dessertcat.gif",
    "assets/images/food-coma.gif",
    "assets/images/sushi-win.gif",
    "assets/images/sushi-win2.gif"
];
var imageArrayLoser = [
    "assets/images/angrycat.gif",
    "assets/images/feedmecat.gif",
    "assets/images/sadcat.gif"
];

// F U N C T I O N S
//reset game
function reset() {
    sushiPossibleValues = [];
    randomGoalTotal();
    randomSushiValue();
    playerTotal = 0;
    $("#playerTotal").text(playerTotal);
    gameStart = true;
}

//display and remove image on win/lose
function resetImg() {
    $("#reaction-img").html("");
}
function winImage() {
    randomNum = Math.floor(Math.random()*imageArrayWinner.length);
    $("#reaction-img").html("<img src=" + imageArrayWinner[randomNum] + ">")
    setTimeout(resetImg, 3000);
}
function loseImage() {
    randomNum = Math.floor(Math.random()*imageArrayLoser.length);
    $("#reaction-img").html("<img src=" + imageArrayLoser[randomNum] + ">");
    setTimeout(resetImg, 3000);
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
    // console.log(sushiPossibleValues);

    sushiValue1 = Math.floor(Math.random() * (sushiValueMax - sushiValueMin) + sushiValueMin);
    sushiPossibleValues.splice(sushiPossibleValues[sushiPossibleValues.indexOf(sushiValue1)-1],1);
    console.log(sushiValue1);
    console.log(sushiPossibleValues);
    sushiValue2 = sushiPossibleValues[Math.floor(Math.random() * sushiPossibleValues.length)];
    sushiPossibleValues.splice(sushiPossibleValues.indexOf(sushiValue2),1);
    console.log(sushiValue2);
    console.log(sushiPossibleValues);
    sushiValue3 = sushiPossibleValues[Math.floor(Math.random() * sushiPossibleValues.length)];
    sushiPossibleValues.splice(sushiPossibleValues.indexOf(sushiValue3),1);
    console.log(sushiValue3);
    console.log(sushiPossibleValues);
    sushiValue4 = sushiPossibleValues[Math.floor(Math.random() * sushiPossibleValues.length)];
    console.log(sushiValue4);
    console.log(sushiPossibleValues);
}

function click() {
    $("#playerTotal").text("$"+playerTotal);
    differenceFromGoal = goalTotal - playerTotal;
    gameStart = false;
    if (differenceFromGoal < 0 && gameStart === false) {
        reset();
        losses++;
        loseImage();
        $("#feedback").text("Noooo.. you lose!");
        $("#scoreboard-losses").text(" " + losses);
    } else if (differenceFromGoal === 0 && gameStart === false) {
        reset();
        wins++;
        winImage();
        $("#feedback").text("You win!");
        $("#scoreboard-wins").text("  " + wins);
    }
}

// G A M E P L A Y & E V E N T S
randomGoalTotal();
randomSushiValue();
differenceFromGoal = goalTotal - playerTotal;

$("#sushi-1").on("click", function() {
    playerTotal=playerTotal+sushiValue1;
    click();
});

$("#sushi-2").on("click", function() {
    playerTotal=playerTotal+sushiValue2;
    click();
});

$("#sushi-3").on("click", function() {
    playerTotal=playerTotal+sushiValue3;
    click();
});

$("#sushi-4").on("click", function() {
    playerTotal=playerTotal+sushiValue4;
    click();
});


});
