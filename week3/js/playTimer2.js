var audio_context = window.AudioContext || window.webkitAudioContext;
    
    
    var con = new audio_context();
    var kick;
    var bpm =240;
    var kick_seq = [1, 0, 1, 0, 1, 1, 1, 0];
    var step = 0;

    var interval=document.getElementById("bpm");
    interval.innerHTML=bpm;

    var state=document.getElementById("state");
    state.innerHTML=kick_seq;
    

    function playKick(){
        var player = con.createBufferSource();
        player.buffer = kick;
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

    function timetoBPM(_bpm){
        return 60/bpm *1000
    }

    setInterval(function(){
        //console.log(step);
        if (kick_seq[step % kick_seq.length] == 1){
            playKick();
        }
        step = step + 1;
    }, timetoBPM(bpm));
    
    loadSample('./media/Bass-Drum-3.wav', function (buffer){
       kick = buffer;
    });
    
    
    
   
    