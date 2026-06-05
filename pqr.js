document.getElementById('pqrForm').addEventListener('submit', function(e){

    const checks =
    document.querySelectorAll('input[name="contacto[]"]:checked');

    if(checks.length === 0){

        e.preventDefault();

        alert('Seleccione al menos un canal de contacto.');

    }

});




const departamentos = {

    "Amazonas": [
        "Leticia",
        "Puerto Nariño"
    ],

    "Antioquia": [
        "Medellín",
        "Bello",
        "Itagüí",
        "Envigado",
        "Rionegro",
        "Apartadó",
        "Turbo"
    ],

    "Arauca": [
        "Arauca",
        "Saravena",
        "Tame"
    ],

    "Atlántico": [
        "Barranquilla",
        "Soledad",
        "Malambo",
        "Sabanalarga"
    ],

    "Bogotá D.C.": [
        "Bogotá"
    ],

    "Bolívar": [
        "Cartagena",
        "Magangué",
        "Turbaco"
    ],

    "Boyacá": [
        "Tunja",
        "Duitama",
        "Sogamoso",
        "Chiquinquirá"
    ],

    "Caldas": [
        "Manizales",
        "La Dorada",
        "Chinchiná"
    ],

    "Caquetá": [
        "Florencia",
        "San Vicente del Caguán"
    ],

    "Casanare": [
        "Yopal",
        "Aguazul",
        "Villanueva"
    ],

    "Cauca": [
        "Popayán",
        "Santander de Quilichao"
    ],

    "Cesar": [
        "Valledupar",
        "Aguachica"
    ],

    "Chocó": [
        "Quibdó",
        "Istmina"
    ],

    "Córdoba": [
        "Montería",
        "Cereté",
        "Lorica"
    ],

    "Cundinamarca": [
        "Soacha",
        "Zipaquirá",
        "Facatativá",
        "Chía",
        "Mosquera",
        "Funza",
        "Madrid"
    ],

    "Guainía": [
        "Inírida"
    ],

    "Guaviare": [
        "San José del Guaviare"
    ],

    "Huila": [
        "Neiva",
        "Pitalito",
        "Garzón"
    ],

    "La Guajira": [
        "Riohacha",
        "Maicao",
        "Uribia"
    ],

    "Magdalena": [
        "Santa Marta",
        "Ciénaga"
    ],

    "Meta": [
        "Villavicencio",
        "Acacías",
        "Granada"
    ],

    "Nariño": [
        "Pasto",
        "Ipiales",
        "Tumaco"
    ],

    "Norte de Santander": [
        "Cúcuta",
        "Ocaña",
        "Pamplona"
    ],

    "Putumayo": [
        "Mocoa",
        "Puerto Asís"
    ],

    "Quindío": [
        "Armenia",
        "Calarcá"
    ],

    "Risaralda": [
        "Pereira",
        "Dosquebradas",
        "Santa Rosa de Cabal"
    ],

    "San Andrés y Providencia": [
        "San Andrés"
    ],

    "Santander": [
        "Bucaramanga",
        "Floridablanca",
        "Girón",
        "Piedecuesta",
        "Barrancabermeja"
    ],

    "Sucre": [
        "Sincelejo",
        "Corozal"
    ],

    "Tolima": [
        "Ibagué",
        "Espinal",
        "Melgar"
    ],

    "Valle del Cauca": [
        "Cali",
        "Palmira",
        "Buenaventura",
        "Tuluá",
        "Buga",
        "Cartago",
        "Jamundí"
    ],

    "Vaupés": [
        "Mitú"
    ],

    "Vichada": [
        "Puerto Carreño"
    ]

};

const departamentoSelect =
document.getElementById("departamento");

const ciudadSelect =
document.getElementById("ciudad");

for(let departamento in departamentos){

    let option =
    document.createElement("option");

    option.value = departamento;
    option.textContent = departamento;

    departamentoSelect.appendChild(option);

}

departamentoSelect.addEventListener("change", function(){

    ciudadSelect.innerHTML =
    '<option value="">Seleccione una ciudad</option>';

    const ciudades =
    departamentos[this.value];

    if(ciudades){

        ciudades.forEach(ciudad => {

            let option =
            document.createElement("option");

            option.value = ciudad;
            option.textContent = ciudad;

            ciudadSelect.appendChild(option);

        });

    }

});


emailjs.init("MuJMk39LxlJ2cyOcN");

document.getElementById("pqrForm").addEventListener("submit", function(e){

    
    e.preventDefault();

    const radicado =
"PQR-" +
new Date().getFullYear() +
"-" +
Math.floor(Math.random() * 100000);

document.getElementById("radicado").value = radicado;

    const btn = document.querySelector(".pqr-btn");

    btn.disabled = true;
    btn.textContent = "Enviando solicitud...";

    emailjs.sendForm(
        "service_ooj1ihe",
        "template_iwg7a8q",
        this
    )

    .then(() => {

        Swal.fire({
    icon: "success",
    title: "Solicitud enviada",
    text: "Hemos recibido su solicitud correctamente.",
    confirmButtonColor: "#1E8E1C"
});

        document.getElementById("pqrForm").reset();

        btn.disabled = false;
        btn.textContent = "Enviar solicitud";

    })

    .catch((error) => {

        console.error(error);

        alert("Ocurrió un error al enviar la solicitud.");

        btn.disabled = false;
        btn.textContent = "Enviar solicitud";

    });

});