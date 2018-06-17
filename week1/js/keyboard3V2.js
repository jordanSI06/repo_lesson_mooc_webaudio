var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();

function setNote(key){
    var osc = con.createOscillator();
    var amp = con.createGain();
    var now = con.currentTime; //Timer of program

    amp.gain.value = 0; // 0.05 to have smooth sound
    amp.gain.linearRampToValueAtTime(0.1, now + 2); //increase amp.gain.valiue (0) to 0.1 after 2 sec
    amp.gain.linearRampToValueAtTime(0, now + 4); //increase amp.gain.valiue (0.1) to 0 after 4 sec
    osc.connect(amp);
    osc.type = 'sine'; //triangle, square, sine (by default: sine);
    amp.connect(con.destination);

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
    osc.start();
    osc.stop(now+4.1);
}

