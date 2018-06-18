var dial = new Nexus.Dial('#dial',{
    min: 0,
    max: 100,
    step: 1,
    mode: 'absolute'
})

var slider = new Nexus.Slider('#slider',{
    min: 0,
    max: 100,
    step: 1,
    mode: 'absolute'
});

var keyboard = new Nexus.Keyboard('#keyboard',{
    
})

slider.on('change',function(v) {
// do something with v!
});