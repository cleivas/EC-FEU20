/*
Vi skapar en mall för hund som tar en bild URL som argument. 

MAllen har en metod som heter display som kommer visa bilden på hunden

- constructor med en parameter och en egenskap
- prototypmetod som använder egenskapen för att visa en bild

Med fetch kommer vi hämta url och skapa ett objekt med constructorn
*/

const URL = 'https://dog.ceo/api/breeds/image/random';

fetch(URL).then(
    // response => response.json()
        function(response){
            return response.json();
        }
    ).then(
        function(data){
            let hund = new Dog(data.message);
            hund.display();
            console.log(hund);
        }
    )



//Hundmallen
function Dog(_url){
    this.url = _url;
}

Dog.prototype.display = function(){
    let body = document.querySelector('body');
    let img = document.createElement('img');
    img.src = this.url;

    body.appendChild(img);
}

