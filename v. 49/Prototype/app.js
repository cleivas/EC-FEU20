/* 
Biblioteksmedlem 

Egenskaper - kommer finnas för alla medlemsobjekt men vara unika för varje
    - Namn
    - ID
    - Antal lånade böcker
    - rabattgrupp
    - Ålder

Metoder - behöver finnas för varje medlemsobjekt
    - Låna bok
    - Få rabatt i bibliotekscafet beroende på åldersgrupp
    - Reservera bok
*/

let antalMedlemmar = 1336; //simulerar antalet medlemmar
//Constructorn
function Biblioteksmedlem(namn, alder, rabattgrupp){
    this.namn = namn;
    this.alder = alder;
    this.rabattgrupp = rabattgrupp;

    antalMedlemmar++;
    this.id = antalMedlemmar;

    this.lanadeBocker = 0;
}
//Prototype metoder
Biblioteksmedlem.prototype.lanaBok = function(antal){
    this.lanadeBocker += antal; 
};
Biblioteksmedlem.prototype.raknaUtRabatt = function(pris){
    let rabatt = 1; //100% 
    if(this.rabattgrupp === 'student'){
        rabatt = 0.5;
    }
    return pris*rabatt;
}
Biblioteksmedlem.prototype.reserveraBok = function(bok){
    console.log(bok, 'är nu reserverad');
}

//ett objekt som är en instans av Biblioteksmedlem
let medlem1 = new Biblioteksmedlem('Samir Meijer', 28, 'student');
medlem1.reserveraBok('dödluvan');
medlem1.lanaBok(100);
console.log('Antal lånade böcker:', medlem1.lanadeBocker);
console.log('Kaffet kostar:', medlem1.raknaUtRabatt(20));
console.log(medlem1.namn, medlem1.alder);

//ett till objekt som är en instans av Biblioteksmedlem
let medlem2 = new Biblioteksmedlem('Clara Leivas', 34, 'ingen');
medlem2.reserveraBok('hypersanity');
medlem2.lanaBok(1);
console.log('Antal lånade böcker:', medlem2.lanadeBocker);
console.log('Kaffet kostar:', medlem2.raknaUtRabatt(20));
console.log(medlem2.namn, medlem2.alder);

//medlemsobjekt - vi skulle kunna skriva alla våra medlemmar såhär, men det skulle inte vara så effektivt om vi har 5000 medlemmar
let medlem = {
    namn: 'Samir Meijer',
    ID: 1337,
    lanadeBocker: 12,
    alder: 28,
    rabattgrupp: 'student',

    lanaBok: function(antalBocker){
        this.lanadeBocker += antalBocker;
    },

    raknaUtRabatt: function(pris){
        let rabatt = 1;
        if(this.rabattgrupp === 'student'){
            rabatt = 0.5;
        }

        return pris*rabatt;
    },

    reserveraBok: function(bok){
        console.log(bok, 'är nu reserverad');
    }

}

//Kolla på skillnaderna mellen medlem1/medlem2 och medlem. Var finns metoderna och varför?
console.log(medlem1, medlem2, medlem);