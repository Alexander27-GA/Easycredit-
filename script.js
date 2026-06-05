/* =========================================================
   EASYCREDIT - SCRIPT PRINCIPAL
   Slider Hero + Contador Stats + Menu Mobile
========================================================= */



/* =========================================================
   HERO SLIDER
========================================================= */

/* ELEMENTOS */

const hero =
document.querySelector('.hero');

const title =
document.querySelector('.hero h1');

const text =
document.querySelector('.hero p');

const button =
document.querySelector('.hero button');

const nextBtn =
document.querySelector('.next');

const prevBtn =
document.querySelector('.prev');

const backgrounds =
document.querySelectorAll('.slide-bg');

const dots =
document.querySelectorAll('.dot');


/* =========================================================
   INFORMACION DE SLIDES
========================================================= */

const slides = [

{
    image:'./img/slide1.jpg',

    title:'Soluciones Financieras para tu Empresa',

    text:'Afianzamiento institucional, cobranza jurídica y asesoría contable con respaldo profesional.',

    button:'Solicitar asesoría',

    link:'./html/contacto.html'
},

{
    image:'./img/slide2.jpg',

    title:'Recuperación de Cartera Efectiva',

    text:'Gestionamos procesos de cobranza jurídica y administrativa con altos índices de recuperación.',

    button:'Conocer servicios',

    link:'./html/servicios.html'
},

{
    image:'./img/slide3.jpg',

    title:'Asesoría Contable y Financiera',

    text:'Impulsamos empresas con estrategias contables modernas y eficientes.',

    button:'Contáctanos',

    link:'./html/contacto.html'
}

];


/* =========================================================
   VARIABLES
========================================================= */


let current = 0;

let activeBg = 0;



/* =========================================================
   VALIDAR SI EXISTE HERO
========================================================= */

if(
    hero &&
    title &&
    text &&
    button &&
    nextBtn &&
    prevBtn &&
    backgrounds.length > 0
){

    /* =====================================================
       BOTON DEL SLIDE
    ===================================================== */

    button.addEventListener('click', () => {

        const link = slides[current].link;

        if(link.includes('http')){

            window.open(link, '_blank');

        }else{

            window.location.href = link;
        }
    });



    /* =====================================================
       MOSTRAR SLIDE
    ===================================================== */

    function showSlide(index){

        /* CAMBIAR FONDO */

        activeBg = activeBg === 0 ? 1 : 0;

        backgrounds[activeBg].style.backgroundImage =
        `url('${slides[index].image}')`;



        /* REMOVER ACTIVE */

        backgrounds.forEach(bg => {

            bg.classList.remove('active');

        });



        /* ACTIVAR */

        backgrounds[activeBg]
        .classList.add('active');


        /* DOTS */

dots.forEach(dot => {

    dot.classList.remove('active');

});

dots[index].classList.add('active');



        /* ANIMACION TEXTO */

        title.style.opacity = 0;

        text.style.opacity = 0;

        button.style.opacity = 0;



        setTimeout(() => {

            title.innerHTML =
            slides[index].title;

            text.innerHTML =
            slides[index].text;

            button.innerHTML =
            slides[index].button;

            title.style.opacity = 1;

            text.style.opacity = 1;

            button.style.opacity = 1;

        },400);
    }



    /* =====================================================
       SIGUIENTE
    ===================================================== */

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;
        }

        showSlide(current);
    }



    /* =====================================================
       ANTERIOR
    ===================================================== */

    function prevSlide(){

        current--;

        if(current < 0){

            current = slides.length - 1;
        }

        showSlide(current);
    }



    /* =====================================================
       EVENTOS BOTONES
    ===================================================== */

    nextBtn.addEventListener(
        'click',
        nextSlide
    );

    prevBtn.addEventListener(
        'click',
        prevSlide
    );



    /* =====================================================
       INICIAR SLIDER
    ===================================================== */

    showSlide(current);



    /* =====================================================
       AUTO PLAY
    ===================================================== */

    setInterval(nextSlide,9000);



    /* =====================================================
       SLIDER TOUCH MOBILE
    ===================================================== */

    let startX = 0;

    let endX = 0;



    /* TOCAR */

    hero.addEventListener('touchstart', (e) => {

        startX = e.touches[0].clientX;

    });



    /* SOLTAR */

    hero.addEventListener('touchend', (e) => {

        endX = e.changedTouches[0].clientX;

        handleSwipe();

    });



    /* DETECTAR DIRECCION */

    function handleSwipe() {

        const diff = startX - endX;



        /* IZQUIERDA */

        if(diff > 50){

            nextSlide();
        }



        /* DERECHA */

        if(diff < -50){

            prevSlide();
        }
    }

}



/* =========================================================
   CONTADOR STATS PREMIUM
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    const counters =
    document.querySelectorAll('.counter');

    const statsSection =
    document.querySelector('.stats-section');



    /* VALIDAR */

    if(!statsSection || counters.length === 0){

        return;
    }



    let started = false;



    /* =====================================================
       FUNCION CONTADOR
    ===================================================== */

    function startCounters(){

        counters.forEach(counter => {

            const target =
            +counter.getAttribute('data-target');

            let current = 0;

            const increment =
            target / 220;



            function updateCounter(){

                current += increment;



                if(current < target){

                    counter.innerText =
                    '+' +
                    Math.floor(current)
                    .toLocaleString();

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                    '+' +
                    target.toLocaleString();
                }
            }



            updateCounter();

        });
    }



    /* =====================================================
       OBSERVER
    ===================================================== */

    const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(
                entry.isIntersecting &&
                !started
            ){

                startCounters();

                started = true;
            }

        });

    },{

        threshold:0.45
    });



    observer.observe(statsSection);

});



/* =========================================================
   MENU MOBILE
========================================================= */

const toggle =
document.querySelector(".menu-toggle");

const menu =
document.querySelector(".menu");

/* ABRIR / CERRAR MENU */

if(toggle && menu){

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

/* =========================================================
   DROPDOWN MOBILE
========================================================= */

const dropdowns =
document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const button =
    dropdown.querySelector("a");

    button.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});

/* =========================================================
   CERRAR MENU SOLO EN LINKS FINALES
========================================================= */

const submenuLinks =
document.querySelectorAll(".submenu a");

submenuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

/* LINKS NORMALES */

const normalLinks =
document.querySelectorAll(".menu > a");

normalLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


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