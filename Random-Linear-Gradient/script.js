// select elements 
const color1Elem = document.getElementById('color-1') 
const color2Elem = document.getElementById('color-2')
const codeElem = document.querySelector('.code')
const body = document.querySelector("body")
const btn = document.querySelector(".btn")
const infoElem = document.querySelector('.info');

// Function to generate a random color in hexadecimal format 
function getRendomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the user with random colors
function updateUI() {
    infoElem.remove(); // Remove the information element

    // Set the inner text of color1Elem and color2Elem to random colors
    color1Elem.innerText = getRendomColor();
    color2Elem.innerText = getRendomColor();

    // Set the background of the body using a linear gradient of the two random colors
    body.style.backgroundImage = `linear-gradient(90deg, ${color1Elem.innerText}, ${color2Elem.innerText})`;

    // Set the background color of color1Elem and color2Elem to the corresponding random colors
    color1Elem.style.backgroundColor = color1Elem.innerText;
    color2Elem.style.backgroundColor = color2Elem.innerText;

    // Set the text content of codeElem with the CSS linear gradient code
    codeElem.innerText = `linear-gradient(90deg, ${color1Elem.innerText}, ${color2Elem.innerText});`;
}

// Listen for keydown event on the window
window.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        updateUI(); // Call the updateUI() function when the space key is pressed
    }
})

btn.addEventListener("click", updateUI);