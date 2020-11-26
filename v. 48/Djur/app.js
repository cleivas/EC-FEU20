//jag behöver flera olika fyrbenta däggdjur
//Eftersom de har många ilknande egenskaper vill jag inte behöva upprepa definitionerna

function Animal(_sound){
    //this.legs = 4; moved to an instance property
    //this.tail = true;
    this.sound = _sound;
}

Animal.prototype.legs = 4;
Animal.prototype.tail = true;
Animal.prototype.makeSound = function(){
    console.log(this.sound);
}

let cat = new Animal('mjau');
let wolf = new Animal('aaaoooouuuuu');
let elephant = new Animal('tuuut tuuut');

console.log(cat, wolf);

cat.makeSound();
wolf.makeSound();
elephant.makeSound();

//OM vi ska programmera en hel djurpark kommer detta bli jobbigt
//Alla djur har fyra ben, och alla djur har svans
/* let katt = {
    antalBen: 4,
    svans: true,
    ljud: 'mjau',

    prata: function(){
        console.log(this.ljud);
    }
}

let varg = {
    antalBen: 4,
    svans: true,
    ljud: 'aaaoooouuuuu',
    prata:function(){
        console.log(this.ljud);
    }
}

console.log(katt.antalBen, katt.svans);
katt.prata();
varg.prata(); */