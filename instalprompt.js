let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Show an "Install BeatSync" button
    document.getElementById("installBtn").style.display = "block";
});

document.getElementById("installBtn").addEventListener("click", () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the install prompt");
            } else {
                console.log("User dismissed the install prompt");
            }
            deferredPrompt = null;
        });
    }
});
{
    "name": "BeatSync",
    "short_name": "BeatSync",
    "start_url": "index.html",
    "display": "standalone",
    "background_color": "#181818",
    "theme_color": "#252525",
    "icons": [
        {
            "src": "assets/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "assets/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
