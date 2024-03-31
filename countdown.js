function startCountdown(durationInSeconds, displayElementId) {
    var timer = durationInSeconds;
    var display = document.getElementById(displayElementId);

    var countdownInterval = setInterval(function () {
        var minutes = Math.floor(timer / 60);
        var seconds = timer % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "You can eat the next bite!";
        }
    }, 1000);
}

// Example usage:
var durationInSeconds = 23; // Change this to set the countdown duration
var displayElementId = "countdown"; // ID of the HTML element where countdown will be displayed
//startCountdown(durationInSeconds, displayElementId);
