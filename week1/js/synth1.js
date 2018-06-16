var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();
var osc = con.createOscillator();

osc.connect(con.destination);

osc.frequency.value = 450; //frequency of the tune
osc.start();

var element=document.getElementById("result");
element.innerHTML=osc.frequency.value;

var element2=document.getElementById("sound");
element2.addEventListener('mousemove', function(){
    element.innerHTML=osc.frequency.value;
})