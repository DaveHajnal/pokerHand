//Functions for the examination of hand


//Royal flush function
let isRoyalFlush = function(){
    return lastCard === 14 &&
            isSequence() &&
            isSame(pokerHandSuits, 5);
};

//Straight flush function
let isStraightFlush = function(){
    return lastCard !== 14 &&
            isSequence() &&
            isSame(pokerHandSuits, 5);
};

//Poker function
let isPoker = function(){
  return isSame(pokerHand, 4);
};

//Full function
let isFull = function(){
    return isSame(pokerHand, 3, 2) ||
        isSame(pokerHand, 2, 3);
};

//Flush function
let isFlush = function(){
    return isSame(pokerHandSuits, 5) &&
        !isSequence()
};

//Straight function
let isStraight = function(){
    return isSequence() &&
        !isSame(pokerHandSuits, 5)
};

//Drill function
let isDrill = function(){
    return isSame(pokerHand, 3) &&
        !isFull();
};

//Two pair function
let twoPairs = function(){
    return isSame(pokerHand, 2, 2);
};

//Pair function
let pair = function(){
    return isSame(pokerHand) &&
        !twoPairs() &&
        !isFull();
};