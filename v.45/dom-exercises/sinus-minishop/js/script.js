/* let lastProduct = document.querySelector('.art-3');

lastProduct.insertAdjacentHTML('afterend', 
`<article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forrest</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>
<button>buy</button>
</article>`);

let forrestHoodie = document.querySelector('.art-4');

let forrestP = document.querySelector('.art-4 p');
forrestP.innerText = 'Ny text!';

let newHeading = document.createElement('h2');
newHeading.innerText = 'New H2';
//forrestHoodie.appendChild(newHeading);

forrestP.insertAdjacentElement('beforebegin', newHeading);


console.log(forrestP);
 */

let headerNavigation = document.querySelector('#header-navigation');
headerNavigation.children[2].text = 'Mail us';

console.log(headerNavigation.children[2]);