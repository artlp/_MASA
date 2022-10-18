const btnChangeColor = document.querySelector(`#change-color`);
const headerChangeColor = document.querySelector(`h1`);

function generateRGB() {
    let R = Math.round(Math.random()*254);
    let G = Math.round(Math.random()*254);
    let B = Math.round(Math.random()*254);
    return `rgb(${R},${G},${B})`;
}

function changeColor() {
    let color = "red";
}



btnChangeColor.addEventListener("click", () => {
    let color = generateRGB();
    let textColor = generateRGB();
    let bodyColor = generateRGB();
    btnChangeColor.style.backgroundColor = color;
    btnChangeColor.style.color = textColor;
    document.querySelector(`body`).style.backgroundColor = bodyColor;
});

// ! arrow function:

const changeHeaderColor = () => {
    headerChangeColor.style.borderColor = generateRGB();
    // headerChangeColor.classList.toggle("border")
    if (headerChangeColor.classList.contains(`purple`)) {
            headerChangeColor.classList.replace(`purple`,`orange`)
        } else if (headerChangeColor.classList.contains(`orange`)) {
            headerChangeColor.classList.replace(`orange`,`grey`)
        } else {
            headerChangeColor.classList.replace(`grey`,`purple`)
        }
    }

