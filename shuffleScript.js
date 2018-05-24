//shuffle script

// shuffle the cards based on the predetermined index
deck.sort(function (card1, card2){
    return card1.index > card2.index ? 1 : -1;
});

//showing the shuffled deck
for(let i = 0; i < deck.length; i++) {
    document.querySelector('#shuffled').innerHTML +=
        deck[i]['suit'] + ':' + deck[i]['number'].key + ', ';
    if( i === 12 ||
        i === 38 ) {
        document.querySelector('#shuffled').innerHTML += '<br>';
    } else if(i === 25) {
        document.querySelector('#shuffled').innerHTML += '<br><br>';
    }
}

// cutting the shuffled deck
let temp = deck.splice(26, 26);
let cut = temp.concat(deck);

//showing the shuffled and cut deck
for(let i = 0; i < cut.length; i++) {
    document.querySelector('#cut').innerHTML +=
        cut[i]['suit'] + ':' + cut[i]['number'].key + ', ';
    if(i === 12 || i === 38 ) {
        document.querySelector('#cut').innerHTML += '<br>';
    } else if(i === 25) {
        document.querySelector('#cut').innerHTML += '<br><br>';
    }
}

