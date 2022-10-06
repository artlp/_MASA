const purpleDiv = document.querySelector(`.purple_box`);
const numInput = document.querySelector(`#num`);
const outP = document.querySelector(`.out span`);
function purpleDivColorOnHover() {
    if (purpleDiv.style.backgroundColor === `red`) {
        purpleDiv.style.backgroundColor = `blue`;
    } else {
        purpleDiv.style.backgroundColor = `red`;
    }
    purpleDiv.style.border = `3px solid lightblue`;
    purpleDiv.classList.add(`hover`);

}
function purpleDivColorOnHover2() {
    purpleDiv.style.backgroundColor = `green`;
    purpleDiv.classList.remove(`hover`);

}
//TODO 
function ifEven() {
    let num = +numInput.value;
    outP.innerHTML = num % 2 === 0 ? "even" : "odd";
}



function yellowButtonClick() {
    purpleDiv.innerHTML += "<em> LOL 🤣</em>";
}

document.querySelector(`.yellow_button`).addEventListener(`click`, yellowButtonClick);
purpleDiv.addEventListener(`mouseover`, purpleDivColorOnHover);
purpleDiv.addEventListener(`mousedown`, purpleDivColorOnHover2);
document.querySelector(`.black_button`).addEventListener(`click`, ifEven);
