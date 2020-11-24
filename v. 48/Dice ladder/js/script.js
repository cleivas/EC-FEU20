/* Tärningsobjektet */
let die = {
    sides: 6,
    currentValue: 0,

    roll: function(){
        this.currentValue = Math.ceil(Math.random()*this.sides);
    }, 
}

//håller koll på antal slag
let rolls = 0;

//håller koll på nuvarande mål
let target = 1;

//knappen för att kasta
let btn = document.querySelector('button');
btn.addEventListener('click', 
    function(){
        die.roll();
        // console.log(die.currentValue);

        // Visa värdet på tärningen
        let mainDie = document.querySelector('#dice');
        mainDie.classList = '';
        mainDie.classList.add(`dice`, `dice-${die.currentValue}`);
        
        //Visa antal slag hittills
        rolls++;
        btn.innerText = `Kasta (${rolls})`;

        //kolla om tärningsvärdet är samma som nuvarande målet
        if(target === die.currentValue){
            //ta bort faded-klassen från det elementet som motsvarar
            //målet vi precis nådde
            let targetDie = document.querySelector(`header .dice-${target}`);
            targetDie.classList.remove('faded');
            

            if(target === die.sides){
                setTimeout(
                    function(){
                        alert(`You won! Your score: ${rolls}`);
                        reset();
                    }, 200);
            } else{
                target++;
            }
        }
    }
);

//resetar allt
function reset(){
    target = 1;
    rolls = 0;

    //hämta alla tärningar i headern
    let headerDice = document.querySelectorAll('header article');

    //lägga till fadedklass till alla header tärningar
    for(headerDie of headerDice){
        headerDie.classList.add('faded');
    }
}