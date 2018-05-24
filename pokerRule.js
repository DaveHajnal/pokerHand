// functions for the examination of hand


//straight function
let isStraight = function(){
    for(let i = 0; i < pokerHand.length-1; i++){
        if(pokerHand[i+1] != pokerHand[i-1]){
            return false;
        }
        return true;
    }
};

//same function
let isSame = function(array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] === array[i + 1]) {
            counter++;
        }
    }
    return  counter === 5;
};

//Royalflush function
var isRoyalFlush = function(lastCard) {
    return ((lastCard === 14) &&
            (isStraight(firstCard, secondCard, thirdCard, fourthCard, lastCard)) &&
            (isSame(pokerHandSuits[0], pokerHandSuits[1], pokerHandSuits[2], pokerHandSuits[3], pokerHandSuits[4])));
}

//Straightflush function
var isStraightFlush = function() {
    if( (lastCard !== 14) &&
        (isStraight(firstCard, secondCard, thirdCard, fourthCard, lastCard)) &&
        (isSame(pokerHandSuits[0], pokerHandSuits[1], pokerHandSuits[2], pokerHandSuits[3], pokerHandSuits[4]))) {
        return true;
    }else {
        return false;
    }
}

//is Poker function
//Todo:hiba javítsd ki a paramétereket hibás hiányzik...
var isPoker = function(firstCard, fourthCard) {
    if (((firstCard === fourthCard) || (secondCard === lastCard))) {
        return true;
    } else {
        return false;
    }
}

//is Straight function
//Todo: lugikusabb, illeszkedőbb elnevezést adni
var str = function() {
    if ((isStraight(firstCard, secondCard, thirdCard, fourthCard, lastCard)) &&
        (!isSame(pokerHandSuits[0], pokerHandSuits[1], pokerHandSuits[2], pokerHandSuits[3], pokerHandSuits[4]))) {
        return true;
    } else {
        return false;
    }
}

//is Flush function
var isFlush =function(){
    if((isSame(pokerHandSuits[0], pokerHandSuits[1], pokerHandSuits[2], pokerHandSuits[3], pokerHandSuits[4])) &&
        (!isStraight(firstCard, secondCard, thirdCard, fourthCard, lastCard))) {
        return true;
    }else {
        return false;
    }
}

//is Drill function
//Todo: ezt kiszervezni egy köszös számláló funkcióba, ami az alapján adja vissza a találatokat háűny egyforma tételt talál
var isDrill = function() {
    var count = 0;
    for (var i = 0; i < pokerHand.length - 1; i++) {
        if (pokerHand[i] === pokerHand[i + 2]) {
            count++
        }
    }
    return count === 1;
}

//is Full function
var isFull = function() {
    if (((firstCard === secondCard) && (thirdCard === lastCard)) ||
        ((firstCard === thirdCard) && (fourthCard === lastCard))) {
        return true;
    } else {
        return false;
    }
}

//is two pair function
//Todo: ezt kiszervezni egy köszös számláló funkcióba, ami az alapján adja vissza a találatokat háűny egyforma tételt talál
var twoPairs = function() {
    var count = 0;
    for(var i = 0; i < pokerHand.length-1; i++) {
        if((pokerHand[i] === pokerHand[i+1]) &&
            (pokerHand[i] !== pokerHand[i+2])){
            count++
        }
    }
    return count === 2;
}

//is pair function
//Todo: ezt kiszervezni egy köszös számláló funkcióba, ami az alapján adja vissza a találatokat háűny egyforma tételt talál
var pair = function(){
    var count = 0;
    for(var i = 0; i < pokerHand.length-1; i++){
        if(pokerHand[i] === pokerHand[i+1]){
            count++;
        }
    }
    return count === 1;
}