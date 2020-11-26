//2.a
console.log(Math); //Är ett objekt, vi kan se alla metoder och egenskaper
console.log(Math.random()); //Statiska metoder används 'direkt på objektet


//2.b
//är en funktion, vilket är en konstruktor
//vi ser de statiska metoderna men inte instance metoderna 
console.log(Array); 

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr); //Om man kollar under prototype hittar man alla instance-metoder som tillhör Array-objektet
console.log(typeof arr); //instans av det globala Array-objektet, är ett objekt

console.log(arr.push(10)); //vi kan använda alla instance-metoder på alla våra arrayer
console.log(Array.push(10)); //Fungerar inte eftersom push är en instance-metod, inte en statisk metod. Går alltså inte att använda på det globala Array-objektet 

let arr2 = [9, 8, 7, 6];
console.log(arr2, arr);




/* let math = {
    PI: 3.14,

    double: function(x){
        return x*2;
    }
}

function array(){
    console.log('i arrayfunktionen');
}

console.log(math);
console.log(array); */