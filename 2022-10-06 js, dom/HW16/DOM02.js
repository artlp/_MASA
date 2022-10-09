const purpleDiv = document.querySelector(`.purple_box`);
const numInput = document.querySelector(`#num`);
const outP = document.querySelector(`.out span`);
const initialWidth = purpleDiv.offsetWidth;
const initialHeight = purpleDiv.offsetHeight;

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
function ifEven() {
    let num = +numInput.value;
    outP.innerHTML = num % 2 === 0 ? "even" : "odd";
    let randomNum = Math.floor(Math.random()*2.2);
    console.log(randomNum);
    document.querySelectorAll("button")[randomNum].style.borderColor = "red";
}

function makeLarger() {
    purpleDiv.style.width = purpleDiv.offsetWidth * 1.1 + "px";
    purpleDiv.style.height = purpleDiv.offsetHeight * 1.1 + "px";
    document.querySelector(`#boxSize`).innerText = `${purpleDiv.offsetWidth}x${purpleDiv.offsetHeight}`;
    console.log(purpleDiv.offsetWidth, purpleDiv.offsetHeight);
}

function resetBox() {
    purpleDiv.style.width = initialWidth + "px";
    purpleDiv.style.height = initialHeight + "px";
    document.querySelector(`#boxSize`).innerText = `${purpleDiv.offsetWidth}x${purpleDiv.offsetHeight}`;
}

function yellowButtonClick() {
    purpleDiv.innerHTML += "<em> LOL 🤣</em>";
}

document.querySelector(`.yellow_button`).addEventListener(`click`, yellowButtonClick);
purpleDiv.addEventListener(`mouseover`, purpleDivColorOnHover);
purpleDiv.addEventListener(`mousedown`, purpleDivColorOnHover2);
document.querySelector(`.black_button`).addEventListener(`click`, ifEven);
document.querySelector(`.larger_button`).addEventListener(`click`, makeLarger);
document.querySelector(`.reset_box`).addEventListener(`click`, resetBox);
document.querySelector(`#boxSize`).innerText = `${purpleDiv.offsetWidth}x${purpleDiv.offsetHeight}`;
