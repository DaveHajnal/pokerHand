// select cards of the hand

// the flop: the next 3 cards from the end of the deck after discard a burning card

let flop = (cut.slice(-4,51));
flop.reverse();

for(let i = 0; i < flop.length; i++) {
    document.querySelector('#flop').innerHTML +=
        flop[i]['suit'] + ':' + flop[i]['number'].key + ', ';
}

// turn (after discard a burning card)

let turn = cut.slice(-6,47);
for(let i = 0; i < turn.length; i++) {
    document.querySelector('#turn').innerHTML +=
        turn[i]['suit'] + ':' + turn[i]['number'].key + ', ';
}

//river (after discard a burning card)

let river = cut.slice(-8,45);
for(let i = 0; i < river.length; i++) {
    document.querySelector('#river').innerHTML +=
        river[i]['suit'] + ':' + river[i]['number'].key + ', ';
}

//  ****HAND****

let hand = flop.concat(turn, river);
for(let i = 0; i < hand.length; i++) {
    document.querySelector('#hand').innerHTML +=
        hand[i]['suit'] + ':' + hand[i]['number'].key + ', ';
}

//Todo: megnézni, hogy ennek mi a létjogusultsága itt!!!
//   ****TEST****

       // const mockRoyalFlush = [
       //     {index: 8,  suit: '&hearts;', number: {key: '10', value: 10}},
       //     {index: 65, suit: '&clubs;', number: {key: 'J', value: 14}},
       //     {index: 49, suit: '&clubs;', number: {key: 'Q', value: 12}},
       //     {index: 72, suit: '&clubs;', number: {key: 'K', value: 11}},
       //     {index: 33, suit: '&clubs;', number: {key: 'A', value: 13}}
       // ];
       //
       // var hand = mockRoyalFlush;

// result of hand

const pokerHand = [];

for(let i = 0; i < hand.length; i++) {
    pokerHand.push(hand[i]['number'].value);
}

const pokerHandSuits = [];

for(let i = 0; i < hand.length; i++) {
    pokerHandSuits.push(hand[i]['suit']);
}

//sorting of the values of pokerhand
pokerHand.sort(function(a, b){return a - b});

//Todo: itt ezekre a vaáltozókra nincs szükség!
//variables for each card in pokerhand
var firstCard   = pokerHand[0];
var secondCard  = pokerHand[1];
var thirdCard   = pokerHand[2];
var fourthCard  = pokerHand[3];
var lastCard    = pokerHand[4];
