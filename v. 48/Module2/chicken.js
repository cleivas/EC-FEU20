//chicken template

//the constructor - best practice start with capital letter
function Chicken(_color){ //parameter för att ange färgen på vår chicken
    this.color = _color; //egenskapen color som kommer finnas för varje instansobjekt
}

Chicken.prototype.sound = 'beep beep'; //Samma för alla kycklingobjekt som vi skapar

export {Chicken};