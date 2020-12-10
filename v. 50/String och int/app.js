/* 
Typer av variabler
- text = String
- heltal = integer (int)

I JS String eller Number
*/

let text = '/ det här är en String';
console.log(typeof text, text);

let nummer = 33;
console.log(typeof nummer, nummer);


let nummerText = '33';
console.log(typeof nummerText, nummerText+10); //+10 lägger till som String

// let tillNummer = Number(nummerText); //gör om till nummer inklusive decimaltal
let tillNummer = parseInt(nummerText); //Gör om till ett heltal
console.log(typeof tillNummer, tillNummer+10); //+10 plussar på som vanlig matte

let textMedNummer = 'Det här talet, 33, vill jag göra en uträkning med';
let subString = textMedNummer.substr(15, 2);
console.log(typeof subString, subString);


console.log(typeof parseInt(subString), parseInt(subString));

//Vi hämtar 33, plussar på 10 och sätter in det till en String igen
let plussa = parseInt(subString)+10;
console.log(plussa);

let replace = textMedNummer.replace(subString, plussa);
console.log(replace);



