const numberValue = document.querySelector('#numInput');
const outputDiv = document.querySelector('#result');

document.querySelector('#checkButton').addEventListener('click', () => {
    let isPrime = true;
    let number = +numberValue.value;
    // check if number is equal to 1
    if (number === 1) {
        console.log("%c 1 is neither prime nor composite number.", "color:red; font-size:1rem");
        outputDiv.innerHTML = `1 is <span style="color:red">neither prime nor composite</span> number.`;
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            outputDiv.innerHTML = `${number} is a <span style="color:green">prime</span> number.`;
            console.log(`%c ${number} is a prime number`, `color:green; font-size:1rem`);
        } else {
            outputDiv.innerHTML = `${number} is <span style="color:red">not a prime</span> number.`;
            console.log(`%c ${number} is a not prime number`, `color:red; font-size:1rem`);
        }
    }

    // check if number is less than 1
    else {
        console.log("%c The number is not a prime number.", "color:red; font-size:1rem");
        outputDiv.innerHTML = `${number} is <span style="color:red">not a prime</span> number.`;
    }

});
