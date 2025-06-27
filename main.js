const DaysElement = document.getElementById('days');
const HoursElement = document.getElementById('hours');
const MinutesElement = document.getElementById('minutes');
const SecondsElement = document.getElementById('seconds');

// const targetDate = new Date("June 6 2025 09:50:00").getTime();
const targetDate = new Date(Date.now() + 5 * 60 * 1000).getTime(); // 5 phút nữa

const set = setInterval(timer, 1000);

function timer() {
    const currenDate = new Date().getTime();
    const distance = targetDate - currenDate;

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

console.log("Countdown script loaded!");


