document.addEventListener("DOMContentLoaded", () => {

    const audios = document.querySelectorAll("audio");

    let audioActivo = null;

    audios.forEach(audio => {

        // Crear botón personalizado (opcional si quieres mejorar UX)
        const btn = document.createElement("button");
        btn.classList.add("btn", "btnAudio", "mt-2");
        btn.innerHTML = "▶ Escuchar";

        const card = audio.closest(".card");
        card.appendChild(btn);

        // Evento click
        btn.addEventListener("click", () => {

            // Si hay otro audio reproduciéndose, lo detenemos
            if (audioActivo && audioActivo !== audio) {
                audioActivo.pause();
                audioActivo.currentTime = 0;

                const oldBtn = audioActivo.closest(".card").querySelector("button");
                if (oldBtn) oldBtn.innerHTML = "▶ Escuchar";

                audioActivo.closest(".card").classList.remove("reproduciendo");
            }

            // Play / Pause del mismo audio
            if (audio.paused) {
                audio.play();
                audioActivo = audio;

                btn.innerHTML = "⏸ Pausar";
                card.classList.add("reproduciendo");

            } else {
                audio.pause();
                btn.innerHTML = "▶ Escuchar";
                card.classList.remove("reproduciendo");
            }
        });

        // Cuando termina el audio
        audio.addEventListener("ended", () => {
            btn.innerHTML = "▶ Escuchar";
            card.classList.remove("reproduciendo");
            audioActivo = null;
        });
    });

});