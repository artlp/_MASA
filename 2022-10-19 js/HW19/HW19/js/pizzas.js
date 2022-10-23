const pizzas = document.querySelector('#pizza-num');
const people = document.querySelector('#people-num');
const output = document.querySelector('.output span');

const pizzaCounter = (a,b) => output.innerHTML=(a/b).toFixed(2);

pizzas.addEventListener(`change`,() => {
    pizzaCounter(+pizzas.value, +people.value);
})


function PizCounter() {
    let a = +pizzas.value;
    let b = +people.value;
    return output.innerHTML = (a/b).toFixed(2);
}

// pizzas.addEventListener('change', PizCounter);
people.addEventListener('input', PizCounter);