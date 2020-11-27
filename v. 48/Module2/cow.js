//cow template

function Cow(_size){
    this.size = _size; //Size är unikt för varje ko-objekt
}   

Cow.prototype.sound = 'mooooooo'; //samma ljud för alla skapade ko-objekt

export {Cow};