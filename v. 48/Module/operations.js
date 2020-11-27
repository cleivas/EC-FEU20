//en funktion som returnerar summan av två argument
//Och som vi exporterar

//Man kan exportera funktionen där man definierar den
/* export function sum(x, y){
    return x+y;
} */



function sum(x, y){
    return x+y;
}

function sub(x, y){
    return x-y;
}

function divide(x, y){
    return x/y;
}

function mult(x, y){
    return x*y;
}

export {sum, sub, divide, mult};