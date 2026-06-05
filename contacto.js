/* =========================================================
   FORMULARIO WHATSAPP
========================================================= */

const form =
document.getElementById('whatsappForm');

if(form){

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const nombre =
    document.getElementById('nombre').value;

    const correo =
    document.getElementById('correo').value;

    const telefono =
    document.getElementById('telefono').value;

    const mensaje =
    document.getElementById('mensaje').value;

    const texto =

`Hola EasyCredit.

Nombre: ${nombre}

Correo: ${correo}

Teléfono: ${telefono}

Mensaje:
${mensaje}`;

    const numero =
    '573245231142';

    const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(
        url,
        '_blank'
    );

});

}