// Select elements
const contents = document.querySelectorAll('.content') 
const listItems = document.querySelectorAll('nav ul li')


listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents() // Hide all content sections
        hideAllItems() // Hide all list items

        item.classList.add('active') // Add the 'active' class to the clicked list item
        contents[idx].classList.add('show') //Display the corresponding content section
    })
})

// hide all content sections
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


// remove the 'active' class from all list items
function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}