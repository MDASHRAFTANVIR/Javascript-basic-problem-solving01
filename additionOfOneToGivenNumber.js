

function givenNumber(enterValue){
    sum = 0;
    for(i=0; i<= enterValue; i++){
        sum = sum + enterValue;
    }return sum;
}
let enterUserValue = givenNumber(parseFloat(prompt("Please Enter a Number to Get the Addition of 1 to Your Input Number:")));

document.write("<h2> Total sum from 1 to your given value is: "  + enterUserValue + "</h2>");