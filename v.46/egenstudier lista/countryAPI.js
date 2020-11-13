/*
Hämta information om sverige. Presentera Namn, population, tidszon och flaggan.
Du kan testa att använda ‘specified fields’ i ditt anrop.

1. Kolla API doc för att veta hur vi söker på ett specifikt land
2. Kolla doc/logga info för att ta reda på hur datan är strukturerad
3. Vi behöver 4 html element varan 1 är ett img element
    1. create ett Element ul
    2. select body 
    3. append UL i bodyn
    4. create 3 li element
    5. append li till ul
    6. create img element
    7. append till bodyn
    8. sätt inner Text till alla LIs
    9. sätt src på img elementet till flagUrl
*/

const url = 'https://restcountries.eu/rest/v2/name/sweden';

fetch(url).then(
    function(response){
        //console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data[0].flag);
        const name = data[0].nativeName;
        const population = data[0].population;
        const timezone = data[0].timezones[0];
        const flagUrl = data[0].flag;

        presentData(name);
    }
);

function presentData(n){
    let body = document.querySelector('body');
    let ul = document.createElement('ul');
    body.appendChild(ul);

    let nameLi = document.createElement('li');
    let populationLi = document.createElement('li');
    let timeZoneLi = document.createElement('li');
    ul.appendChild(nameLi);
    ul.appendChild(populationLi);
    ul.appendChild(timeZoneLi);

    let flagImg = document.createElement('img');
    body.appendChild(flagImg);

    nameLi.innerText = n;
}