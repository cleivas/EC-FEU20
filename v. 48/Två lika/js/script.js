//Tärningarna 
let dice = [];
for(let i=0; i<3; i++){
    dice.push({
        sides: 6,
        currentValue: 0,
        roll: function(){
        this.currentValue = Math.ceil(Math.random()*this.sides);
        }
    });
}

//Rolls left
let rollsLeft = 20;
let score = 0;

let btn = document.querySelector('button');
btn.addEventListener('click',
    function(){


        //Roll the dice
        for(d of dice){
            d.roll();
        }

        //Set classes for the dice elements
        let dieElement1 = document.querySelector('#die1');
        dieElement1.classList = '';
        dieElement1.classList.add('dice', `dice-${dice[0].currentValue}`);

        let dieElement2 = document.querySelector('#die2');
        dieElement2.classList = '';
        dieElement2.classList.add('dice', `dice-${dice[1].currentValue}`);

        let dieElement3 = document.querySelector('#die3');
        dieElement3.classList = '';
        dieElement3.classList.add('dice', `dice-${dice[2].currentValue}`);

        console.log(dice[0].currentValue, dice[1].currentValue, dice[2].currentValue);

        //Change text of button to show how many rolls we have left
        rollsLeft--;
        btn.innerText = `Kasta (${rollsLeft})`;
        
        //check result to set the score
        if(dice[0].currentValue === dice[1].currentValue && dice[1].currentValue === dice[2].currentValue){
            score+=5; //score = score + 5;
        } else if( dice[0].currentValue === dice[1].currentValue ||
            dice[1].currentValue === dice[2].currentValue ||
            dice[0].currentValue === dice[2].currentValue){
            score++;
        }
        console.log(score);
        //Show score
        let scoreElement = document.querySelector('h1');
        scoreElement.innerText = `Score: ${score}`;

        //check to reset game
        if(rollsLeft === 0){
            alert(`Game ended. Final score: ${score}`)

            rollsLeft = 20;
            score = 0;
            scoreElement.innerText = `Score: ${score}`;
        }
    }
);