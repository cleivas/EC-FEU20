
//declaring an array with 4 elements
let arrayOfFruits = ['apple', 'orange', 'plum', 'grape']

console.log('The length/number of elements in the array:', arrayOfFruits.length);
console.log('The second element, at index 1:', arrayOfFruits[1]);

console.log('Looping through each element using the variable i as the index ...');
for(let i=0; i<arrayOfFruits.length;i++){
    console.log(`The element at index ${i}:`, arrayOfFruits[i]);
}

//Array of objects with the properties item, and price
const itemPrices = [
    {item: 'shoe', price: 100},
    {item: 'watch', price: 1500},
    {item: 'dog', price: 2499},
    {item: 'umbrella', price: 79},
    {item: 'fancy shoe', price: 990},
]
console.log('An array of objects:', itemPrices);
console.log('Object at the third element:', itemPrices[2]);

/*
Array methods are basically actions we can perform on an array.
Just like any function, the methods differ in what they return
and how many arguments they need. We do not have to understand
how the methods do what they do. But to understand how to use 
them we need to understand what they return and what argument 
they need.

For more examples see this video:
https://www.youtube.com/watch?v=R8rmfD9Y5-c 
More reference info:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


/* 
The filter method takes one function as the argument
and returns an array containing all elements that meets the 
condition in the function we write as the argument  
*/

//Filter out the fruits with names longer than 4 characters
const filteredFruits = arrayOfFruits.filter(
    function(fruit){
        return fruit.length >4;
    }
);
console.log('Filtered fruit array:', filteredFruits);

//filter out the items with a price higher or equal to 1000
const filteredItems = itemPrices.filter(
    function(object){
        return object.price >=1000;
    }
);
console.log('Filtered Item array:', filteredItems);

/*
The sort method performs the action on the array,
so we do not have to declare a new array to store the result.
The method is used differently depending on how we want to sort 
something and what we are sorting. 

I do not expect you to remember this by heart. 
It will become clearer the more we use it
*/

//Sorting the fruitArray by name, descending.
arrayOfFruits.sort();
console.log('Sorted fruit array:', arrayOfFruits);

//sorting the item price array by item name, descending
//In this example we need to write a function as the argument
itemPrices.sort(
    function(item1, item2){
        let text1 = item1.item;
        let text2 = item2.item;
        if(text1 > text2){
            return 1;
        }else if(text1 < text2){
            return -1;
        }else{
            return 0;
        }
    });
console.log('Sorted item array:', itemPrices)