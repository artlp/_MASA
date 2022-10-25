const ratioW = document.querySelector('#ratio-width');
const ratioH = document.querySelector('#ratio-height');
const pixelW = document.querySelector('#width');
const pixelH = document.querySelector('#height');
let aspectW;
let aspectH;
let resW;
let resH;


ratioW.addEventListener(`change`, () => {
    aspectW = +ratioW.value;
    aspectH = +ratioH.value;
    resH = +pixelH.value;
    resW = resH / aspectH * aspectW;
    pixelW.value = resW.toFixed(2);
});
ratioH.addEventListener(`change`, () => {
    aspectW = +ratioW.value;
    aspectH = +ratioH.value;
    resW = +pixelW.value;
    resH = +pixelH.value;
    resH = (resW / aspectW) * aspectH;
    pixelH.value = resH.toFixed(2);
});
pixelW.addEventListener(`change`, () => {
    aspectW = +ratioW.value;
    aspectH = +ratioH.value;
    resW = +pixelW.value;
    resH = +pixelH.value;
    resH = (resW / aspectW) * aspectH;
    pixelH.value = resH.toFixed(2);
});
pixelH.addEventListener(`change`, () => {
    aspectW = +ratioW.value;
    aspectH = +ratioH.value;
    resW = +pixelW.value;
    resH = +pixelH.value;
    resW = resH / aspectH * aspectW;
    pixelW.value = resW.toFixed(2);
});