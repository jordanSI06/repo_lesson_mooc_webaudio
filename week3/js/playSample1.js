var audio_context = window.AudioContext || window.webkitAudioContext;
    
    var con = new audio_context();
    
    var hat;
    
    loadSample('./media/Bass-Drum-3.wav', function (buffer){
       hat = buffer;
    });
    
    function playKick(){
        var player = con.createBufferSource();
        player.buffer = hat;
        player.start();
        player.loop = false;
        player.connect(con.destination);
    }
    
    function loadSample(url, callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = function(){
            var audioData = request.response;
            con.decodeAudioData(audioData, function(buffer){
                console.log(buffer);
                callback(buffer);
            });
        };
        request.send();
    }