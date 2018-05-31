//Basic script


//Empty deck
let deck = [];

//Suits
let suits = [
                '<span class="black spade"></span>',
                '<span class="red heart"></span>',
                '<span class="red diamond"></span>',
                '<span class="black club"></span>'
            ];

//Values of the cards
let numbers = [
                {key: "2", value: 2},
                {key: "3", value: 3},
                {key: "4", value: 4},
                {key: "5", value: 5},
                {key: "6", value: 6},
                {key: "7", value: 7},
                {key: "8", value: 8},
                {key: "9", value: 9},
                {key: "X", value: 10},
                {key: "J", value: 11},
                {key: "Q", value: 12},
                {key: "K", value: 13},
                {key: "A", value: 14}
              ];

//Compilation of the deck
for (let i = 0; i < suits.length; i++){
    for (let j = 0; j < numbers.length; j++){
        let card = {
            suit: suits[i],
            number: numbers[j],
            index: Math.floor(Math.random() * 1000) + 1
        };
        deck.push(card);
    }
}

//Revealing the deck
for(let i = 0; i < deck.length; i++){
    document.querySelector('#deck').innerHTML +=
        deck[i]['suit'] + ':' + deck[i]['number'].key + ', ';
    if( i === 12 ||
        i === 25 ||
        i === 38 ) {
        document.querySelector('#deck').innerHTML += '<br>';
    }
}