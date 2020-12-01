//Generera en kortlek, blanda kortleken och visa i domen
//Det ni kan ha använding av är användandet av random beroende på längden av en array som blir mindre och mindre eftersom vi använder splice()


let generatedDeck = generateDeck();
let shuffledDeck = shuffle(generatedDeck);
generateUI(shuffledDeck);

//Den här funktionen returnerar en array med 'kort'
function generateDeck(){
    let deck = []; //Tom array
    let suits = ['&hearts;', '&diams;', '&spades;', '&clubs;']; //De olika färgerna som finns. De ser ut så här eftersom det är koden för de olika färg-tecknen. På så sätt kan vi sen använda det i innerHTML

    //generera 4x13 kort 
    for(i=0; i<suits.length; i++){ //Loopar 4 gånger
        for(j=2; j<=14; j++ ) { //loopar 13 gånger
            deck.push({suite: suits[i], value: j }) //Lägger till ett objekt till deck-arrayn, varje objekt har en suit och ett värde
        }
    }
    return deck; //Returnerar arrayn med kort 
}

//Returnerar en array med 'kort'
function shuffle(deck) {
    let shuffledDeck = []; //tom array där vi ska lägga till kort från den oblandade kortleken

    for(i=0; i < 52; i++) {
        let rand = Math.floor(Math.random()*deck.length); //Gererera random nummer mellan 0 och längden på deck arrayn. Eftersom vi använder splice i nästa rad kommer längden minska med 1 varje gång forloopen körs. 
        let randCard = deck.splice(rand, 1)[0]; //ta bort ett element från deck arrayn på random index och spara det i randCard
        shuffledDeck.push(randCard) //Lägg till randCard till den nya arrayn
    }

    return shuffledDeck;
} 

//Inget fancy här, bara visa alla kort
function generateUI(deck) {
    console.log(deck)
    let times = 0;
    deck.forEach(card => {  
        let el = document.createElement('p');
        el.innerHTML = `${card.suite} ${card.value}`;

        if(card.suite === '&hearts;' || card.suite === '&diams;'){
            el.style.color = 'red';
        } 

        times++;
        document.querySelector('body').appendChild(el)
    })
}

