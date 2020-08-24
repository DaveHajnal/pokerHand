//Base functions for main logic


//Same function
const isSame = function(array, sameVal1 = 2, sameVal2 = 1){
    if(sameVal1 === 1){
        console.error('Error! Defective parameter ---> no sense for the same value of \'1\', 5 >= sameVal1 param >= 2');
    }
    let equalValue1 = 1;
    let equalValue2 = 1;
    for(let i = 1; i < array.length; i++){
        if(array[i] === array[i-1]){
            equalValue1 += 1;
            if(i >= 3 && equalValue1 === 3 && array[i] !== array[i-2]){
                equalValue1 -=1;
                equalValue2 +=1;
            }
        }
    }
    if(sameVal2 > 1){
        return (equalValue1 === sameVal1 && equalValue2 === sameVal2);
    }
    return (equalValue1 === sameVal1);
};

//Sequence function
const isSequence = function(){
    for(let i = 1; i < pokerHand.length; i++){
        if(pokerHand[i]-1 !== pokerHand[i-1]){
            return false;
        }
    }
    return true;
};
