document.getElementById("btnNuevaVentana").addEventListener("click", function() {

    let opcionesVentana = "width=800,height=600,resizable=no";
    let nuevaVentana = window.open("", "_blank", opcionesVentana);
    let urlCompleta = window.location.href;
    let protocolo = window.location.protocol;
    let codigoNavegador = navigator.appCodeName;
    let plataforma = navigator.platform;
    let javaTexto = navigator.javaEnabled()
        ? "Java SI disponible en esta ventana."
        : "Java NO disponible en esta ventana.";

    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Información de la nueva ventana</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; }
                h1 { color: #0056b3; }
                ul { font-size: 18px; line-height: 1.8; }
            </style>
        </head>
        <body>
            <h1>Información de la nueva ventana</h1>
            <ul>
                <li><strong>URL Completa:</strong> ${urlCompleta}</li>
                <li><strong>Protocolo utilizado:</strong> ${protocolo}</li>
                <li><strong>Nombre en código del navegador:</strong> ${codigoNavegador}</li>
                <li><strong>Plataforma sobre la que se está ejecutando el programa cliente:</strong> ${plataforma}</li>
                <li><strong>${javaTexto}</strong></li>
            </ul>
        </body>
        </html>
    `);
});