var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();
var osc = con.createOscillator();

osc.connect(con.destination);
osc.frequency.value = 0; //frequency of the oscilator
osc.start();

var hertz=document.getElementById("hertz");
hertz.innerHTML=osc.frequency.value;

var sound=document.getElementById("sound");
sound.addEventListener('keydown', function(){
    hertz.innerHTML=osc.frequency.value;
})

function setNote(key){
    console.log(key);
    switch(key){
        case "q":
            osc.frequency.value=261.63;
            break;
        case "s":
            osc.frequency.value=293.66;
            break;
        case "d":
            osc.frequency.value=329.63;
            break;
        case "f":
            osc.frequency.value=349.63;
            break;
        case "g":
            osc.frequency.value=392.00;
            break;
        case "h":
            osc.frequency.value=440.00;
            break;
        case "j":
            osc.frequency.value=493.88;
            break;
        case "k":
            osc.frequency.value=523.25;
            break;
    }
}

