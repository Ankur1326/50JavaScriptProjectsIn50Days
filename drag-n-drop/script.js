// Selecting the draggable element and the empty elements
const fillElem = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")
console.log(empties);

// Add event listeners to the draggable element
fillElem.addEventListener("dragstart", dragStart)
fillElem.addEventListener('dragend', dragEnd)

// Add event listeners to each empty element
for(const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
}

// Function to be executed when drag starts
function dragStart() {
    // Add the 'hold' class to the dragged element
    this.className += ' hold'
}

// Function to be executed when drag ends
function dragEnd() {
    // Reset the class of the dragged element to 'fill'
    this.className = 'fill'
}

// Function to be executed when element is dragged over
function dragOver(e) {
    // Prevent default behavior of the browser
    e.preventDefault();
}

// function to be executed when holded element is enter any element
function dragEnter(e){
    e.preventDefault() // Prevent default behavior of the browser 
    this.className += ' hovered' // Add the 'hovered' class to the empty element
}

// Function to be executed when element is dragged out. 
function dragLeave() {
    this.className = "empty" // Reset the class of the empty element to 'empty'
    
}

// function to bee executed when element is drpped
function dragDrop() {
    // Reset the class of the empty element to 'empty'
    this.className = 'empty'
    this.append(fillElem) // Append the dragged element to th empty element
}
