var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();
var osc = con.createOscillator(); //first oscillator
var lfo= con.createOscillator(); //second oscillator
var lfo_amp = con.createGain();

lfo_amp.gain.value=200; //multiplier (-200 to 200), amplitude of song
osc.frequency.value = 300;
lfo.frequency.value = 15; //lfo for low frequency oscillator, change the speed of ondulation
lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);

osc.start();
lfo.start();

var lowfreq=document.getElementById("lowfreq");
lowfreq.innerHTML=lfo.frequency.value;

var sound=document.getElementById("sound");
sound.addEventListener('mousemove', function(){
    lowfreq.innerHTML=lfo.frequency.value;
})
