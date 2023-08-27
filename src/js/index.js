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
const savedDreamToStartBtn = document.getElementById("acceptBtn");
const savedDreamToListBtn = document.getElementById("dreamListBtn2");
const dreamDetailsToListBtn = document.getElementById("backToListBtn");

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
        loadDreams();
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

// Saved dream to start
document.addEventListener('DOMContentLoaded', function () {
    savedDreamToStartBtn.addEventListener('click', function () {
        savedDream.classList.add("hidden");
        start.classList.remove("hidden");
    });
});

// Saved dream to list
document.addEventListener('DOMContentLoaded', function () {
    savedDreamToListBtn.addEventListener('click', function () {
        savedDream.classList.add("hidden");
        dreamList.classList.remove("hidden");
        loadDreams();
    });
});


// Dream details to list
document.addEventListener('DOMContentLoaded', function () {
    dreamDetailsToListBtn.addEventListener("click", () => {
        dreamDetails.classList.add("hidden");
        dreamList.classList.remove("hidden");
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

// Función para cargar los sueños desde el Local Storage y mostrarlos en la lista
function loadDreams() {
    const dreamList = document.getElementById("dreamList");
    const dreams = JSON.parse(localStorage.getItem("dreams")) || [];

    // Limpiar la lista antes de agregar los elementos
    dreamList.innerHTML = "";

    // Agregar cada sueño como un elemento de la lista
    dreams.forEach((dream, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("dream-item");
        listItem.innerHTML = `<a href="#" data-index="${index}">${dream.title}</a>`;
        dreamList.appendChild(listItem);
    });

    // Agregar evento click a los elementos de la lista
    const dreamItems = document.querySelectorAll(".dream-item a");
    dreamItems.forEach(item => {
        item.addEventListener("click", showDreamDetails);
    });
}

// Función para mostrar los detalles del sueño seleccionado
function showDreamDetails(event) {
    event.preventDefault();
    const dreamIndex = event.target.getAttribute("data-index");
    const dreams = JSON.parse(localStorage.getItem("dreams")) || [];
    const dream = dreams[dreamIndex];

    // Actualizar la sección de detalles con la información del sueño
    document.getElementById("detailDate").textContent = dream.date;
    document.getElementById("detailTitle").textContent = dream.title;
    document.getElementById("detailDescription").textContent = dream.description;

    // Ocultar la lista de sueños y mostrar la sección de detalles
    // document.getElementById("dream-list-section").style.display = "none";
    dreamList.classList.add("hidden");
    // document.getElementById("dream-details-section").style.display = "block";
    dreamDetails.classList.remove("hidden");

    // Agregar evento click a los botones de regreso
    // document.getElementById("backToListBtn").addEventListener("click", () => {
    //     // document.getElementById("dream-details-section").style.display = "none";
    //     document.getElementById("dream-details-section").classList.add("hidden");
    //     // document.getElementById("dream-list-section").style.display = "block";
    //     document.getElementById("dream-list-section").classList.remove("hidden");
    // });

    document.getElementById("backToStartBtn2").addEventListener("click", () => {
        // document.getElementById("dream-details-section").style.display = "none";
        dreamDetails.classList.add("hidden");
        // document.getElementById("dream-list-section").style.display = "block";
        start.classList.remove("hidden");
    });
}

// Función para cargar la lista de sueños al cargar la página
window.addEventListener("load", () => {
    loadDreams();
});
