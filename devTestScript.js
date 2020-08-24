//dev console test

console.log(deck); //revealing the deck
console.log(hand); //revealing the hand
console.log('Hand suits' + pokerHandSuits);
console.log('Hand values ---> ' + pokerHand); //revealing the hand after sorting

//evaluation of the hand
console.log('Straight?       ---> ' + isSequence());
console.log('Same symbol?    ---> ' + isSame(pokerHandSuits,5));

console.log('Royal flush?    ---> ' + isRoyalFlush());
console.log('Straight flush? ---> ' + isStraightFlush());
console.log('Poker?          ---> ' + isPoker());
console.log('Full?           ---> ' + isFull());
console.log('Flush?          ---> ' + isFlush());
console.log('Straight?       ---> ' + isStraight());
console.log('Drill?          ---> ' + isDrill());
console.log('2 Pair?         ---> ' + twoPairs());
console.log('1 Pair?         ---> ' + pair());
console.log('High card?      ---> ' + !isRoyalFlush()    &&
                                      !isStraightFlush() &&
                                      !isPoker()         &&
                                      !isFull()          &&
                                      !isFlush()         &&
                                      !isStraight()      &&
                                      !isDrill()         &&
                                      !twoPairs()        &&
                                      !pair());