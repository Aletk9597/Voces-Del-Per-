function hablar(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "es-PE"; // español Perú (puedes cambiar a quechua si tienes voces)
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", () => {

    const botonesAudio = document.querySelectorAll(".btnAudio");

    botonesAudio.forEach(btn => {
        btn.addEventListener("click", () => {

            const palabra = btn.parentElement.querySelector("h3").innerText;

            hablar(palabra);

            // efecto visual
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);

        });
    });

});

/* =========================
   SELECCIÓN DE LENGUAS
========================= */

const lenguas = document.querySelectorAll(".lengua, .lenguaActiva");

lenguas.forEach(lengua => {
    lengua.addEventListener("click", () => {

        // quitar activa de todas
        lenguas.forEach(l => l.classList.remove("lenguaActiva"));
        lenguas.forEach(l => l.classList.add("lengua"));

        // activar seleccionada
        lengua.classList.remove("lengua");
        lengua.classList.add("lenguaActiva");

        // mensaje visual
        const nombre = lengua.querySelector("h4").innerText;

        mostrarToast("Lengua seleccionada: " + nombre);
    });
});

/* =========================
   TOAST (MENSAJE FLOTANTE)
========================= */

function mostrarToast(mensaje) {

    let toast = document.createElement("div");

    toast.innerText = mensaje;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "#C62828";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "30px";
    toast.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    toast.style.zIndex = "9999";
    toast.style.animation = "fadeInOut 3s forwards";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

/* =========================
   ANIMACIÓN CSS INYECTADA
========================= */

const style = document.createElement("style");

style.innerHTML = `
@keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(20px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateY(20px); }
}
`;

document.head.appendChild(style);