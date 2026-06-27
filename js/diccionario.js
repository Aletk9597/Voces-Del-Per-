const palabras = [
    { espanol: "Hola", quechua: "Rimaykullayki", aimara: "Kamisaraki" },
    { espanol: "Gracias", quechua: "Sulpayki", aimara: "Yuspagara" },
    { espanol: "Buenos días", quechua: "Allin p'unchay", aimara: "Aski urukipanaya" },
    { espanol: "Uno", quechua: "Huk", aimara: "Maya" },
    { espanol: "Dos", quechua: "Iskay", aimara: "Paya" },
    { espanol: "Tres", quechua: "Kimsa", aimara: "Kimsa" },
    { espanol: "Rojo", quechua: "Puka", aimara: "Puka" },
    { espanol: "Verde", quechua: "Q'omer", aimara: "Ch'uxña" },
    { espanol: "Agua", quechua: "Yaku", aimara: "Uma" }
];

const contenedor = document.getElementById("contenedorDiccionario");
const buscador = document.getElementById("buscador");

function mostrar(lista) {

    contenedor.innerHTML = "";

    lista.forEach(p => {

        contenedor.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card p-3">
                <div class="card-body">
                    <h5>${p.espanol}</h5>
                    <p><b>Quechua:</b> ${p.quechua}</p>
                    <p><b>Aimara:</b> ${p.aimara}</p>
                </div>
            </div>
        </div>
        `;
    });
}

mostrar(palabras);

// BUSCADOR
buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = palabras.filter(p =>
        p.espanol.toLowerCase().includes(texto)
    );

    mostrar(filtrados);
});