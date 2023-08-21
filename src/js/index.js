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

