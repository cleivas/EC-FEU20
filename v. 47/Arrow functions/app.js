let numbers = [32, 56, 343, 1, 7, 44, 111];

//as arrow function
let filteredNumbers = numbers.filter( x => x>50 );

//normal, longest function format
/* let filteredNumbers = numbers.filter(
    function(x){
        if(x>50){
            return true;
        }else{
            return false;
        }
    }
) */

console.log(filteredNumbers);


//sort-metoden med arrow function
//arrow function
numbers.sort((x, y) =>  x-y);

//normal anonumous function
/* numbers.sort(

    function(x, y){
        return x-y;
    }

); */
//console.log(numbers);


