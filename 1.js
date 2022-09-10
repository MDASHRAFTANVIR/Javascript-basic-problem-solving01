// Questin No : 1 


function inchToFeet(enterValue){

    // Condition apply here 
    if(!Number.isInteger(enterValue) == true){
        return document.write("Please Enter a number:");
    }
    const getFeet = enterValue / 12;
    return getFeet;
}

// Enter Value Here 
var getResult = inchToFeet(parseFloat(prompt("Enter your height in inches :")));
document.write("<h2> Result: Converted Height/width is " + getResult.toFixed(2) + " "+ "Feet </h2>");


// Alternative Solution 
// function iToF(EnterValue){
    
//     const GetFeet = EnterValue /12;
//     return GetFeet;
// }
// var finalResult = iToF(123);
// console.log("Your result in feet is : " + finalResult +"<br><br>");

