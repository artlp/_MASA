const trafficLight = document.querySelectorAll('.trafficlight');
const trafficLight1 = document.querySelector('#traffic1');
const trafficLight2 = document.querySelector('#traffic2');
const button = document.querySelector('#switcher');
const button2 = document.querySelector('#switcher2');
const light = document.querySelectorAll('.light');
const red = document.querySelectorAll('.red');
const yellow = document.querySelectorAll('.yellow');
const green = document.querySelectorAll('.green');
let x = 0;
let i = 0;
let auto = 0;
const sequence = ['red0', 'redyellow0', 'redyellow1', 'green0'];

function controlLights() {
    color = sequence[x++];
    if (x === sequence.length) {
        x = 0;
    };
    console.log(color);
    return color;
}

function changeLights() {
    light.forEach(e => e.classList.toggle("dim"));
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        changeLightsx();
    }, 0);
});

document.querySelector('#switcher3').addEventListener(`click`, function () {
    for (i = 0; i < 333; i++) {

        (function (i) {
            window.setTimeout(function () {
                changeLightsx();
                console.log(i);
            }, i * 900);
        }
            (i));
    }


});

function changeLightsx() {
    switch (controlLights()) {
        case `red0`:
            turnOff();
            red[0].classList.toggle("dim");
            green[1].classList.toggle("dim");
            break;
        case `redyellow0`:
            yellow[1].classList.toggle("dim");
            break;
        case `redyellow1`:
            red[0].classList.toggle("dim");
            yellow[1].classList.toggle("dim");
            green[0].classList.toggle("dim");
            green[1].classList.toggle("dim");
            red[1].classList.toggle("dim");
            break;
        case `green0`:
            yellow[0].classList.toggle("dim");
            break;
        case `green1`:
            yellow[0].classList.toggle("dim");
            green[0].classList.toggle("dim");
            green[1].classList.toggle("dim");
            red[1].classList.toggle("dim");
            red[0].classList.toggle("dim");
            break;
        default:
            green[1].classList.remove("dim");
            break;
    }
}

function turnOff() {
    document.querySelectorAll(`.light`).forEach(e => e.classList.add("dim"));
}

function autoModeOn() {
    auto = 1;
    console.log("auto mode enabled", auto);
    for (i = 0; i < 30; i++) {
        if (auto === 1) {
        console.log(i);
        (function (i) {
            window.setTimeout(function () {
                changeLightsx();
            }, i * 900);
        }(i));} else {
                i = 400;
            }
    }
    console.log(`i is ${i}`);
return i;
}

function autoModeOff() {
    console.log("auto mode disabled", auto);
    auto = 0;
    // turnOff();
}

function toggleAuto() {
    console.log(auto);
 auto === 0 ? autoModeOn() : autoModeOff();
}