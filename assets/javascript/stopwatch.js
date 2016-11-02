window.onload = function(){
    $('#lap').on('click', stopwatch.recordLap);
    $('#stop').on('click', stopwatch.stop);
    $('#reset').on('click', stopwatch.reset);
    $('#start').on('click', stopwatch.start);
};
var stopwatch = {
    time:0,
    lap:1,
    interval: null,
    reset: function(){
        stopwatch.time = 0;
        stopwatch.lap = 1;
        $('#display').html('00:00');
        $('#laps').html('');
    },
    start: function(){
        //if stopwatch.interval is null run
        if(!stopwatch.interval){
         stopwatch.interval = setInterval(stopwatch.count, 1000);
        }
    },
    stop: function(){
        // DONE: Use clearInterval to stop the count here.
        clearInterval(stopwatch.interval);
        //set stopwatch.interval back to null so that stopwatch.start can reset the counter
        stopwatch.interval = null;
    },
    recordLap: function(){
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#laps').append('<p>Lap ' + stopwatch.lap + ' : ' + converted + '</p>');
        stopwatch.lap++;
    },
    count: function(){
        stopwatch.time++;
        var converted = stopwatch.timeConverter(stopwatch.time);
        console.log(converted);
        $('#display').html(converted);
    },
    timeConverter: function(t){
        var minutes = Math.floor(t/60);
        // % does the remained of a division of 60
        var seconds = t % 60;
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};
