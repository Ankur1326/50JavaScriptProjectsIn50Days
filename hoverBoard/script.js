// select element with class container and store it.
const container = document.querySelector(".container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'] //define an array of colors
const SQUARES = 1100 // number of square to create

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div") //create div element
    square.classList.add("square") //add class "square" to the div element
    container.appendChild(square)    // append the created div element to the container element

    // set color and box shadow for the square elements when we hover
    square.addEventListener("mouseover", () => {
        color = getRendomcolor(colors);
    
        square.style.backgroundColor = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        
    })

    // remove color and box shadow from the square elements when mouse move another square element
    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "#222"  // reset background color
        square.style.boxShadow = `0 0 ${2}px #000`; //reset box - shadow of the square element  
    })
}

// Function to get random color from the color array
function getRendomcolor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}