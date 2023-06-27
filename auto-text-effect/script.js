const textElem = document.querySelector(".text");
const speedInputElem = document.getElementById("speed");
const text = "I Am a Web Developer"

let sliceEndVal = 1;
let speed = 300 / speedInputElem.value

function textWrite() {
    textElem.innerText = text.slice(0, sliceEndVal+1);

    sliceEndVal++;
    if(sliceEndVal == text.length) {
        sliceEndVal = 1;
    }

    setTimeout(textWrite, speed)
}

speedInputElem.addEventListener("input", (e) => { 
    speed = 300 / e.target.value;
})
textWrite();