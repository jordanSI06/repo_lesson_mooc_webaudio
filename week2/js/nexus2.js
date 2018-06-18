var audio_context = window.AudioContext || window.webkitAudioContext; //depending of device
    var con = new audio_context();
    var osc = con.createOscillator();
    osc.connect(con.destination);
    osc.start();
    
var slider = new Nexus.Slider('#slider',{
    min: 100,
    max: 1000,
    step: 1,
    mode: 'absolute'
})   

slider.on('change', function slider1Changed(data){
    osc.frequency.value= data;
    console.log(data);
});
    

    
    
    