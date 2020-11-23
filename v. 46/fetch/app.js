const cnURL = 'http://api.icndb.com/jokes/random';
const dogURL = 'https://dog.ceo/api/breeds/image/random';

let h3 = document.createElement('h3');
let img = document.createElement('img');

let body = document.querySelector('body');
body.appendChild(h3);
body.appendChild(img);


fetch(dogURL).then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        //console.log(data);
        console.log(data.message);
        img.src = data.message;
    }
).catch(
    function(error){
        console.error('Dog error:', error);
    }
);



fetch(cnURL).then(
    function(response){
        // console.log(response);
        return response.json();
    }
).then(
    function(data){
        // console.log(data);
        // console.log(data.value.joke);
        h3.innerHTML = data.value.joke;
    }
).catch(
    function(error){
        console.log('Chuck Norris error:', error);
    }
);