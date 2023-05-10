const touches = [...document.querySelectorAll('.boutton')];
const listkeycode = touches.map( touch => touch.dataset.key);
const ecran = document.querySelector('.screen');

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
                ecran.textContent = "";
                break;
            case '13' :
                const calculs = eval(ecran.textContent);
                ecran.textContent = calculs;
                break;
            default:
                const indexKeyCode = listkeycode.indexOf(values); 
                const touch = touches[indexKeyCode];   
                ecran.textContent += touch.innerHTML;
        }
    }
}
window.addEventListener('error', (e) =>{
    alert('You have an erro, please');
})