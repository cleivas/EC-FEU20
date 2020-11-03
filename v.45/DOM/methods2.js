let allListElements = document.querySelectorAll('li');
// console.log(allListElements);

let firstItem = document.querySelector('li')
let list = document.querySelector('ul');

//Ta bort första elementet i listan
list.removeChild(firstItem);
// let allListElements2 = document.querySelectorAll('li');
// console.log(allListElements2);


//Lägg till elementet 
list.appendChild(firstItem);


//Skapa ett nytt element
let newListItem = document.createElement('li');
list.appendChild(newListItem);
// let allListElements3 = document.querySelectorAll('li');
// console.log(allListElements3);

//lägga till samma klass som övriga li element
let bootStrapClass = firstItem.getAttribute('class');

// metoden setAttribute(typAvAttribute, värdetAvAttribute)
newListItem.setAttribute('class', bootStrapClass);
newListItem.innerText = 'Det nya elementet';

//lägg till en h2
let newHeading = document.createElement('h2');
newHeading.innerText = 'En ny heading!';
let bodyElementet = document.querySelector('body');
bodyElementet.appendChild(newHeading);