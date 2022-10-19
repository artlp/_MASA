const showRandomZeroToOne = () => {
    document.querySelector('.zero-to-one .output').innerText = Math.round(Math.random() * 100) / 100;
};

document.querySelector('.zero-to-one-button').addEventListener('click', showRandomZeroToOne);


const showRandomZeroToThree = () => {
    document.querySelector('.zero-to-three .output').innerText = Math.floor(Math.random() * 4);
};

document.querySelector('.zero-to-three-button').addEventListener('click', showRandomZeroToThree);

const showRandomOneToTen = () => {
    document.querySelector('.one-to-ten .output').innerText = Math.floor((Math.random()) * 10)+1;
};

document.querySelector('.one-to-ten-button').addEventListener('click', showRandomOneToTen);
