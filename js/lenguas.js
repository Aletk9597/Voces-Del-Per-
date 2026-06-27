document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("buscarLengua");
    const boton = document.querySelector(".buscadorLenguas button");
    const cards = document.querySelectorAll(".cardLengua");

    // normalizar texto (quita tildes)
    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function filtrarLenguas() {

        const filtro = normalizar(input.value);

        let encontrados = 0;

        cards.forEach(card => {

            const texto = normalizar(card.querySelector("h3").innerText);

            if (texto.includes(filtro)) {
                card.style.display = "block";
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
                encontrados++;
            } else {
                card.style.display = "none";
            }

        });

        mostrarMensajeVacio(encontrados);
    }

    function mostrarMensajeVacio(total) {

        let mensaje = document.getElementById("mensajeNoResultados");

        if (!mensaje) {
            mensaje = document.createElement("p");
            mensaje.id = "mensajeNoResultados";
            mensaje.style.textAlign = "center";
            mensaje.style.marginTop = "20px";
            mensaje.style.color = "#C62828";
            mensaje.style.fontWeight = "bold";
            document.querySelector(".catalogoLenguas .container").appendChild(mensaje);
        }

        if (total === 0) {
            mensaje.textContent = "No se encontraron lenguas 😢";
        } else {
            mensaje.textContent = "";
        }
    }

    // evento escribir
    input.addEventListener("input", filtrarLenguas);

    // botón buscar
    boton.addEventListener("click", filtrarLenguas);

});