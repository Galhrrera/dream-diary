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

function hideSplahs(){
    splash.classList.add("hidden");
    start.classList.remove("hidden");
    header.classList.remove("hidden");
}

//CORREGIR MÉTODO
headerLink.addEventListener("click", () => {
    hideAllSections();
    startSection.classList.remove("hidden");
});

//Start to List section
document.addEventListener('DOMContentLoaded', function () {
    
    startToDreamListBtn.addEventListener('click', function () {
        start.classList.toggle("hidden");
        dreamList.classList.toggle("hidden");
    });
});

