const div1 = document.querySelector('#div1');
const div1Input = document.querySelectorAll(".div1-input");
const div1Value = document.querySelectorAll(".div1-value");
const div2 = document.querySelector('#div2');
const div2Input = document.querySelectorAll(".div2-input");
const div2Value = document.querySelectorAll(".div2-value");
const div3 = document.querySelector('#div3');
const div3Input = document.querySelectorAll(".div3-input");
const div3Value = document.querySelectorAll(".div3-value");
const div4 = document.querySelector('#div4');
const div4Input = document.querySelectorAll(".div4-input");
const div4Value = document.querySelectorAll(".div4-value");


document.addEventListener('DOMContentLoaded', refreshValues);

function refreshValues() {
    div1Value.forEach((e, i) => {
        e.innerHTML = div1Input[i].value;
        div2Value[i].innerHTML = div2Input[i].value;
        div3Value[i].innerHTML = div3Input[i].value;
        div4Value[i].innerHTML = div4Input[i].value;
    });
};


div1Input[0].addEventListener('input', function () {
    div1.style.width = (`${+div1Input[0].value}px`);
    div1.style.height = (`${+div1Input[0].value}px`);
    refreshValues();
});

div1Input[1].addEventListener('input', function () {
    div1.style.backgroundColor = (`${div1Input[1].value}`);
    refreshValues();
});

div1Input[2].addEventListener('input', function () {
    div1.style.borderWidth = (`${+div1Input[2].value}px`);
    refreshValues();
});

div1Input[3].addEventListener('input', function () {
    div1.style.borderColor = (`${div1Input[3].value}`);
    refreshValues();
});

div2Input[0].addEventListener('input', function () {
    div2.style.borderRadius = (`${+div2Input[0].value}px`);
    refreshValues();
});

div2Input[1].addEventListener('input', function () {
    div2.style.transform = (`translateX(${+div2Input[1].value}px) translateY(${+div2Input[2].value}px) rotate(${+div2Input[3].value}deg`);
    refreshValues();
});

div2Input[2].addEventListener('input', function () {
    div2.style.transform = (`translateX(${+div2Input[1].value}px) translateY(${+div2Input[2].value}px) rotate(${+div2Input[3].value}deg`);
    refreshValues();
});

div2Input[3].addEventListener('input', function () {
    div2.style.transform = (`translateX(${+div2Input[1].value}px) translateY(${+div2Input[2].value}px) rotate(${+div2Input[3].value}deg`);
    refreshValues();
});

div3Input[0].addEventListener('input', function () {
    div3.style.fontSize = (`${+div3Input[0].value}px`);
    refreshValues();
});

div3Input[1].addEventListener('input', function () {
    div3.style.textAlign = (`${div3Input[1].options[div3Input[1].selectedIndex].value}`)
    refreshValues();
});

div3Input[2].addEventListener('input', function () {
    div3.style.fontWeight = (`${div3Input[2].value}`);
    refreshValues();
});

div3Input[3].addEventListener('input', function () {
    div3.style.lineHeight = (`${+div3Input[3].value}px`);
    refreshValues();
});

div4Input[0].addEventListener('input', function () {
    div4.style.boxShadow = (`${+div4Input[0].value}px ${+div4Input[1].value}px ${+div4Input[2].value}px ${+div4Input[3].value}px blue`);
    refreshValues();
});
div4Input[1].addEventListener('input', function () {
    div4.style.boxShadow = (`${+div4Input[0].value}px ${+div4Input[1].value}px ${+div4Input[2].value}px ${+div4Input[3].value}px red`);
    refreshValues();
});
div4Input[2].addEventListener('input', function () {
    div4.style.boxShadow = (`${+div4Input[0].value}px ${+div4Input[1].value}px ${+div4Input[2].value}px ${+div4Input[3].value}px green`);
    refreshValues();
});
div4Input[3].addEventListener('input', function () {
    div4.style.boxShadow = (`${+div4Input[0].value}px ${+div4Input[1].value}px ${+div4Input[2].value}px ${+div4Input[3].value}px yellow`);
    refreshValues();
});
