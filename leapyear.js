
// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

function checkLeapYear(enterYear){
    if(!Number.isInteger(enterYear)==true ){
        return document.write("Wrong Input! Please Enter a valid Year.");
    }
    if(enterYear % 4 == 0 && enterYear % 100 !== 0 || enterYear % 400 == 0){
        document.write("<h2>" + enterYear + " " + "is a Leap Year </h2>");
    }else {
        document.write("<h2>" + enterYear + " " + "is not a Leap Year </h2>");
    }
}
var findResult = checkLeapYear(parseInt(prompt("Enter a Year: ")));
