const btnChangeColor = document.querySelector('.change-color');
const out = document.querySelector('.out');
const text = document.querySelector('.text');
const html = document.querySelector('.html');
const content = document.querySelector('.content');
/* //! 
    const btnChangeColorStyle = {
    background: btnChangeColor.style.backgroundColor,
    fontColor: btnChangeColor.style.color,
    border: btnChangeColor.style.border,
}
 */
//! style can't be used to reveal the original values, only to apply them
//* proper way: use window method GETCOMPUTEDSTYLE(EL) - it creates an object with all properties.

const btnChangeColorComputed = getComputedStyle(btnChangeColor);
console.log(btnChangeColorComputed.height);
console.log(btnChangeColorComputed.getPropertyValue('width'));
const btnChangeColorStyle = {
    background: btnChangeColorComputed.backgroundColor,
    fontColor: btnChangeColorComputed.color,
    border: btnChangeColorComputed.borderColor,
}

btnChangeColor.addEventListener('click', () => {
    event.target.style.color = "red";
}) 

out.innerHTML = '<h4>I am a header</h4><div>And I am a <em>very</em> important<br>text</div>'
text.innerText = out.innerText;
html.innerText = out.innerHTML;
content.innerText = out.textContent;