/* 
There are five different functions defined below. 
A function is a block of code that we can call from anywhere in our code
Call the functions one at a time to see what they do. (Uncomment below)
Modify the functions where they are defined, in any way you want and call them again.
*/

/***Calling Functions***/
simpleFunction();

/* 
let message = 'I tried really hard to come up with a fun message but I failed'
logMessage(message);
 */

 /* 
 let square = getSquare(9);
 console.log(square);
 */

 /* 
 let sum = getSum(76, 2, 999);
 console.log(sum);
 */

/* 
callAllOtherFunctions();
 */

/***Defining functions***/
//Defining a function named simpleFunction
function simpleFunction(){
    console.log('This functions only function is to log this text');
}

//defining a function named logMessage, with one argument named messageToLog  
function logMessage(messageToLog){
    console.log(messageToLog);
}

//defining a function with one argument
//The function returns the square of the argument
function getSquare(number){
    return number * number;
}

//defining a function with three arguments
//The function returns the sum of the arguments
function getSum(x, y, z){
    return x+y+z;
}

//Defining a function that calls all the other functions
function callAllOtherFunctions(){
    simpleFunction();
    logMessage('logMessage was called from callAllOtherFunctions, with this message as the argument');
   
    let squareResult = getSquare(3);
    console.log('The square result from calling the function getSquare is: ', squareResult);

    let sum = getSum(255, 21864, 3);
    console.log('The returned value from calling the function getSum is:', sum);
}