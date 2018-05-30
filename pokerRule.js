// functions for the examination of hand


//same function
let isSame = function(array, sameVal1 = 2, sameVal2 = 1){
    if(sameVal1 === 1){
        console.error('Error! Defective parameter ---> no sense for the same value of \'1\', sameVal1 param >= 2');
    }
    let equalValue1 = 1;
    let equalValue2 = 1;
    for(let i = 1; i < array.length; i++){
        if(array[i] === array[i-1]){
            equalValue1 += 1;
            //Todo: átfogalmazni a condition-t mert törik pokernél a kikommentelt rész
            if((i >= 3 && equalValue1 >= 3 && array[i] !== array[i-2]) /*||
                (i >= 3 && equalValue1 >= 3 && array[i] !== array[i-3])*/){
                equalValue1 -=1;
                equalValue2 +=1;
            }
        }
    }
    console.log(equalValue1);
    console.log(equalValue2);
    //Todo: ezt itt kigyomlálni! Logikailag átrendezni
    if(sameVal2 > 1){
        return (equalValue1 === sameVal1 && equalValue2 === sameVal2);
    }
    return (equalValue1 === sameVal1);
};

//straight function
let isSequence = function(){
    for(let i = 1; i < pokerHand.length; i++){
        if(pokerHand[i]-1 !== pokerHand[i-1]){
            return false;
        }
    }
    return true;
};

//Royalflush function
let isRoyalFlush = function() {
    return ((lastCard === 14) &&
            (isSequence()) &&
            (isSame(pokerHandSuits, 5)));
};

//Straightflush function
let isStraightFlush = function() {
    return ((lastCard !== 14) &&
            (isSequence()) &&
            (isSame(pokerHandSuits, 5)));

};

//is Poker function
let isPoker = function() {
  return isSame(pokerHand, 4);
};

//is Straight function
let isStraight = function() {
    return isSequence() &&
        !isSame(pokerHandSuits, 5)
};

//is Flush function
let isFlush = function(){
    return isSame(pokerHandSuits, 5) &&
        !isSequence()
};

//is Drill function
let isDrill = function(){
    return isSame(pokerHand, 3) &&
        !isFull();
};

//is Full function
let isFull = function(){
    return isSame(pokerHand, 3, 2) ||
        isSame(pokerHand, 2, 3);
};

//is two pair function
let twoPairs = function(){
    return isSame(pokerHand, 2, 2);
};

//is pair function
let pair = function(){
    return isSame(pokerHand) &&
        !twoPairs() &&
        !isFull();
};