const container = document.querySelector(".container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 1100

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    container.appendChild(square)    

    // set color and box shadow from square elements
    square.addEventListener("mouseover", () => {
        color = getRendomcolor(colors);
    
        square.style.backgroundColor = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        
    })

    // remove color and box shadow from square elements
    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "#222"
        square.style.boxShadow = `0 0 ${2}px #000`;
    })
}


function getRendomcolor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}