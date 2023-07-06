const blurElem = document.querySelector(".bg_image");
const blurValueElem = document.querySelector(".loading_text");

let load = 0;

const blurring = () => {
    load++
    
    if (load > 99)  {
        clearInterval(blueTime)
    }

    blurValueElem.innerText = `${load}%`
    blurValueElem.style.opacity = scale(load, 0, 100, 1, 0)
    blurElem.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
let blueTime = setInterval(blurring, 30)