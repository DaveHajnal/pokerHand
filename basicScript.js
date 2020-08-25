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


//Compilation of the deck + lvl III upgrade

const compDeck = function(deckNum = 1){
    if( deckNum === 0){
        console.error('Error! Defective parameter ---> no sense for the deckNum of \'0\',  deckNum param >= 1');
    }
    console.log('Number of (the) deck(s): ---> ' + deckNum);
    for(let i = 0; i < deckNum; i++){
        for (let j = 0; j < suits.length; j++){
            for (let k = 0; k < numbers.length; k++){
                let card = {
                    suit: suits[j],
                    number: numbers[k],
                    index: Math.floor(Math.random() * 1000) + 1
                };
                deck.push(card);
            }

        }
    }
};

compDeck(3);

//Revealing the deck

let iCount = 0;

for(let i = 0; i < deck.length; i++){
    document.querySelector('#deck').innerHTML +=
        deck[i]['suit'] + ':' + deck[i]['number'].key + ', ';
        iCount += 1;
    if(iCount % 52 === 0){
        document.querySelector('#deck').innerHTML += '<br><br>';
        iCount = 0;
    } else if(iCount % 13 === 0){
        document.querySelector('#deck').innerHTML += '<br>';
    }
}

//test
console.log(iCount);