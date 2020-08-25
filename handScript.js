// select cards of the hand

// flop (the next 3 cards from the end of the deck after discard a burning card)

let flop = (cut.slice(-4,cut.length-1));
flop.reverse();

for(let i = 0; i < flop.length; i++) {
    document.querySelector('#flop').innerHTML +=
        flop[i]['suit'] + ':' + flop[i]['number'].key + ', ';
}

// turn (after discard a burning card)

let turn = cut.slice(-6,cut.length-5);
for(let i = 0; i < turn.length; i++) {
    document.querySelector('#turn').innerHTML +=
        turn[i]['suit'] + ':' + turn[i]['number'].key + ', ';
}

//river (after discard a burning card)

let river = cut.slice(-8,cut.length-7);
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

//   ****TEST****

//        const mockRoyalFlush = [
//            {index: 8,  suit: '&hearts;', number: {key: '2', value: 2}},
//            {index: 65, suit: '&clubs;', number: {key: '3', value: 3}},
//            {index: 49, suit: '&clubs;', number: {key: '5', value: 5}},
//            {index: 72, suit: '&clubs;', number: {key: '4', value: 4}},
//            {index: 33, suit: '&clubs;', number: {key: 'A', value: 14}}
//        ];
//
// const pokerHand = [];
//
// for (let i = 0; i < mockRoyalFlush.length; i++){
//     pokerHand.push(mockRoyalFlush[i]['number'].value);
// }
//
// const pokerHandSuits = [];
//
// for (let i = 0; i < mockRoyalFlush.length; i++) {
//     pokerHandSuits.push(mockRoyalFlush[i]['suit']);
// }


// result of hand

const pokerHand = [];

for(let i = 0; i < hand.length; i++) {
    pokerHand.push(hand[i]['number'].value);
}

const pokerHandSuits = [];

for(let i = 0; i < hand.length; i++) {
    pokerHandSuits.push(hand[i]['suit']);
}

// sorting of the values of pokerhand

    const Sorting = function (array) {
        array.sort(function (a, b) {
            return a - b
        });
        if (pokerHand[4] === 14 &&
            pokerHand[0] === 2 &&
            pokerHand[1] === 3 &&
            pokerHand[2] === 4 &&
            pokerHand[3] === 5) {
            pokerHand[4] = 1;
            array.sort(function (a, b) {
                return a - b
            });
        }
    };

    Sorting(pokerHand);
