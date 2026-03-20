const input = document.getElementById('nameInput');
const typingText = document.getElementById('typingText');
const keyStatus = document.getElementById('keyStatus');
const btn = document.getElementById('actionBtn');
const btnMessage = document.getElementById('btnMessage');
const colorBox = document.getElementById('colorBox');
const eventLog = document.getElementById('eventLog');

function registrarEvento(mensaje) {
    const li = document.createElement('li');
    const hora = new Date().toLocaleTimeString();
    li.textContent = `[${hora}] ${mensaje}`;

    eventLog.prepend(li);
}

// Recibe el foco
input.addEventListener('focus', () => {
    input.classList.add('focused');
    registrarEvento('El input ha recibido el foco');
});

// Pierde el foco
input.addEventListener('blur', () => {
    input.classList.remove('focused');
    registrarEvento('El input ha perdido el foco');
});

// Mientras el usuario escribe
input.addEventListener('input', (e) => {
    typingText.textContent = `Estás escribiendo: ${e.target.value}`;
});

// Pulsar una tecla
input.addEventListener('keydown', (e) => {
    keyStatus.textContent = `Tecla pulsada: ${e.key}`;
    registrarEvento(`Se ha pulsado la tecla: ${e.key}`);
});

// Soltar una tecla
input.addEventListener('keyup', (e) => {
    keyStatus.textContent = `Tecla soltada: ${e.key}`;
    registrarEvento(`Se ha soltado la tecla: ${e.key}`);
});

// Un clic
btn.addEventListener('click', () => {
    btnMessage.textContent = 'Has hecho un clic';
    registrarEvento('Has hecho clic en el botón');
});

// Doble clic
btn.addEventListener('dblclick', () => {
    btnMessage.textContent = 'Has hecho doble clic';
    registrarEvento('Has hecho doble clic en el botón');
});

// El ratón entra en el div
colorBox.addEventListener('mouseenter', () => {
    colorBox.classList.add('hovered');
    registrarEvento('El ratón ha entrado en la zona de color');
});

// El ratón sale del div
colorBox.addEventListener('mouseleave', () => {
    colorBox.classList.remove('hovered');
    registrarEvento('El ratón ha salido de la zona de color');
});