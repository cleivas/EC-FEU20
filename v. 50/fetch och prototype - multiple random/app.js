/*
Vi ska hämta alla hundbilder för en viss ras
Sedan ska vi skapa 3 instanser av Dog
Varje instans eller objekt ska ta en random bild från samlingen som vi hämtat
*/

const URL = 'https://dog.ceo/api/breed/spaniel/images/random/100';

fetch(URL).then(
    // response => response.json()
        function(response){
            if(response.status === 404){
                throw 'Not found';
            }
            else{
                return response.json();
            }
        }
    ).then(
        function(data){
            // console.log(data.message.length);
            let hundar = [];

            for(let i = 0; i<3; i++){
                let rand = Math.floor(Math.random()* data.message.length);
                // console.log(data.message[rand]);
                hundar.push(
                    new Dog(data.message[rand])
                );
                
            }
            console.log(hundar);

            for(h of hundar){ //hundar är arrayn vi vill loopa igenom, h är namnet på elementet vi kommer åt vid varje loop
                h.display();
            }

        }
    ).catch(
        function(error){
            if(error === 'Not found'){
                console.log('Det hittades inte');
            }
            
        }
    )



//Hundmallen start
function Dog(_url){
    this.url = _url;
}

Dog.prototype.display = function(){
    let body = document.querySelector('body');
    let img = document.createElement('img');
    img.src = this.url;

    body.appendChild(img);
}
//Hundmallen slut
