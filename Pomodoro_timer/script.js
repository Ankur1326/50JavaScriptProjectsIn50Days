const selectTypeElement = document.getElementById("select-type");
const timerElement = document.querySelector('.timer');
const btnWrapper = document.querySelector('.btn-wrapper');


function resetTime(selectType) {
    if (selectType === 'pomodoro') {
        time = 25*60;
    }
    if (selectType === 'break') {
        time = 5*60;
    }
    if (selectType === 'long-break') {
        time = 10*60;
    }
}

function selectSession(selectType) {
    if (selectType === "pomodoro") {
        display("25:00")
    }
    if (selectType === "break") {
        display("05:00")
    }
    if (selectType === "long-break") {
        display("10:00")
    }
}

function display(formatedTime) {
    timerElement.innerHTML = formatedTime;
}

selectTypeElement.addEventListener("change", () => {
    selectSession(selectTypeElement.value)
    resetTime(selectTypeElement.value)
})

let interval, time;
time = 25*60;

function start() {
    interval = setInterval(() => {
        time--;
        display(format(time));
    },1000)
}

function format(time) {
    let min = Math.trunc(time / 60);
    let sec = Math.round(((time / 60) - min)*60);

    let minutes = min.toString().padStart(2, '0');
    let seconds = sec.toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
}

function reset() {
    if (interval) {
        clearInterval(interval)
    }
    resetTime();
    selectSession(selectTypeElement.value)
}

let isClicked = true;
btnWrapper.addEventListener('click', e => {

    // start btn 
    if (e.target.id === 'start') {

        if (isClicked) {
            start(); //start the timer
        }
        isClicked = false;
    }

    if (e.target.id === 'pause') {
        isClicked = true;
        if (interval) {
            clearInterval(interval);
        }
    }

    if (e.target.id === 'reset') {
        isClicked = true;
        reset();
    }

})

