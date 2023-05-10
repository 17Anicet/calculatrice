const touches = [...document.querySelector('.boutton')];
const listkeycode = touches.map( touch=> touch.dataset.key);
const screen = document.querySelector('.screen');

addEventListener('keydown', (e) => {
    const values = e.keyCode.toString();
    calcul(values)
})

addEventListener('click', (e) =>{
    const values = e.target.dataset.key;
    calcul(values)
})

const calcul = (values) =>{
    if(listkeycode.includes(values)){
        switch (values){
            case '8':
                screen.textContent = "";
                break;
            case '13' :
                const calculs = eval(screen.textContent);
                screen.textContent = calculs;
                break;
            default:
                const indexKeyCode = listkeycode.indexOf(values);       
        }
    }
}