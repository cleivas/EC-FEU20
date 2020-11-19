/*  
För att göra en post request kommer vi behöva
1. Datan vi vill skicka. Kommer skickas som en string i json format.
    Ett objekt som görs om till string i json format

2. ett objekt för andra parametern i fetch.
    objektet kommer innehålla metod, header och body.
*/


const url = 'https://jsonplaceholder.typicode.com/posts';

const myPost = {
    userId: 33,
    title: 'Dag 46',
    body: 'Jag har inte sett land på 46 dagar',
};

const init = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify(myPost)
};

// console.log(init.body);

fetch(url, init).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data);
    }
)