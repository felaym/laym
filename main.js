let checkedInput = document.getElementById("confirmationButton");

document.getElementById("sumbitConfirmation").onclick = () => {
    if (checkedInput.checked){
        setTimeout(() => {
            window.open("https://www.paypal.com/ua/home") // open the window in 5 seconds if the checkbox is checked
        }, 5000);
        document.getElementById("redirectingButton").innerHTML = "You will be redirected to the payment page in 5 seconds.";
        setTimeout(() => { // reload the page in 7 seconds after clicking the button with the checked checkbox
            location.reload();
            window.close();
        }, 7000);
    } else{
        location.reload(); // reload the page if the checkbox isn't checked
    }
}


let seconds = 59;
let minutes = 4;
let min = document.getElementById("minutes").textContent;
let sec = document.getElementById("seconds").textContent;


function updateTimer() {
    seconds -= 1; 

    if (seconds < 0) {
        seconds = 59;
        minutes -= 1; 
        
        if (minutes <= -1) {
            clearInterval(timerInterval); // Stop the timer when minutes and seconds both are 00:00
            min = "00";
            sec = "00";
            return;
        } 
    }
    min = minutes < 10 ? "0" + minutes : minutes; // making the minutes working based on timer
    sec = seconds < 10 ? "0" + seconds : seconds; // making the seconds working based on timer

    document.getElementById("seconds").textContent = sec; 
    document.getElementById("minutes").textContent = min;

    if (min === "00" && sec === "00"){ // if the timer is 00:00 then:
        setTimeout(function() {
            window.close(); // close the window in 1 second
        }, 1000);
    }
}

const timerInterval = setInterval(updateTimer, 1000); // update the timer every 1 second 

