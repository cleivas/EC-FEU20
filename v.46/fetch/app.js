const url = 'http://api.icndb.com/jokes/random';

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data.value.joke);
    }
).catch(
    function(error){
        console.log('Nätverksproblem', error);
    }
);