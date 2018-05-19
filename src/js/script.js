$(function(){
    const startButton = $("#start");
    const resumeButton = $("#resume");
    const stopButton = $("#stop");
    const resetButton = $("#reset");
    const lapButton = $("#lap");
    let mode = false;
    let timeCounter = 0;
    let lapCounter = 0;
    let action;
    let lapNumber = 0;
    let timeMinutes, timeSeconds, timeCentiSeconds, lapMinutes, lapSeconds, lapCentiseconds;
    let resume = false;

    const updateTime = function() {
        timeMinutes = Math.floor(timeCounter/6000);
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiSeconds = (timeCounter%6000)%100;
        
        $("#time-minute").text(format(timeMinutes));
        $("#time-second").text(format(timeSeconds));
        $("#time-centisecond").text(format(timeCentiSeconds));


        lapMinutes = Math.floor(timeCounter/6000);
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiseconds = (lapCounter%6000)%100;
        
        $("#lap-minute").text(format(lapMinutes));
        $("#lap-second").text(format(lapSeconds));
        $("#lap-centisecond").text(format(lapCentiseconds));
    }

    // Format numbers
    const format = function(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    const reset = function() {
        location.reload();
    }

    const addLap = function() {
        const lapElement = 
            "<div class='div-lop'>" + 
                "<div class='title-lop'>" + 'Lap: ' + lapNumber + "</div>" +
                "<div class='lap-details'>" + 
                    "<span>"+ format(lapMinutes) +"</span>" + " " +
                    "<span>"+ format(lapSeconds) +"</span>" + " " +
                    "<span>"+ format(lapCentiseconds) +"</span>"
                + "</div>" +
            "</div>";
        $(lapElement).prependTo("#col-lop");
    }

    const lap = function() {
        if (mode == true) {
            lapNumber++;
            lapCounter = 0;
            addLap();
        }
    }

    const resumeCounting = function() {
        resumeButton.hide();
        resetButton.hide();
        startCounting();
        mode = true;
    }

    const stopCounting = function() {
        stopButton.hide();
        lapButton.hide();
        resumeButton.show();
        resetButton.show();
        clearInterval(action);
        mode = false;
    }

    const startCounting = function() {
        // Start countering
        mode = true;
        startButton.hide();
        stopButton.show();
        lapButton.show();
        action = setInterval(function(){
            timeCounter ++;
            if (timeCounter == 100 * 60 * 100) {
                timeCounter = 0;
            }
            lapCounter ++;
            if (lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
            updateTime();
        },10);
    } 

    // Click
    startButton.click(startCounting);
    stopButton.click(stopCounting);
    lapButton.click(lap);
    resumeButton.click(resumeCounting);
    resetButton.click(reset);
})