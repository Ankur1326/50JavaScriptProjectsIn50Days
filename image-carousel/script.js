const imagesContainer = document.querySelector(".images_container")
const images = document.querySelectorAll("img")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
// console.log(images);


const imagesArr = Array.from(images)

images.forEach((image, idx) => {
    image.style.transform = `translateX(${100 * idx}%)`
})


let idx = 0;
let interval = setInterval(run, 2000)

function changeImage() {
    if (idx > imagesArr.length-1) {
        idx = 0;
    }
    else if(idx < 0) {
        idx = imagesArr.length-1;
    }
        imagesContainer.style.transform = `translateX(${-100 * idx}%)`
}


function run() {
    idx++
    changeImage();
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000);
}

nextBtn.addEventListener("click", () => {
    idx++
    changeImage();
    resetInterval()
})

prevBtn.addEventListener("click", () => {
    idx--
    changeImage();
    resetInterval()
})