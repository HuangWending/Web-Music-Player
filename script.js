var audio = document.getElementById("audio");
var lyricsContainer = document.getElementById("lyrics");

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function loadLyrics() {
    var file = document.getElementById("lyricsFile").files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var contents = e.target.result;
        displayLyrics(contents);
    }

    reader.readAsText(file);
}

function displayLyrics(lyrics) {
    lyricsContainer.innerHTML = "";
    var lines = lyrics.split("\n");

    lines.forEach(function(line) {
        var lyricLine = document.createElement("p");
        lyricLine.className = "lyric-line";
        lyricLine.textContent = line;
        lyricsContainer.appendChild(lyricLine);
    });
}

document.getElementById("musicFile").addEventListener("change", function(e) {
    var file = e.target.files[0];
    var fileURL = URL.createObjectURL(file);
    audio.src = fileURL;
});
