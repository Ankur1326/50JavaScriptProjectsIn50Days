// Selecting all small cups, liters element, percentage element and remained element
const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

// Adding click event listeners to each small cup
smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx))
})

// Updating the big cup initially
updateBigCup()

// Update the big cup
function highlightCups(idx) {

    // checking conditions when the last cup is clicked and full
    if (idx === 7 && smallCups[idx].classList.contains("full")) {
        idx--; 
    }
    // Checking conditions when a cup is clicked and its next sibling is not full
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }

    // Adding or removing "full" class to the cups based on the clicked index
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {

            cup.classList.add("full") 
        } else {
            
            cup.classList.remove("full")
        }
    })

    // Update the big cup
    updateBigCup()
}


function updateBigCup() {
    const fullcups = document.querySelectorAll(".cup-small.full").length
    const totalCups = smallCups.length

    // checking if no cups are filled
    if (fullcups === 0) {
        percentage.style.visibility = "hidden"
        percentage.style.height = 0
    }
    // Updating the percentage and height of the big cup
    else {
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullcups / totalCups * 330}px`
        percentage.innerText = `${fullcups / totalCups * 100}%`
    }


    // checking if all cups are filled
    if (fullcups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullcups / 1000)}L`
    }
}
