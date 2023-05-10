const touches = [...document.querySelector('.boutton')];
const listkeycode = touches.map( touch=> touch.dataset.key);
const screen = document.querySelector('.screen');

addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
})

addEventListener('click', (e) =>{
    const value = e.target.dataset.key;
})

const calcul = (values) =>{
    if(listkeycode.includes(values))
}