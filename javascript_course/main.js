console.log(window);
// Single Element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Mutiple Elements
console.log(document.getElementsByClassName('items'));
console.log(document.getElementsByTagName('li'));
console.log(document.querySelectorAll('.item'));


const ul = document.querySelector('.items');


ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'World';
ul.lastElementChild.innerHTML = '<strong>Hello</strong>';


// document.querySelector('.btn').addEventListener('click', event => {
//     event.preventDefault();

//     // document.querySelector('#my-form').style.background = "black";
//     // document.querySelector('#my-form').style.color = "white";

//     // THE STYLE DEFINED IN CSS IS POWERFUL THAN THE ONE ADDED
//     document.querySelector('#my-form').classList.add('bg-dark');
// });

// Add user
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const form = document.querySelector('#my-form');
const users = document.querySelector('#users');
const msg = document.querySelector('.msg');
form.addEventListener('submit', onsubmit);
function onsubmit(event) {
    event.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields.'

        // message disappear after 3s
        setTimeout(() => {
            msg.remove();
        }, 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value}  ${email.value}`));
        users.appendChild(li);
    }
}