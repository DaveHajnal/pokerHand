//dev console test

console.log(deck); //revealing the deck
console.log(hand); //revealing the hand
console.log(pokerHandSuits);
console.log(pokerHand); //revealing the hand after sorting

//evaluation of the hand
//Todo: a fenti paraméter javítások szerint a tesztet is javítani.
console.log('Straight?      ---> ' + isSequence());
console.log('Same symbol?   ---> ' + isSame(pokerHandSuits,5));

console.log('Royalflush?    ---> ' + isRoyalFlush());
console.log('Straightflush? ---> ' + isStraightFlush());
console.log('Poker?         ---> ' + isPoker());
console.log('Full?          ---> ' + isFull());
console.log('Flush?         ---> ' + isFlush());
console.log('Straight?      ---> ' + isStraight());
console.log('Drill?         ---> ' + isDrill());
console.log('2 Pair?        ---> ' + twoPairs());
console.log('1 Pair?        ---> ' + pair());