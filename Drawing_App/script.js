const canvas = document.querySelector("#canvas")
const increaseBtn = document.querySelector(".increase");
const sizeElem = document.querySelector(".size");
const decreaseBtn = document.querySelector(".decrease");
const colorElem = document.getElementById("color");
const clearBtn = document.querySelector("#clear");
console.log(clearBtn);
const ctx = canvas.getContext("2d");

let size = 4;
let isPressed = false;
colorElem.value = "black"
let color = colorElem.value
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

document.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
 
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }

})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}



function updateSize() {
    sizeElem.innerText = size;
}

increaseBtn.addEventListener("click", () => {
    size += 2

    if(size > 50) {
        size = 50
    }
    updateSize()
})

decreaseBtn.addEventListener("click", () => {
    size -=2;
    if(size < 2) {
        size = 4
    }
    updateSize()
})
colorElem.addEventListener("change", (e) => {
    color = e.target.value
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
}) 