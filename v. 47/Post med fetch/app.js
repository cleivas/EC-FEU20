/*  
För att göra en post request kommer vi behöva
1. Datan vi vill skicka. Kommer skickas som en string i json format.
    Ett objekt som görs om till string i json format

2. ett objekt för andra parametern i fetch.
    objektet kommer innehålla metod, header och body.
*/

let postForm = document.querySelector('#post-form');
postForm.addEventListener('submit',
    function(event){
        event.preventDefault();

        //Hämta textinnehållet från title text-inputen
        let titleInput = document.querySelector('#title');
        const titleText = titleInput.value;

        //Hämta textinnehållet från body text-inputen
        let bodyInput = document.querySelector('#body');
        const bodyText = bodyInput.value;

        //Det nya inlägget som vi vill posta
        //med textinnehållet från våra text-inputs
        const myPost = {
            userId: 33,
            title: titleText,
            body: bodyText,
        };

        const url = 'https://jsonplaceholder.typicode.com/posts';

        //Andra argumentet i fetch-metoden. 
        //Ett object som innehåller inställningar för våran request
        const init = {
            method: 'POST', //metoden vi vill använda. Default är GET
            headers: {
                'Content-Type': 'application/json' //I vilket format datan vi skickar är
            },

            body: JSON.stringify(myPost) //Gör om JS objektet till en string i json-format
        };


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

    }
)


