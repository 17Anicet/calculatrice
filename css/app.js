const touches = [...document.querySelector('.boutton')];
const listkeycode = touches.map( touch=> touch.dataset.key);

addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
})

addEventListener('click', (e) =>{
    const value = e.target.dataset.key;
})
