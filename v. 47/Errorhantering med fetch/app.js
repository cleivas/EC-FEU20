const apiKey = ''; //Insert your API key here
let cityName = 'malmö';

let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

fetch(url).then(
    function(response){
        //responset innehåller en header med info om hur det har gått med anropet
        console.log(response); 

        //statuskod 200 - 299 betyder att allt har gått bra
        if(response.status >= 200 && response.status <300){
            return response.json();
        }
        
        //statuskod 404 "not found" kommer vi hantera som ett error
        // i vårat fall betyder det att staden inte kunde hittas
        else if(response.status === 404){
            throw 'Staden kunde inte hittas';
        }

        //statuskod 401 "unauthorized kommer också hanteras som ett error
        //i detta fall betyder det att api nyckeln är fel
        else if(response.status === 401){
            throw response.statusText;
        }
        
    }
).then(
    function(data){
        console.log(data);
    }
).catch(
    function(error){
        console.log(error);
    }
)