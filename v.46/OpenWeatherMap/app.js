const apiKey = ''; //Insert your API key here
let cityName = 'london';

let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

fetch(url).then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        console.log(data);
    }
)