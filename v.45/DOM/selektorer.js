// console.log(document);


//Hämta element med id-namnet
// let header = document.getElementById('main-header');
// console.log(header);

//Hämta en lista med element, med class name
/* let containerElements = document.getElementsByClassName('container');
console.log(containerElements);
console.log(containerElements[0]);
 */

//hämta en lista med element, med tagg-namnet
/* let listElements = document.getElementsByTagName('li');
console.log(listElements);
console.log(listElements[2]); */

//Hämta första elementet som passar in på CSS selektorn
// let listElement = document.querySelector('li');
// console.log(listElement);

let listElements = document.querySelectorAll('h1, h2');
console.log(listElements);