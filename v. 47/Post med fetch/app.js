/*  
För att göra en post request kommer vi behöva
1. Datan vi vill skicka. Kommer skickas som en string i json format.
    Ett objekt som görs om till string i json format

2. ett objekt för andra parametern i fetch.
    objektet kommer innehålla metod, header och body.
*/


const url = 'https://jsonplaceholder.typicode.com/posts';

//Det nya inlägget som vi vill posta
const myPost = {
    userId: 33,
    title: 'Dag 46',
    body: 'Jag har inte sett land på 46 dagar',
};

//Andra argumentet i fetch-metoden. 
//Ett object som innehåller inställningar för våran request
const init = {
    method: 'POST', //metoden vi vill använda. Default är GET
    headers: {
        'Content-Type': 'application/json' //I vilket format datan vi skickar är
    },

    body: JSON.stringify(myPost) //Gör om JS objektet till en string i json-format
};

// console.log(init.body);

//Nu använder vi två argument i fetch-metoden
fetch(url, init).then(
    function(response){
        //Har allt gått bra kommer vi få statuskod 201, 'Created'
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data);
    }
)