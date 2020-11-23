/* 
url för random beer
hämta beskrivning och food pairing

food paring är en array som vi inte vet hur lång den här
vi måste veta längden på arrayn
lika många li element ska vi skapa
vi gör det i en for-loop som loopas lika många gånger som arrayn är lång

*/

let body = document.querySelector('body');
const url = 'https://api.punkapi.com/v2/beers/random';


fetch(url).then(

    function(response){
        //.json() -> gör om JSON-data till JS object
        return response.json();
    }
).then(
    function(data){
        console.log(data[0]);

        let description = data[0].description; //string
        let foodPairing = data[0].food_pairing; //array

        let p = document.querySelector('p');
        p.innerText = description;

        let ul = document.querySelector('ul');
        console.log(foodPairing.length);

        for(let i=0; i<foodPairing.length; i++){
            let li = document.createElement('li');
            li.innerText = foodPairing[i];
            ul.appendChild(li);
        }
    }

).catch(
    function(){
        console.log('Något gick fel');
    }
);
