const palabras = [
    { quechua: "Rimaykullayki", espanol: "Hola" },
    { quechua: "Sulpayki", espanol: "Gracias" },
    { quechua: "Allin P'unchay", espanol: "Buenos días" },
    { quechua: "Huk", espanol: "Uno" },
    { quechua: "Iskay", espanol: "Dos" },
    { quechua: "Puka", espanol: "Rojo" },
    { quechua: "Q'omer", espanol: "Verde" }
];

function iniciarMemoria() {

    const zona = document.getElementById("zonaJuego");
    zona.innerHTML = "";

    let seleccion = palabras.sort(() => 0.5 - Math.random()).slice(0, 4);

    let puntos = 0;

    seleccion.forEach(p => {

        let div = document.createElement("div");
        div.className = "card p-3 m-2";

        div.innerHTML = `
            <h4>${p.quechua}</h4>
            <button class="btn btnOpcion mt-2"
                onclick="verificar('${p.espanol}')">
                Responder
            </button>
        `;

        zona.appendChild(div);
    });

    window.verificar = function (correcta) {

        let respuesta = prompt("Traduce la palabra:");

        if (respuesta && respuesta.toLowerCase() === correcta.toLowerCase()) {
            alert("✅ Correcto");
            puntos++;
        } else {
            alert("❌ Incorrecto. Era: " + correcta);
        }

        if (puntos >= 3) {
            alert("🏆 ¡GANASTE EL JUEGO!");
        }
    };
}


// =========================
// TRIVIA
// =========================
function iniciarTrivia() {

    let preguntas = [
        {
            pregunta: "¿Qué significa Sulpayki?",
            correcta: "Gracias"
        },
        {
            pregunta: "¿Cuál es la lengua más hablada del Perú?",
            correcta: "Quechua"
        },
        {
            pregunta: "¿Dónde se habla Aimara?",
            correcta: "Puno"
        }
    ];

    let i = 0;
    let score = 0;

    function mostrar() {

        if (i >= preguntas.length) {

            if (score >= 2) {
                alert("🏆 GANASTE LA TRIVIA");
            } else {
                alert("❌ PERDISTE LA TRIVIA");
            }

            return;
        }

        let r = prompt(preguntas[i].pregunta);

        if (r && r.toLowerCase() === preguntas[i].correcta.toLowerCase()) {
            alert("✔ Correcto");
            score++;
        } else {
            alert("✖ Incorrecto");
        }

        i++;
        mostrar();
    }

    mostrar();
}

function iniciarCompletar() {

    let lista = [
        { incompleta: "R_m_yk_ll_yk_", correcta: "Rimaykullayki" },
        { incompleta: "S_lpayki", correcta: "Sulpayki" },
        { incompleta: "H_k", correcta: "Huk" }
    ];

    let item = lista[Math.floor(Math.random() * lista.length)];

    let respuesta = prompt("Completa la palabra: " + item.incompleta);

    if (respuesta && respuesta.toLowerCase() === item.correcta.toLowerCase()) {
        alert("🎉 ¡GANASTE!");
    } else {
        alert("❌ PERDISTE. Era: " + item.correcta);
    }
}