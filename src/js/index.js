// Referencias de las secciones
const splash = document.getElementById("title-section");
const start = document.getElementById("start-section");
const recordDream = document.getElementById("record-dream-section");
const savedDream = document.getElementById("saved-dream-section");
const dreamDetails = document.getElementById("dream-details-section");
const dreamList = document.getElementById("dream-list-section");

//Referencias header
const header = document.getElementById("header");
const headerLink = document.getElementById("headerLink");

//Referencias botones
const startToDreamListBtn = document.getElementById("dreamListBtn");
const startToRecordDreamBtn = document.getElementById("recordDreamBtn");
const dreamListToStartBtn = document.getElementById("backToStartBtn3");
const recordToStartBtn = document.getElementById("backToStartBtn");
const saveDreamBtn = document.getElementById("saveDreamBtn");

//Referencia al formulario para guardar sueño
const dreamForm = document.getElementById("dreamForm");


window.onload = function () {
    hideAllSections();
    setTimeout(() => {
        hideSplahs();
    }, 3000);
}

function hideAllSections() {
    start.classList.add("hidden");
    recordDream.classList.add("hidden");
    savedDream.classList.add("hidden");
    dreamDetails.classList.add("hidden");
    dreamList.classList.add("hidden");
    header.classList.add("hidden");
}

function hideSplahs() {
    splash.classList.add("hidden");
    start.classList.remove("hidden");
    header.classList.remove("hidden");
}

//CORREGIR MÉTODO
headerLink.addEventListener("click", () => {
    hideAllSections();
    header.classList.remove("hidden");
    start.classList.remove("hidden");
});

//Start to List section
document.addEventListener('DOMContentLoaded', function () {
    startToDreamListBtn.addEventListener('click', function () {
        start.classList.add("hidden");
        dreamList.classList.remove("hidden");
    });
});

//List to Start
document.addEventListener('DOMContentLoaded', function () {
    dreamListToStartBtn.addEventListener('click', function () {
        dreamList.classList.add("hidden");
        start.classList.remove("hidden");
    });
});

//Start to Record dream
document.addEventListener('DOMContentLoaded', function () {
    startToRecordDreamBtn.addEventListener('click', function () {
        start.classList.add("hidden");
        recordDream.classList.remove("hidden");
    });
});

//Record to start
document.addEventListener('DOMContentLoaded', function () {
    recordToStartBtn.addEventListener('click', function () {
        recordDream.classList.add("hidden");
        start.classList.remove("hidden");
    });
});


//Guardar sueño en localstorage
document.addEventListener("DOMContentLoaded", function () {
    // Agregar un manejador de eventos para el envío del formulario
    dreamForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        // Obtén los valores de los campos del formulario
        const dreamDate = document.getElementById("dreamDate").value;
        const dreamTitle = document.getElementById("dreamTitle").value;
        const dreamDescription = document.getElementById("dreamDescription").value;
        // Crea un objeto para representar el sueño
        const dream = {
            date: dreamDate,
            title: dreamTitle,
            description: dreamDescription
        };
        // Obtén los sueños existentes o crea un nuevo array vacío
        const existingDreams = JSON.parse(localStorage.getItem("dreams")) || [];
        // Agrega el sueño al array de sueños
        existingDreams.push(dream);
        // Almacena el array actualizado en el LocalStorage
        localStorage.setItem("dreams", JSON.stringify(existingDreams));
        // Limpia los campos del formulario después de guardar
        dreamForm.reset();

        recordDream.classList.add("hidden");
        savedDream.classList.remove("hidden");
    });
});
