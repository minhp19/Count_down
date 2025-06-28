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

    const ms_in_seconds = 1000;
    const sec_in_minutes = 60;
    const min_in_hours = 60;
    const hour_in_days = 24;

    const ms_in_minutes = ms_in_seconds * sec_in_minutes;
    const ms_in_hours = ms_in_minutes * min_in_hours;
    const ms_in_days = ms_in_hours * hour_in_days;

    const days = Math.floor(distance / ms_in_days);
    const hours = Math.floor((distance % ms_in_days) / ms_in_hours);
    const minutes = Math.floor((distance % ms_in_hours) / ms_in_minutes);
    const seconds = Math.floor((distance % ms_in_minutes) / ms_in_seconds);


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