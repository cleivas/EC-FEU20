//'this', the keyword is not a variable.
//It does not contain any values
//We can look at it as a placeholder

//här hänvisar 'this' till objektet vi är innuti
let obj = {
    name: 'Mamoun',
    age: 27,

    present: function(){
        console.log(this.name, this.age);
    }
}
obj.present();


//In a constructor 'this' is a placeholder for the to be created object 

function Obj(){
    this.name = 'Mamoun';
    this.age = 27;
}

Obj.prototype.present = function(){
    console.log(this.name, this.age);
}

let objOfObj = new Obj();
console.log(objOfObj.name);
