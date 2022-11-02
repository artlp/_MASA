const h2 = document.querySelector('h2');
const output = document.querySelector('.output');
const container = document.querySelector('.container');
const btnList = document.querySelectorAll('.btn');

let time = new Date();
h2.innerHTML = `Current time is <span style="color:cornflowerblue">${time}</span>`;



setInterval(function () {
    time = new Date();
    h2.innerHTML = `Current time is <span style="color:cornflowerblue">${time}</span>`;
}, 1000);


/* const addLetter = (event) => {
    console.log(`%c${event.target.innerText} button is clicked`,"color:cornflowerblue");
    output.innerText += `${event.target.innerText}`;
} */

// * IMPROVED FUNCTION
const addLetter = (event) => {
    // console.log(`%c${event.target.innerText} button is clicked`,"color:cornflowerblue");
    if (event.target.tagName === "BUTTON") {
    output.innerText += ` ${event.target.innerText}`;
    }
}


// *ADDING JUST ONE LISTENER TO A SINGLE BUTTON
/* btnList[0].addEventListener('click', (e) => {
    console.log(e);
    // output.innerHTML += e.target;
    output.innerHTML += e.target.innerText;
});
 */

// *ADDING JUST ONE LISTENERS TO ALL BUTTONS VIA FOREACH LOOP

/* btnList.forEach(e => {
    e.addEventListener('click', (e) => {
        output.innerHTML += e.target.innerText + " ";
    });
}); */

// * ADDING ONE EVENTLISTENER TO PARENT AND USING PROPAGATION AND BUBBLING
/* container.addEventListener('click', () => {
    console.log("%ccontainer is clicked", "color: lime");

}) */
container.addEventListener('click', addLetter);

/* document.body.addEventListener('click', () => {
    console.log("%cbody is clicked", "color: yellow");
    
})
btnList.forEach(btn => btn.addEventListener('click',addLetter) );
btnList.forEach(btn => btn.addEventListener('click',() => console.log("%cbuttonIsClickedbutton Is Clicked", "color: red")));

 */