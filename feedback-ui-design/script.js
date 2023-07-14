const sendBtn = document.getElementById("send")
const ratings = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector('.rating-container')
const panel = document.getElementById('panel')

let selectedRating = 'Satisfied'

// add a click event listener to the ratingsContainer element
ratingsContainer.addEventListener("click", (e) => {
    removeActive() // call the removeActive function to remove the "active" class from all rating
    e.target.parentNode.classList.add('active') // Add the active class to the parent element of the clicked targed
    selectedRating = e.target.nextElementSibling.innerText // Update the selectedRating
})

sendBtn.addEventListener('click', (e) => {
    // Update the innerHTML of the "padel  element with the folowing HTML content"
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `   
})

const removeActive = () => {
    //remove the active class from each rating element
    ratings.forEach((rating) => {
        rating.classList.remove("active")
    })
}