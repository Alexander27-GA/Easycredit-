/* =========================================================
   FORMULARIO CONTACTO -> WHATSAPP
========================================================= */

const form = document.getElementById('whatsappForm');

if (form) {

    const tipoPersona = document.getElementById('tipoPersona');
    const nombreInput = document.getElementById('nombre');
    const labelNombre = document.getElementById('labelNombre');

    /* Cambia etiqueta y placeholder según el tipo de persona */

    if (tipoPersona && nombreInput && labelNombre) {

        tipoPersona.addEventListener('change', () => {

            if (tipoPersona.value === 'juridica') {

                labelNombre.textContent = 'NIT';
                nombreInput.placeholder = 'Ingrese el NIT';

            } else {

                labelNombre.textContent = 'Nombre completo';
                nombreInput.placeholder = 'Ingrese su nombre completo';

            }

        });

    }

    /* Envío: abre WhatsApp con el mensaje armado */

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const valor = (id) => document.getElementById(id).value.trim();

        const etiquetaNombre = tipoPersona.value === 'juridica'
            ? 'NIT'
            : 'Nombre';

        const texto =
`Hola EasyCredit.

Tipo de Persona: ${tipoPersona.value}

${etiquetaNombre}: ${valor('nombre')}

Correo: ${valor('correo')}

Teléfono: ${valor('telefono')}

Mensaje:
${valor('mensaje')}`;

        const numero = '573245231142';

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank', 'noopener');

    });

}
