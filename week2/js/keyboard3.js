var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
    var con = new audio_context();
    var osc = con.createOscillator();
    osc.connect(con.destination);
    osc.start();
    
var keyboard = new Nexus.Piano('#keyboard',{
    'size': [200,125],
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote': 24,
    'highNote': 37
})

var midi_to_freq ={
    24: 261.63,
    25: 277.18,
    26: 293.66,
    27: 311.13,
    28: 329.63,
    29: 349.23,
    30: 369.99,
    31: 392,
    32: 415.30,
    33: 440,
    34: 466.16,
    35: 493.88,
    36: 523.25
};

keyboard.on('change', function KeyboardChanged(data){
    osc.frequency.value= midi_to_freq[data.note]
});
    

    
    
    