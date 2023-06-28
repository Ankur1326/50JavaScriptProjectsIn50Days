const allImages = [
    "images/nichlas-andersen-ZFXrgzHu1KU-unsplash.jpg",
    "images/refargotohp-4_f068pZszc-unsplash.jpg",
    "images/robert-linder-eg2-Kme25do-unsplash.jpg",
    "images/royal-oxford-ROE5l5LzPSM-unsplash.jpg",
    "images/wlodzimierz-jaworski-Aea6P55bZzw-unsplash.jpg",
]

const imagesElem = document.querySelector(".images");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".preview");
const body = document.querySelector("body");
let counter = 0;

// next btn 
nextBtn.addEventListener('click', () => {
    if(counter > allImages.length - 1) {
        counter = 0;
    }
    showImg(counter);
    counter++;
})


// already clicked when page reload
nextBtn.click();


// previous btn 
previousBtn.addEventListener("click", () => {
    if(counter < 0) {
        counter = allImages.length - 1;
    }
    showImg(counter);
    counter--;
})

function showImg(counter) {
    // body 
    body.style.backgroundImage = `url(${allImages[counter]})`;
    body.style.backgroundSize = 100 + "%"
    body.style.backgroundPosition = "center"
    
    // container 
    imagesElem.style.backgroundImage = `url(${allImages[counter]})`;
    imagesElem.style.backgroundSize = 100 + "%"
    imagesElem.style.backgroundPosition = "center"
} 