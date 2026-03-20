
const k = document.getElementById('key-output')
document.addEventListener('keydown', function(event){
    const keyName = event.key;
    const keyCode = keyName.length === 1 ? keyName.charCodeAt(0) : event.keyCode;
    k.textContent = `Tecla: ${keyName} | Código ASCII: ${keyCode}`;
});
const colorBox = document.getElementById('color-box');
const colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    colorBox.style.backgroundColor = randomColor;
});
const mouseClientDisplay = document.getElementById('mouse-client');
const mousePageDisplay = document.getElementById('mouse-page');

document.addEventListener('mousemove', function(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    const pageX = event.pageX;
    const pageY = event.pageY;

    mouseClientDisplay.textContent = `Navegador X: ${clientX}, Y: ${clientY}`;
    mousePageDisplay.textContent = `Página  X: ${pageX}, Y: ${pageY}`;
});