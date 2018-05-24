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
for(let j = 0; j < turn.length; j++) {
    document.querySelector('#turn').innerHTML +=
        turn[j]['suit'] + ':' + turn[j]['number'].key + ', ';
}

//river (after discard a burning card)

let river = cut.slice(-8,45);
for(var k = 0; k < river.length; k++) {
    document.querySelector('#river').innerHTML +=
        river[k]['suit'] + ':' + river[k]['number'].key + ', ';
}

//  ****HAND****

var hand = flop.concat(turn, river);
for(var l = 0; l < hand.length; l++) {
    document.querySelector('#hand').innerHTML +=
        hand[l]['suit'] + ':' + hand[l]['number'].key + ', ';
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

for(var m = 0; m < hand.length; m++) {
    pokerHand.push(hand[m]['number'].value);
}

const pokerHandSuits = [];

for(var n = 0; n < hand.length; n++) {
    pokerHandSuits.push(hand[n]['suit']);
}

//sorting of the values of pokerhand
pokerHand.sort(function(a, b){return a - b});

//variables for each card in pokerhand
var firstCard   = pokerHand[0];
var secondCard  = pokerHand[1];
var thirdCard   = pokerHand[2];
var fourthCard  = pokerHand[3];
var lastCard    = pokerHand[4];
