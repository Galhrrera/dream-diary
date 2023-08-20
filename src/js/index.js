// console.log("hola mundo desde parcel)");
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const dreamForm = document.getElementById("dreamForm");
    const dreamList = document.getElementById("dreamList");

    // Mostrar sección inicial después de 3 segundos
    setTimeout(() => {
        sections[0].classList.add("hidden");
        sections[1].classList.remove("hidden");
    }, 3000);

    // Mostrar sección por su ID y ocultar las demás
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    }

    // Evento para mostrar la sección de Registro de Sueño
    document.getElementById("recordDreamBtn").addEventListener("click", function () {
        showSection("record-dream-section");
    });

    // Evento para volver a la sección de Inicio
    document.querySelectorAll("#backToStartBtn, #backToStartBtn2, #backToStartBtn3").forEach(button => {
        button.addEventListener("click", function () {
            showSection("start-section");
        });
    });

    // Evento para guardar el sueño y mostrar la sección de Sueño Guardado
    dreamForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const dreamDate = document.getElementById("dreamDate").value;
        const dreamTitle = document.getElementById("dreamTitle").value;
        const dreamDescription = document.getElementById("dreamDescription").value;

        const dream = { date: dreamDate, title: dreamTitle, description: dreamDescription };
        localStorage.setItem("lastDream", JSON.stringify(dream));

        showSection("saved-dream-section");
    });

    // Evento para mostrar los detalles del sueño
    document.getElementById("viewDreamBtn").addEventListener("click", function () {
        const lastDream = JSON.parse(localStorage.getItem("lastDream"));
        document.getElementById("detailDate").textContent = lastDream.date;
        document.getElementById("detailTitle").textContent = lastDream.title;
        document.getElementById("detailDescription").textContent = lastDream.description;

        showSection("dream-details-section");
    });

    // Evento para mostrar la lista de sueños
    document.getElementById("dreamListBtn, #dreamListBtn2").addEventListener("click", function () {
        populateDreamList();
        showSection("dream-list-section");
    });

    // Rellenar la lista de sueños
    function populateDreamList() {
        dreamList.innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            const dreamKey = localStorage.key(i);
            if (dreamKey.startsWith("dream")) {
                const dream = JSON.parse(localStorage.getItem(dreamKey));
                const listItem = document.createElement("li");
                listItem.textContent = `${dream.date} - ${dream.title}`;
                dreamList.appendChild(listItem);
            }
        }
    }

    // Evento para mostrar la sección de Detalles de Sueño
    dreamList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const dreamKey = event.target.textContent.split(" - ")[1];
            const dream = JSON.parse(localStorage.getItem(dreamKey));
            document.getElementById("detailDate").textContent = dream.date;
            document.getElementById("detailTitle").textContent = dream.title;
            document.getElementById("detailDescription").textContent = dream.description;

            showSection("dream-details-section");
        }
    });
});