const likedCountElem = document.querySelector("span")
const containerElem = document.querySelector(".container")

let clickCount = 0;
let clickTime = 0;
containerElem.addEventListener("click", (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } 
    else {
        if((new Date().getTime() - clickTime) < 800) {
            createhart(e);
            clickTime = 0;
        }
        else {
            clickTime = new Date().getTime();
        }
    }
    
})

function createhart(e) {
    // console.log(e);

    x = e.offsetX
    y = e.offsetY
  
    const hartElem = document.createElement("i")
    hartElem.classList.add('fas')
    hartElem.classList.add('fa-heart')
    // console.log(hartElem);
    containerElem.appendChild(hartElem)
    hartElem.style.left = x + "px"
    hartElem.style.top = y + "px"

    clickCount++;
    likedCountElem.innerText = clickCount;
    
    setTimeout(function() {
        hartElem.parentNode.removeChild(hartElem);
    }, 600)
}