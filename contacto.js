/* =========================================================
   FORMULARIO WHATSAPP
========================================================= */

const form =
document.getElementById('whatsappForm');

if(form){

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    labelNombre.textContent = "NIT";

    const tipoPersona = document.getElementById("tipoPersona").value;
    
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

Tipo de Persona: ${tipoPersona}

Nombre / NIT: ${nombre}

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

const tipoPersona = document.getElementById("tipoPersona");
const nombreInput = document.getElementById("nombre");
const labelNombre = document.getElementById("labelNombre");

tipoPersona.addEventListener("change", () => {

    if (tipoPersona.value === "juridica") {

        labelNombre.textContent = "NIT";
        nombreInput.placeholder = "Ingrese el NIT";

    } else {

        labelNombre.textContent = "Nombre completo";
        nombreInput.placeholder = "Ingrese su nombre completo";

    }

});