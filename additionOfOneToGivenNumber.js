

function givenNumber(enterValue){
    sum = 0;
    for(i=0; i<enterValue.length; i++){
        sum = sum + i;
    }return sum;
}
let enterUserValue = givenNumber(90);
console.log(enterUserValue);