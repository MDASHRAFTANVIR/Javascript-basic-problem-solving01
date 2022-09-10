

function givenNumber(enterValue){
    sum = 0;
    for(i=0; i<= enterValue; i++){
        sum = sum + enterValue;
    }return sum;
}
let enterUserValue = givenNumber(parseFloat(prompt("Please Enter a Number to Get the sum to 1 to N number: ")));


document.write("<h2> Sum of 1 to ", i-1 ," is : ",  enterUserValue , "</h2>");