console.log('Start');

setTimeout(
    function(){
        console.log('Det händer efter 5 sekunder')
    }, 5000
);

setInterval(
    function(){
        console.log('Det händer varje sekund');
    }, 1000
);


    setTimeout(
        function(){
            console.log('Vi skriver ut något efter 3 sekunder')
        }, 3000 //millisekunder 
    );
