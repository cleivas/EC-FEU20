
let jsonText = '{ "nameJohn", "age":30, "city":"New York"}';

/* let sammaFastObjekt = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(jsonText);
console.log(sammaFastObjekt);
console.log(JSON.parse(jsonText)); */

let jsonParsed; 

try{
    jsonParsed = JSON.parse(jsonText);
    console.log(jsonParsed);
}
catch{
    console.log('Texten är inte skriven i json')
}


/* let number = divide(3);

try{
    //vi väljer själva att definiera specifika situationer som error
    if(number === Infinity){
        throw 'Går ej att dela med noll'; //errormeddelande
    }else if(isNaN(number)){
        throw 'Det här är inget nummer'; //errormeddelande
    }else{
        console.log(number);
    }
}
catch(error) { //error fångas och hanteras
    console.log(error);
}

console.log('något som måste hända efter');

function divide(x, y){
    return x/y;
} */