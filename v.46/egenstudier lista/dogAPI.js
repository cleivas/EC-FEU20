/* 
Dog API - uppgift 1
Hämta en random hundbild id knapptryckning
Vi behöver ...
1 knapp
En URL 
Hur göra förfrågan om random
Sätta eventlistener på knappen
i eventlisternern göra anrop med URLen
ett Img element
hitta bild-urlen i datan vi får tillbaka från anropet
sätta src atributet i bild elementet

Uppgift 2, vi behöver...
Ett textfält för input
    formulär med textinput och submit knapp
Eventlistener för formuläret
Vi behöver veta hur URLen behöver se ut
Vi behöver kunna byta ut del av url:en till det vi får från textinputen
Vi måste kunna spara den texten vi får från textinputen
Fånga upp om något blir fel
*/

let body = document.querySelector('body');
let form = document.querySelector('form');

let img = document.createElement('img');
body.appendChild(img);

form.addEventListener('submit',
    function(event){
        event.preventDefault();

        let textInput = document.querySelector('#hundras');
        const hundras = textInput.value;
        
        //Random dog url: https://dog.ceo/api/breeds/image/random
        const urlRas = `https://dog.ceo/api/breed/${hundras}/images/random`;

        fetch(urlRas).then(
            function(response){
                //.json() -> gör om JSON-data till JS object
                return response.json();
            }
        ).then(
            function(data){
                console.dir(data.message);
                //img.setAttribute('src', data.message);
                img.src = data.message;
            }
        ).catch(

        )
    }
);
