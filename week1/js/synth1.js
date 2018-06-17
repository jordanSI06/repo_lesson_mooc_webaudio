var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();
var osc = con.createOscillator();

osc.connect(con.destination);

osc.frequency.value = 440; //frequency of the tune
osc.start();

var hertz=document.getElementById("hertz");
hertz.innerHTML=osc.frequency.value;

var sound=document.getElementById("sound");
sound.addEventListener('mousemove', function(){
    hertz.innerHTML=osc.frequency.value;
})