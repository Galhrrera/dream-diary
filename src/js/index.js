// Referencias de las secciones
const splash = document.getElementById("title-section");
const start = document.getElementById("start-section");
const recordDream = document.getElementById("record-dream-section");
const savedDream = document.getElementById("saved-dream-section");
const dreamDetails = document.getElementById("dream-details-section");
const dreamList = document.getElementById("dream-list-section");
const header = document.getElementById("header");
const headerLink = document.getElementById("headerLink");


window.onload = function () {
    hideAllSections();
    setTimeout(() => {
        hideSplahs();
    }, 3000);
}

function hideAllSections() {
    start.classList.toggle("hidden");
    recordDream.classList.toggle("hidden");
    savedDream.classList.toggle("hidden");
    dreamDetails.classList.toggle("hidden");
    dreamList.classList.toggle("hidden");
    header.classList.toggle("hidden");
}

function hideSplahs(){
    splash.classList.toggle("hidden");
    start.classList.toggle("hidden");
    header.classList.toggle("hidden");
}

headerLink.addEventListener("click", () => {
    hideAllSections();
    startSection.classList.remove("hidden");
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Selecciona las secciones
//     const splashSection = document.getElementById("title-section");
//     const startSection = document.getElementById("start-section");
//     const header = document.getElementById("header");

//     // Espera 3 segundos y luego oculta la sección de título y muestra la nueva sección
//     setTimeout(() => {
//         // splashSection.classList.add("hidden");
//         // startSection.classList.remove("hidden");
//         // header.classList.remove("hidden");
//         splashSection.classList.toggle("hidden");

//     }, 3000);
// });

// // Obtener referencias a todas las secciones
// const titleSection = document.getElementById("title-section");
// const startSection = document.getElementById("start-section");
// const recordDreamSection = document.getElementById("record-dream-section");
// const savedDreamSection = document.getElementById("saved-dream-section");
// const dreamDetailsSection = document.getElementById("dream-details-section");
// const dreamListSection = document.getElementById("dream-list-section");
// const header = document.getElementById("header");

// // Botón del header para volver al inicio
// const headerLink = document.getElementById("headerLink");
// headerLink.addEventListener("click", () => {
//     hideAllSections();
//     startSection.classList.remove("hidden");
// });

// // Función para ocultar todas las secciones
// function hideAllSections() {
//     titleSection.classList.add("hidden");
//     startSection.classList.add("hidden");
//     recordDreamSection.classList.add("hidden");
//     savedDreamSection.classList.add("hidden");
//     dreamDetailsSection.classList.add("hidden");
//     dreamListSection.classList.add("hidden");
// }

// // Mostrar la sección de inicio después de 3 segundos
// setTimeout(() => {
//     titleSection.classList.add("hidden");
//     startSection.classList.remove("hidden");
// }, 3000);

// // Mostrar sección de registro de sueños al hacer clic en el botón
// document.getElementById("recordDreamBtn").addEventListener("click", () => {
//     hideAllSections();
//     recordDreamSection.classList.remove("hidden");
// });

// // Implementa el resto de la funcionalidad similar a los botones anteriores...

// // Asegúrate de implementar la lógica de guardar y leer datos del local storage

// // Implementa la funcionalidad de los botones de aceptar, ver sueño, lista de sueños, etc.

// // Asegúrate de tener un script que maneje las interacciones y el almacenamiento de datos
