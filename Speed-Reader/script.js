// get elements
const textElem = document.getElementById('text')
const wpmElem = document.getElementById('wpm')
const readerElem = document.querySelector('.reader')
  
let words, speed, current, interval;

document.addEventListener("click", clickHandler)

// handle click event
function clickHandler(event) {
    startReader(event) //if start btn is clicked
    stopReader(event) // if stop btn is clicked
}

function startReader(event) {
    if (event.target.id !== 'start') {
         return; //Ignore click
    }
    if (!textElem.value.length) {
        return;
    }

    words = textElem.value.split(' ')
    .filter(function(individualWord) {
        return individualWord.length;
    })

    speed = (60 / parseInt(wpmElem.value, 10)) * 1000;

    current = 0;

    run();
}
    
function stopReader(event) {
    if (event.target.id !== 'stop') {
        return;
    }
    
    end();
}

function end(){
    //clear the interval
    clearInterval(interval);
}


function run() {
    interval = setInterval(function() {
        if (!words[current]) {
            end();
            return;
        }

        readerElem.textContent = words[current] // reader the words to ui

        current++;

    }, speed);
}