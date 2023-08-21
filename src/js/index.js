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
document.addEventListener('DOMContentLoaded', function(){
    recordToStartBtn.addEventListener('click', function() {
        recordDream.classList.add("hidden");
        start.classList.remove("hidden");
    });
});
