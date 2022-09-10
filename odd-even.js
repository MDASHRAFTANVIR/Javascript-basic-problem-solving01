
function odd_even(enterValue){
    if(!Number.isInteger(enterValue)== true){
        return document.write("Please Enter a Integer Number:");
    }
    
    if(enterValue % 2 == 0){
        document.write("<h2> Yeah ! You Enter a Even Number. </h2>");
    }else {
        document.write("<h2> Yeah ! You Enter a Odd Number. </h2>");
    }
}
var getResult = odd_even(parseInt(prompt("Please Enter a Integer Number: ")));