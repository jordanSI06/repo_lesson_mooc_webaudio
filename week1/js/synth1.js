var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();
var osc = con.createOscillator();

osc.connect(con.destination);
osc.start();
