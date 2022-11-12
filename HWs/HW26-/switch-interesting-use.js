const intInput = document.querySelector('#int');
const out = document.querySelector('.out');
const intInput2 = document.querySelector('#int2');
const out2 = document.querySelector('.out2');

intInput.addEventListener('input',() => {

    let num = +intInput.value;
    let sum = 0;

    switch(num) {
        case 6:
            sum += 6;
        case 5:
            sum += 5;
        case 4:
            sum += 4;
        case 3:
            sum += 3;
        case 2:
            sum += 2;
        case 1:
            sum += 1;
            break;
        default:
            sum = 'Enter what we asked you politely'
    }

    out.innerText = sum;

})

intInput2.addEventListener('input',() => {

    let num2 = +intInput2.value;
    let sum2 = 0;

    switch(num2) {
        case 60:
            out2.innerText += `, study Kabbalah`;
        case 18:
            out2.innerText += `, drink`;
        case 17:
            out2.innerText += `, drive a car`;
        case 12:
            out2.innerText += `, work`;
        case 6:
            out2.innerText += `You can study`;
            break;
        default:
            sum2 = 'Enter what we asked you politely'
    }

    out.innerText2 = sum2;

})


