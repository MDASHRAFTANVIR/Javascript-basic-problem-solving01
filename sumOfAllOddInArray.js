
// Find Sum of An Array 

function findSumOfArray(enterElements){
    let sum = 0;
    for(let i=0; i < enterElements.length; i++){
        let getIndex = enterElements[i];
        sum = sum + getIndex;
    }return sum;
}

// Make an array with Odd Number 

function getOddArray(enterNumbers){
    let arrayGather = [];
    for(let i=0; i < enterNumbers.length; i++){
        let valueGather = enterNumbers[i];
        if(valueGather % 2 == 1){
            arrayGather.push(valueGather);
        }
    }return arrayGather;
}

// Declare The Array 
let elementsAll = [91, 94, 98, 99, 103, 108, 129, 167, 180, 190, 199, 205, 207, 226, 251, 341, 349, 380, 398, 401, 419, 430, 440, 451, 560, 593];

let arrayGather = getOddArray(elementsAll);
let findSumOfOddArray = findSumOfArray(arrayGather);
let sumOfAllArray = findSumOfArray(elementsAll);

// Final Output 
console.log("Here is the array of All odd Number:" + arrayGather);
console.log("Here is the sum of all odd Number: " + findSumOfOddArray);
console.log(" Here is the sum of all number of given Array: " + sumOfAllArray);





