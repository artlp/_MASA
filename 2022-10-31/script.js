const h2 = document.querySelector('h2');
const output = document.querySelector('.output');

let time = new Date();
h2.innerHTML = `Current time is ${time}`;



setInterval(function () {
    time = new Date();
    h2.innerHTML = `Current time is ${time}`;
}, 1000);


const btnList = document.querySelectorAll('.btn');

/* btnList[0].addEventListener('click', (e) => {
    console.log(e);
    // output.innerHTML += e.target;
    output.innerHTML += e.target.innerText;
});
 */

btnList.forEach(e => {


    e.addEventListener('click', (e) => {
        output.innerHTML += e.target.innerText + " ";

    });
});