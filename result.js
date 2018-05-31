//Result script

if(isRoyalFlush()){
    document.querySelector('#hand').innerHTML += '<br>Royal Flush!';
}else if(isStraightFlush()){
    document.querySelector('#hand').innerHTML += '<br>Straight Flush!';
}else if(isPoker()){
    document.querySelector('#hand').innerHTML += '<br>Poker!';
}else if(isFull()){
    document.querySelector('#hand').innerHTML += '<br>Full House!';
}else if(isFlush()){
    document.querySelector('#hand').innerHTML += '<br>Flush!';
}else if(isStraight()) {
    document.querySelector('#hand').innerHTML += '<br>Straight!';
}else if(isDrill()){
    document.querySelector('#hand').innerHTML += '<br>Drill!';
}else if(twoPairs()){
    document.querySelector('#hand').innerHTML += '<br>Two Pairs!';
}else if(pair()){
    document.querySelector('#hand').innerHTML += '<br>Pair!';
}else {
    document.querySelector('#hand').innerHTML += '<br>High Card!';
}
