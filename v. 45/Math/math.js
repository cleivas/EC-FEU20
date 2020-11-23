/* 
Math is a JavaScript built in global object.
The object has properties and methods that we can call.
The properties are mathematical constants.
The methods perform mathematical calculations and return the result.

The syntax:
Math.nameOfProperty 
Math.nameOfMethod( argument )

We do not have to understand what the methods do or how they do it.
What's important is what they return and what argument/arguments they require.

More info: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log('PI: ', Math.PI); //PI constant
console.log('Absolute:', Math.abs(-45)); //Returns the abolute value of a number
console.log('Round:', Math.round(1.5)); //Returns the rounded integer (heltal) value of a number
console.log('Floor:', Math.floor(1.5)); //Returns the largest integer (heltal) less than or equal to the argument
console.log('Ceiling:', Math.ceil(3.109)); //Returns the smallest integer (heltal) greater than or equal to the argument
console.log('Random:',Math.random()); //Returns a pseudo-random number between 0 and 1
