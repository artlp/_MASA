/* Mission 1: Replace looping through h1 – “Math” by “Computer” and “math” by “computer”*/
const names = ['Grace Hopper', 'Alan Turing', 'Ada Lovelace', 'Charles Babbage', 'Edsger Dijkstra', 'Donald E. Knuth', 'Lars Bak', 'Yefim Dinitz'];

const imgFiles = ['CharlesBabbage.jpg', 'dijkstra.jpg', 'dinitz.jpg', 'hopper.jpg', 'Knuth.jpg', 'lars_bak.jpg', 'Lovelace.jpg', 'Turing.jpg'];

const toLighten = ['Ada Lovelace', 'Donald E. Knuth'];

const photo = document.querySelectorAll('.name-tag p');

/* Mission 1: Replace looping through h1 – 
“Math” and "math" by “Computer” ,
replace the first comma (,) by <br> */

const headers = document.querySelectorAll('h1');

headers.forEach((e, i) => {
    headers[i].innerHTML = e.innerHTML.replace(/math/gi, 'Computer').replace(',', '<br>');
});

names.forEach((fullName,i) => {
    let arr = fullName.split(' ');
    let lastName = arr[arr.length - 1];
    console.log(lastName);

    let imgName = imgFiles.filter(e => {
        let re = new RegExp(lastName, 'i');
        return re.test(e);
    }).join('');
    console.log(imgName);

    const image = document.createElement('img');
    const span = document.createElement('span');
    span.innerText = fullName;
    image.src = `./img/${imgName}`;
    span.setAttribute('class','name-tag-text');
    image.setAttribute('class','name-tag-img')
    photo[i].appendChild(image);
    photo[i].appendChild(span);
    span.classList.add("lighten");
});