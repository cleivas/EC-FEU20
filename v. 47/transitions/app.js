let div = document.querySelector('#main');

div.addEventListener('click',
    function(event){
        console.log(event.x)
        let hue = event.x;
        //div.style.backgroundColor = `hsl(${hue}, 30%, 70%)`;
        div.classList.toggle('blue');
        div.style.height = `${hue}px`;
    }
)