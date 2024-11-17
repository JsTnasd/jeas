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
let verseInterval;  // Variable para almacenar el setInterval

// Función para mostrar el verso
function showVerse() {
    container.textContent = verses[index];
    index = (index + 1) % verses.length; // Repetir en bucle
}

// Inicia el ciclo de los versos
function startVerseCycle() {
    verseInterval = setInterval(showVerse, 3000); // Cambia cada 3 segundos
}

// Detiene el ciclo de los versos
function stopVerseCycle() {
    clearInterval(verseInterval); // Detiene el ciclo de versos
}

// Función para mostrar la carta
function showCard() {
    document.getElementById("card").style.display = "block";  
    document.body.classList.add("blurred");

    // Detiene el ciclo de los versos cuando se abre la carta
    stopVerseCycle();

    // Configurar los botones al abrir la carta
    updateButtons();
}

// Función para cerrar la carta
function closeCard() {
    document.getElementById("card").style.display = "none";  
    document.body.classList.remove("blurred");

    // Reinicia el ciclo de versos cuando se cierra la carta
    startVerseCycle();
}

// Función para mostrar el siguiente texto
let currentPart = 0;
const textParts = [
    `Esta carta es para ti, la niña que marco una huella intachable en mi.`,
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

// Función para mostrar el siguiente texto

document.getElementById("next-button").addEventListener("click", showNextText);

function showNextText() {
    if (currentPart < textParts.length - 1) {
        currentPart++;
        document.getElementById("text-part").innerHTML = textParts[currentPart];
    }
    updateButtons();
}

// Función para mostrar el texto anterior
function showPrevText() {
    if (currentPart > 0) {
        currentPart--;
        document.getElementById("text-part").innerHTML = textParts[currentPart];
    }
    updateButtons();
}

// Función para actualizar los botones
function updateButtons() {
    document.getElementById("prev-button").disabled = currentPart === 0;
    document.getElementById("next-button").disabled = currentPart === textParts.length - 1;
}

// Mostrar el primer texto al cargar la carta
document.getElementById("text-part").innerHTML = textParts[currentPart];
updateButtons();

// Función para reproducir la música
function playMusic() {
    document.getElementById("romantic-soundtrack").play();
}

// Función para ocultar la pantalla de bienvenida
function hideWelcome() {
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.style.animation = "fade-out 0.8s ease-out";

    // Espera el final de la animación antes de ocultar
    setTimeout(() => {
        welcomeScreen.style.display = "none";

        // Muestra el contenido principal
        document.querySelector(".content-container").style.display = "block";
    }, 800);
}

// Función que se ejecuta cuando se presiona "Siguiente"
function nextPage() {
    // Ocultar la pantalla negra de bienvenida
    const welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.style.display = "none";

    // Mostrar el contenido principal y comenzar con el ciclo de versos
    document.querySelector(".content-container").style.display = "block";
    
    // Iniciar el ciclo de versos
    startVerseCycle();
}

// Iniciar el ciclo de versos sólo cuando se presiona el botón "Siguiente"
document.querySelector(".next-button").addEventListener("click", nextPage);

// Array con las imágenes de perfil
const profilePictures = [
    {
        src: "./fondo/2.jpg"
    },
    {
        src: "./fondo/3.jpg"
    },
    {
        src: "./fondo/4.jpg"
    },
    {
        src: "./fondo/5.jpg"
    },
    {
        src: "./fondo/6.jpg"
    },
    {
        src: "./fondo/7.jpg"
    }

];

let currentIndex = 0;

// Seleccionar el contenedor de la imagen de perfil y el botón
const profilePicture = document.getElementById('profile-picture');
const nextButton = document.getElementById('next-button');

// Función para cambiar la imagen de perfil
function changeProfilePicture() {
    // Cambiar el índice
    currentIndex = (currentIndex + 1) % profilePictures.length;  // Si llega al final, vuelve al inicio

    // Cambiar la imagen de perfil
    profilePicture.src = profilePictures[currentIndex].src;
}

// Añadir evento al botón para cambiar la imagen al hacer clic
nextButton.onclick = changeProfilePicture;
// Otros códigos de JavaScript para manejar los versos, cartas, etc., como ya lo tenías.
