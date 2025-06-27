window.onload = function() {

const DaysElement = document.getElementById('days');
const HoursElement = document.getElementById('hours');
const MinutesElement = document.getElementById('minutes');
const SecondsElement = document.getElementById('seconds');

const targetDate = new Date("January 1, 2026 00:00:00").getTime();

const set = setInterval(timer, 1000);

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance /1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    DaysElement.innerHTML = days;
    HoursElement.innerHTML = hours;
    MinutesElement.innerHTML = minutes;
    SecondsElement.innerHTML = seconds;
    
    if(distance < 0) {
        clearInterval(set);
        DaysElement.innerHTML = "00";
        HoursElement.innerHTML = "00";
        MinutesElement.innerHTML = "00";
        SecondsElement.innerHTML = "00";
    }
}
}