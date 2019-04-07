

var randomNumberValue,
    bananaValue = null,
    grapeValue = null,
    mangoValue = null,
    strawberryValue = null,
    myWins = 0,
    myLosses = 0;

var totalScore = document.getElementById("totalScore");
var randomNumber = document.getElementById("randomNumber");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

// var totalScore = $("#totalScore");
// var randomNumber = $("#randomNumber");
// var wins = $("#wins");
// var losses = $("#losses");

//get integer function

function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//reset function

function reset() {
    totalScore.innerText = 0;
    randomNumber.innerHTML = getRandomInteger(19, 121);
    randomNumberValue = parseInt(randomNumber.innerHTML);
    bananaValue = getRandomInteger(1, 13);
    console.log(bananaValue);
    grapeValue = getRandomInteger(1, 13);
    console.log(grapeValue);
    mangoValue = getRandomInteger(1, 13);
    console.log(mangoValue);
    strawberryValue = getRandomInteger(1, 13);
    console.log(strawberryValue);

    if (bananaValue == grapeValue || bananaValue == mangoValue || bananaValue == strawberryValue || grapeValue == mangoValue || grapeValue == strawberryValue || mangoValue == strawberryValue) {
        reset();
    }
}

function IncScore(fruit) {

    var totalValue = parseInt(totalScore.innerText)
    console.log(totalValue);
    console.log(randomNumberValue);

    if (fruit == 'yellow') {
        totalValue += bananaValue;
    }
    else if (fruit == 'green') {
        totalValue += grapeValue;
    }
    else if (fruit == 'orange') {
        totalValue += mangoValue;
    }
    else if (fruit == 'red') {
        totalValue += strawberryValue;
    }
    if (totalValue == randomNumberValue) {
        mywins++;
        wins.innerText == mywins;
    }
    else if (totalValue > randomNumberValue) {
        myLosses++;
        losses.innerText == myLosses;
    }
    else {
        totalScore == totalValue
    }

}

reset();
