//3
//skapa en instance-metod som vi sedan kan använda på alla våra arrays
Array.prototype.logHello = function(){ 
    console.log('Hello!');
}

console.log(Array); //Vi kan hitta logHello under prototype

let arr = [];
let arr2 =[1, 2, 3];
arr.logHello(); //skriver 'Hello' i loggen
arr2.logHello();
console.log(arr); //Vi kan hitta logHello under prototype

//En instance-metod som använder en instance-egenskap, alltså length
Array.prototype.logLength = function(){
    console.log('The length of this array is:', this.length); //this hänvisar till instansobjektet, alltså array som används oavsett vilken den är. Man kan säga att det är en placeholder för arrayn.
}

arr.logLength();//när metoden anropas ersätts 'this' med 'arr'
arr2.logLength();//'this' ersätts med 'arr2'

//En instance-egenskap
Array.prototype.namn = 'Clara';
console.log(arr.namn);

//String-objektet
console.log(String);
let str = 'Det här är en string';
let str2 ='Det här är en helt annan string med en annan längd';

String.prototype.logStringLength = function(){
    console.log('Längden på stringen är:', this.length);
}

str.logStringLength();
str2.logStringLength();