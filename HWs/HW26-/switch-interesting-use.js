const intInput = document.querySelector('#int');
const out = document.querySelector('.out');

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