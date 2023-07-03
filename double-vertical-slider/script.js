// selectors 
const sliderContainer = document.querySelector(".slider_container")
const slideLeft = document.querySelector(".left_slide")
const slideRight = document.querySelector(".right_slide")
const upBtn = document.querySelector(".up_button");
const downBtn = document.querySelector(".down_button")
console.log(downBtn);

const slidesLength = slideRight.querySelectorAll("div").length;
console.log(slidesLength);

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener("click", () => changeSlide("up"))
downBtn.addEventListener("click", () => changeSlide("down"))

let activeSlideIndex = 0
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);
    if(direction === "up") {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0
        }
     }
     else if(direction === "down") {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1;
            }
        }
   
   slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
   slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}