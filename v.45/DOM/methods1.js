//ändra text i rubriken h1
let rubrik = document.querySelector('#header-title');
// rubrik.innerText = 'Filmer';

console.log(rubrik);
console.log(rubrik.innerText);
console.log(rubrik.innerHTML);
console.log(rubrik.textContent);

//ändra text i första elementet i listan
let firstItem = document.querySelector('.list-group-item');
firstItem.innerText = 'Matrix';
// console.log(firstItem);


//Ändra bakgrundsfärg på andra elementet i listan
let listElements = document.querySelectorAll('.list-group-item');
// console.log(listElements);
// console.log(listElements[1]);

listElements[1].style.backgroundColor = 'red';
listElements[1].style.color = 'white';