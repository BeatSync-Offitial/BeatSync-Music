document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "F5": document.getElementById("playPause").click(); break;
        case "F6": document.getElementById("prevTrack").click(); break;
        case "F7": document.getElementById("nextTrack").click(); break;
        case "F10": document.getElementById("audioPlayer").volume -= 0.1; break;
        case "F11": document.getElementById("audioPlayer").volume += 0.1; break;
        case "F12": document.getElementById("audioPlayer").muted = !audio.muted; break;
        case "F4": document.documentElement.requestFullscreen(); break;
    }
});

document.addEventListener("touchstart", function(event) {
    let startX = event.touches[0].clientX;
    document.addEventListener("touchend", function(event) {
        let endX = event.changedTouches[0].clientX;
        let diff = startX - endX;
        if (diff > 50) document.getElementById("nextTrack").click();
        else if (diff < -50) document.getElementById("prevTrack").click();
    });
});
