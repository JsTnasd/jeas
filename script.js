// Archivo: script.js
const verses = [
    "Cruzaré los montes, los ríos, los valles",
    "Por irte a encontrar",
    "Salvaría tormentas, ciclones, dragones",
    "Sin exagerar",
    "Por poder mirarme en tus ojos bonitos",
    "Y vivir la gloria de estar a tu lado",
    "Porque en mí ya siento que te necesito",
    "Que me he enamorado",
    "Por poder mirarme en tus ojos bonitos",
    "Y vivir la gloria de estar a tu lado",
    "Porque en mí ya siento que te necesito",
    "Eso y más haré",
    "Por asegurar la sonrisa de tu alma",
    "Buscando equidad",
    "Yo podría empeñar lo más caro que tengo",
    "Que es mi libertad",
    "Y sería un honor, ay, amor, ser tu esclavo",
    "Sería tu juguete por mi voluntad",
    "Y si un día glorioso en tus brazos acabo",
    "¡Qué felicidad!",
    "Sí, sería un honor, ay, amor, ser tu esclavo",
    "Sería tu juguete por mi voluntad",
    "Y si un día glorioso en tus brazos acabo",
    "¡Qué felicidad!"
];


const container = document.getElementById('verse-container');

let index = 0;

function showVerse() {
    container.textContent = verses[index];
    index = (index + 1) % verses.length; // Repetir en bucle
}

setInterval(showVerse, 3000); // Cambia cada 3 segundos

// Función para mostrar la carta
function showCard() {
    // Muestra la carta
    document.getElementById("card").style.display = "block";  

    // Activa el desenfoque del fondo
    document.body.classList.add("blurred");

    // Activa el desenfoque del cuadro de título
    document.querySelector(".title-box").classList.add("blurred");
}

// Función para cerrar la carta
function closeCard() {
    // Oculta la carta
    document.getElementById("card").style.display = "none";  

    // Desactiva el desenfoque del fondo
    document.body.classList.remove("blurred");

    // Desactiva el desenfoque del cuadro de título
    document.querySelector(".title-box").classList.remove("blurred");
}

let currentPart = 0;

// Agregar más partes del texto al array
const textParts = [
    `Julia Edith Acosta Santos, tan solo tú fuiste esa estrella
    que mis ojos vieron brillar cuando en mi vida todo era oscuridad,
    no hay nada o nadie quien pueda opacarte, solo tú y a cada instante
    te llevo en mi corazón. Eres algo especial, una sensación indescriptible.
    Todas las noches naufrago en tus sueños y mi mente se aleja de la razón.`,

    `Cómo te puedo explicar, que eres la llama que alumbra mi hogar, nunca he
    visto nada como tú. Con solo escuchar tu voz, me das calma, la fuerza,
    el amor, no he sentido nada como tú.`,

    `Hay tanto de ti que se ha quedado a vivir para siempre en mi piel.
    En ella está tatuada tu olor con tinta de besos que hoy me perfuman.
    Nunca imaginé cómo sería el sabor de una rosa en mi boca hasta el día
    que te besé, y no me puedo arrancar tus espinas hechas de adiós, de tu
    boca bebí.`,

    `¿Dónde estás? Pues me muero de sed y nunca olvidaré que me enamoré
    de una flor. Siempre te esperaré, no me digas adiós. Echo de menos estar al lado
    de ti. Quiero desayunar tu sonrisa, mi amor, pero no estás y busco tu beso en mi
    piel.`,
    
    `No me digas adiós,\n
    No me pidas perdón,\n
    Nadie es dueño de tu corazón,\n
    Pero nunca te olvides de mí.\n

    Lloraré recuerdos de ti, pues siempre te buscaré en mi piel, mi negrita bella.`
];

// Función para mostrar la siguiente parte del texto
function showNextText() {
    if (currentPart < textParts.length - 1) {
        currentPart++;
        document.getElementById("text-part").innerHTML = textParts[currentPart];
    }
    updateButtons();
}

// Función para mostrar la parte anterior del texto
function showPrevText() {
    if (currentPart > 0) {
        currentPart--;
        document.getElementById("text-part").innerHTML = textParts[currentPart];
    }
    updateButtons();
}

// Función para actualizar los botones (deshabilitar o habilitar según sea necesario)
function updateButtons() {
    document.getElementById("prev-button").disabled = currentPart === 0;
    document.getElementById("next-button").disabled = currentPart === textParts.length - 1;
}

// Inicializamos los botones
updateButtons();
