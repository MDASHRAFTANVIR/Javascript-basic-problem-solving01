
// Write Function 

function findFactorial(enterNumber){
    let factor = 1;
    for(i=1; i <= enterNumber; i++){
        factor = factor * i;
    }return factor;
}
let getResult = findFactorial(parseFloat(prompt("Enter a Integer Number: ")));
document.write("<h2> Factorial of ", i-1, "is : ", getResult, "</h2>");
// let gett = findFactorial(20);
// console.log(gett);