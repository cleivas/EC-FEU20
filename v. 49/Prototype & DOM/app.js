//Ett litet exempel på hur ni kan jobba med prototype och DOM-element

//Constructor
function TextH1(_id){
    this.id = _id;

    this.h1 = document.createElement('h1');
    this.h1.id = this.id;
    this.body.appendChild(this.h1);
}
//Alla objekt kommer behöva body-elementet
TextH1.prototype.body = document.querySelector('body');

//Alla objekt kommer behöva följande metoder
TextH1.prototype.addText = function(text){
    this.h1.innerText = text;
}

TextH1.prototype.removeText = function(){
    this.h1.innerText = '';
}

//skapar 10 instanser av TextH1
let rubriker=[];
for(let i =0; i<10; i++){
    rubriker[i] = new TextH1(i);
    console.log(rubriker[i]);
}

//Sätter text till objektets id
for(let rubrik of rubriker){
    rubrik.addText(rubrik.id);
}

//Tar bort all text igen
/* for(let rubrik of rubriker){
    rubrik.removeText();
} */
