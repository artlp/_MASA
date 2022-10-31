const h1 = document.querySelector('h1');
const output = document.querySelector('.output');

const time = new Date();

h1.innerText = `Hello, today is ${time}`;

const btnList = document.querySelectorAll('.btn');

/* btnList[0].addEventListener('click', (e) => {
    console.log(e);
    // output.innerHTML += e.target;
    output.innerHTML += e.target.innerText;
});
 */

btnList.forEach(e => {

    e.addEventListener('click', (e) => {
        console.log(e);
        output.innerHTML += e.target.innerText +" ";

    });
});