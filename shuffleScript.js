//Shuffle script

//Shuffle the cards based on the predetermined index
deck.sort(function (card1, card2){
    return card1.index > card2.index ? 1 : -1;
});

//Showing the shuffled deck
iCount = 0;

for(let i = 0; i < deck.length; i++){
    document.querySelector('#shuffled').innerHTML +=
        deck[i]['suit'] + ':' + deck[i]['number'].key + ', ';
        iCount += 1;
        if(iCount % 52 === 0){
        document.querySelector('#shuffled').innerHTML += '<br><br>';
    }else if(iCount % 13 === 0 ){
        document.querySelector('#shuffled').innerHTML += '<br>';
    }
}

//Cutting the shuffled deck
let temp = deck.splice(deck.length/2);
let cut = temp.concat(deck);

//Showing the shuffled and cut deck
iCount = 0;
for(let i = 0; i < cut.length; i++){
    document.querySelector('#cut').innerHTML +=
        cut[i]['suit'] + ':' + cut[i]['number'].key + ', ';
        iCount += 1;
    if(iCount === (cut.length/2)){
        document.querySelector('#cut').innerHTML += '<br><br>';
    }else if( i % 13 === 0){
        document.querySelector('#cut').innerHTML += '<br>';
    }
}

