//dev console test

console.log(deck); //revealing the deck
console.log(hand); //revealing the hand
console.log(pokerHand);
console.log(pokerHandSuits);
console.log(pokerHand); //revealing the hand after sorting

//evaluation of the hand
//Todo: a fenti paraméter javítások szerint a tesztet is javítani.
console.log('Straight?      ---> ' + isStraight(pokerHand));
console.log('Same symbol?   ---> ' + isSame(pokerHandSuits));

console.log('Royalflush?    ---> ' + isRoyalFlush(lastCard));
console.log('Straightflush? ---> ' + isStraightFlush(lastCard));
console.log('Poker?         ---> ' + isPoker(firstCard, fourthCard));
console.log('Straight?      ---> ' + str());
console.log('Flush?         ---> ' + isFlush());
console.log('Drill?         ---> ' + isDrill());
console.log('Full?          ---> ' + isFull());
console.log('2 Pair?        ---> ' + twoPairs());
console.log('1 Pair?        ---> ' + pair());