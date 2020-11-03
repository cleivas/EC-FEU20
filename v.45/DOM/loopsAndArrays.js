//skapa 10 st li element och lägga till dom till ul elementet
let listan = document.querySelector('ul');

for(let i=0; i<10; i++){
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'list-group-item');
    listan.appendChild(listItem);
}

//Lägg till text till list elementen
const filmer = ['Matrix', 'Inception', 'Harry Potter', 'Avatar', 
'Dumma mig', 'Gone with the wind', 'Babe', 'Shrek', 'Shrek 2', 
'Shrek 3'];

let liElements = document.querySelectorAll('li');

/* for(let i=0; i<filmer.length; i++){
    liElements[i].innerText = filmer[i];
} */


//Ändra bakgrundsfärg på alla item element
//Gradual rainbow
let hue = 0;
let hueStep = 360/liElements.length;

for(let i=0; i<liElements.length; i++){
    hue+=hueStep;
    liElements[i].style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
}