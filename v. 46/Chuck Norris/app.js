/*
Vi ska hämta namn input datan från formuläret för att använda det till
chuck norris skämt.
1. eventlistener på formuläret
2. Hämta värdet från båda textfälten
3. Använd de värdena i URL
4. Fetch med URL
5. Uppdatera p elementet med skämtet
*/

let form = document.querySelector('#joke-form');

form.addEventListener('submit',
    function(event){
        event.preventDefault();

        let firstNameInput = document.querySelector('#firstName');
        let lastNameInput = document.querySelector('#lastName');
        
        let firstName = firstNameInput.value;
        if(firstName === ''){
            firstName = 'Chuck';
        }
        let lastName = lastNameInput.value;
        if(lastName === ''){
            lastName = 'Norris';
        }

        const url = 
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;


        fetch(url).then(
            function(response){
                return response.json();
            }
        ).then(
            function(data){
                let p = document.querySelector('p');
                console.log(data);
                console.log(data.value)
                p.innerHTML = data.value.joke;
            }
        )

    }
);