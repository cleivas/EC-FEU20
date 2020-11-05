//mouse click

let button = document.querySelector('button');
button.addEventListener('click',
    function(event){
        console.log('Klick på första knappen');
    }
);


/* //Mouse move 
let secondProduct = document.querySelector('.art-2');
//console.dir(secondProduct);

secondProduct.addEventListener('mousemove',
    function(event){
        let hue = ( (event.x) / 3 ) + 100;
        let saturation = event.y/5;

        secondProduct.style.backgroundColor = `hsl( ${hue}, ${saturation}%, 70%)`;
        // console.log(event.x, hue);
        //console.log(event.y, saturation);
        //console.log(event.x, event.y);
    }
); */


/* //mouse event -> enter and leave 
let btn = document.querySelector('button');
let firstProduct = document.querySelector('.art-1');

btn.addEventListener('mouseenter',
    function(event){
        event.target.classList.add('bg-blue');
        //btn.classList.add('bg-blue');
        //console.log(event.target);
        //event.target = elementet som eventet hände på
    }
);

btn.addEventListener('mouseleave',
    function(event){
        event.target.classList.remove('bg-blue');
    }
); */



// console.dir(firstProduct);