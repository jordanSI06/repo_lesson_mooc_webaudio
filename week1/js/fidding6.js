var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
var con = new audio_context();
var osc = con.createOscillator();
var filter = con.createBiquadFilter(); //remove the high frequency to avoid strident sound

osc.connect(filter);
filter.connect(con.destination);

osc.frequency.value = 600;
filter.frequency.value = 100; //rate of smooth song, like volume
osc.type='sawtooth';
osc.start();

var Hz=document.getElementById("Hz");
Hz.innerHTML=osc.frequency.value;

var filt=document.getElementById("filterq");
filt.innerHTML=filter.frequency.value;

var qfactor=document.getElementById("qfactor");
qfactor.innerHTML=osc.frequency.value;

var element=document.getElementById("sound");
element.addEventListener('keydown', function(){
    Hz.innerHTML=osc.frequency.value;
})

element.addEventListener('mousemove', function(){
    filt.innerHTML=filter.frequency.value;
})

element.addEventListener('mousemove', function(){
    qfactor.innerHTML=filter.Q.value;
})


function changeFilter(mx, my){
    filter.frequency.value = mx*10;
    filter.Q.value = my / 10; //quality factor (to elevate the highest curb)
}

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

