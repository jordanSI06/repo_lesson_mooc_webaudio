//Additive synth

var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();

function playSynth(){
    var osc = con.createOscillator();
    var amp = con.createGain();
    var now = con.currentTime; //Timer of program

    amp.gain.value = 0; // 0.05 to have smooth sound
    amp.gain.linearRampToValueAtTime(0.1, now + 2); //increase amp.gain.valiue (0) to 0.1 after 2 sec
    amp.gain.linearRampToValueAtTime(0, now + 4); //increase amp.gain.valiue (0.1) to 0 after 4 sec
    osc.frequency.value = Math.random() * 1000;
    osc.connect(amp);
    osc.type = 'sine'; //triangle, square, sawtooth, sine (by default: sine);
    
    amp.connect(con.destination);
    osc.start();
    osc.stop(now +4.1); //just after the end of ramp

    var element=document.getElementById("result");
    element.innerHTML=osc.frequency.value;

    var element2=document.getElementById("sound");
    element2.addEventListener('mousemove', function(){
    element.innerHTML=osc.frequency.value;
})
}


