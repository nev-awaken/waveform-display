function handleFiles(event) {
    var files = event.target.files;
    if(files.length > 0) {
        wavesurfer.load(URL.createObjectURL(files[0]));
    }
}


document.getElementById("upload").addEventListener("change", handleFiles);


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#DE6B48',
    progressColor: '#DAEDBD'
});



wavesurfer.on('ready', function () {
    wavesurfer.play();
});

document.getElementById("play").addEventListener("click", function() {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
    } else {
        wavesurfer.play();
    }
});

document.getElementById("stop").addEventListener("click", function() {
    wavesurfer.stop();
});
