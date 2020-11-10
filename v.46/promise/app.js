let legoBeslut = new Promise(
    function(resolved, rejected){
        let momBuysLego = true;
        let typAvLego = 'star wars';

        if(momBuysLego){
            resolved(123);
        }else{
            rejected('Inget lego för dig.');
        }
    }
);


legoBeslut.then( 
    function(m){
        console.log(m);
        console.log('Nu börjar vi bygga');
    }
).catch(
    function(error){
        console.log(error);
        console.log('Jag går och hanterar min besvikelse');
    }
);



console.log(legoBeslut);
console.log('Kollar vad som händer');


