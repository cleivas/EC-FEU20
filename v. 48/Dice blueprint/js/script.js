//Skriv tärningskoden här



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