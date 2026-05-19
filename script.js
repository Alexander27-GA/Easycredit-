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



/* =========================================================
   INFORMACION DE SLIDES
========================================================= */

const slides = [

{
    image:'/img/slide1.jpg',

    title:'Soluciones Financieras para tu Empresa',

    text:'Afianzamiento institucional, cobranza jurídica y asesoría contable con respaldo profesional.',

    button:'Solicitar asesoría',

    link:'./html/contacto.html'
},

{
    image:'/img/slide2.jpg',

    title:'Recuperación de Cartera Efectiva',

    text:'Gestionamos procesos de cobranza jurídica y administrativa con altos índices de recuperación.',

    button:'Conocer servicios',

    link:'./html/servicios.html'
},

{
    image:'/img/slide3.jpg',

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

    setInterval(nextSlide,7000);



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



/* VALIDAR */

if(toggle && menu){

    /* ABRIR MENU */

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });



    /* CERRAR MENU */

    const links =
    document.querySelectorAll(".menu a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}



/* =========================================================
   FORMULARIO WHATSAPP
========================================================= */

const form =
document.getElementById('whatsappForm');

if(form){

    form.addEventListener('submit', function(e){

        e.preventDefault();

        /* DATOS */

        const nombre =
        document.getElementById('nombre').value;

        const correo =
        document.getElementById('correo').value;

        const telefono =
        document.getElementById('telefono').value;

        const mensaje =
        document.getElementById('mensaje').value;

        /* NUMERO */

        const numero =
        '573245231142';

        /* MENSAJE */

        const texto =
`Hola EasyCredit 👋

Mi nombre es: ${nombre}

📧 Correo: ${correo}

📱 Teléfono: ${telefono}

📝 Mensaje:
${mensaje}`;

        /* URL WHATSAPP */

        const url =
`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        /* ABRIR */

        window.open(url, '_blank');

    })

}

