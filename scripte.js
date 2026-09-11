// =====================================
// TELEGRAM MINI APP
// =====================================

const tg = window.Telegram?.WebApp;


// Initialisation Telegram
if (tg) {

    tg.ready();

    tg.expand();

    // Permet à Telegram d'adapter
    // l'interface à la hauteur disponible.
    if (tg.disableVerticalSwipes) {
        tg.disableVerticalSwipes();
    }
}


// =====================================
// GESTION DES VIDÉOS
// =====================================

const videos = document.querySelectorAll("video");

videos.forEach((video) => {

    video.addEventListener("play", () => {

        // Une seule vidéo à la fois.
        videos.forEach((otherVideo) => {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});


// =====================================
// VIBRATION TELEGRAM
// =====================================

videos.forEach((video) => {

    video.addEventListener("play", () => {

        if (
            tg &&
            tg.HapticFeedback
        ) {

            tg.HapticFeedback.impactOccurred(
                "light"
            );

        }

    });

});
