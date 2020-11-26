//Skriv tärningskoden här
//Tärningsmallen
function Die(){
    //Alla unika egenskaper finns här
    this.value = 0;
}
//Alla metoder och egenskaper som är samma för alla är prototype ...
Die.prototype.sides = 6;
Die.prototype.roll = function(){
    this.value = Math.ceil(Math.random()*this.sides);
}
//antal tärningar
const nmbOfDice = 5;

//Skapa alla tärningsobjekt
let dice = [];
for(let i=0; i<nmbOfDice; i++){
    dice.push(new Die());
}
//kastar vi alla tärningar 
for(d of dice){
    d.roll();
}

let rollsLeft = 20;
let score = 0;

//Hämta knappen och sätta en eventlistener på den
let btn = document.querySelector('button');
btn.addEventListener('click', function(event){
    for(d of dice){
        d.roll();
        score += d.value;
    }

    let h1 = document.querySelector('h1');
    h1.innerText = `Score: ${score}`;

    for(let i=0; i<nmbOfDice; i++){
        //Hämta article element i turordning
        let dEl = document.querySelector(`#die${i+1}`);

        dEl.classList = '';
        dEl.classList.add('dice', `dice-${dice[i].value}`)
    }

    rollsLeft--;
    btn.innerText = `Kasta (${rollsLeft})`;

    if(rollsLeft === 0){
        alert(`Game is over. Final score: ${score}`);
        score = 0;
        rollsLeft=20;
        h1.innerText = `Score: ${score}`;
    }

});




//Se nedan som mall
/* //Vi ska skapa 100 bollar
//Alla ska ha en slumpartad färg
let colors = ['red', 'green', 'blue'];

function Ball(_color){
    this.color = _color;
}


let ball1 = new Ball(colors[0]); //Jag hade kunnat göra detta 100 gånger

//skapa 100 instanser av Ball
let balls = [];
for(let i=0; i<100; i++){
    let randomIndex = Math.floor(Math.random()*colors.length);
    
    let tempBall = new Ball(colors[randomIndex]); //skapar vi ett objekt med instruktorn

    balls.push(tempBall);
}
console.log(balls);

//Loopa genom alla element i arrayn balls 
for(b of balls){
    console.log(b.color);
}

//Den här for-loopen gör exakt samma som den ovan 
 for(let i=0; i<balls.length; i++){
     console.log(balls[i].color);
 } */