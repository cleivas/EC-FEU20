//GUI - Graphical user interface 

import {Chicken} from './chicken.js'; //importerar konstruktorn så att vi kan skapa instans-objekt av Chicken
import {Cow} from './cow.js';

export const variable = 1;

//skapar ett instansobkejt av Chicken
let chick = new Chicken('white');
let chick2 = new Chicken('gold');

//Ett instansobjekt av Cow
let cow = new Cow('small');
let cow2 = new Cow('huge');

//Skapar knappar
let chickenBtn = document.createElement('button');
chickenBtn.innerText = 'Chicken';
let cowBtn = document.createElement('button');
cowBtn.innerText = 'Cow';

//Lägger till dom i domen
let body = document.querySelector('body');
body.appendChild(chickenBtn);
body.appendChild(cowBtn);

//lägg till event listeners
chickenBtn.addEventListener('click',
    function(){
        console.log(chick.sound, chick.color);
        console.log(chick2.sound, chick2.color);
    }
)
cowBtn.addEventListener('click',
    function(){
        console.log(cow.sound, cow.size);
        console.log(cow2.sound, cow2.size);
    }
)
