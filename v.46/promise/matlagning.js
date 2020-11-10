// vi ska alla äta middag tillsammans
// Frida handlar - Det första vi starta
// Tim lagar mat - Först när Frida är tillbaka med ingredienserna
// Arber dukar - När som helst


handla().then(lagaMat).catch(
    function(error){
        console.log(error);
        console.log('Vi beställer pizza');
    }
);
duka();


function handla(){
    console.log('Frida sticker och handlar');

    return new Promise(
        function(resolve, reject){
            setTimeout(
                function(){
                    let error = true;

                    if(error === false){
                        resolve('Frida är tillbaka med ingredienserna.');
                    }else{
                        reject('Frida blev rånad D:');
                    }
                    
                }, 3000
            );
        }
    );
}
function lagaMat(vadSomHelst){
    console.log(vadSomHelst);
    console.log('Tim börjar laga maten, den är färdig direkt!');
}

function duka(){
    console.log('Arber dukar och är färdig!');
}

/* function handla(){
    console.log('Frida sticker och handlar');

    setTimeout(
        function(){
            console.log('Ingredienserna är här!');
        }, 3000
    );
} */



