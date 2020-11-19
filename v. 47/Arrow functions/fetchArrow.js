const url = 'https://jsonplaceholder.typicode.com/posts';


//Using arrow functions
fetch(url)
    .then( response => response.json() )
    .then( data => {
        console.log(data); 
        console.log(data[0]);
    }      
    )


//anonymous function
/* fetch(url).then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        console.log(data);
        console.log(data[0]);
    }
) */