// Get DOM elements
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = [] // An array to store the list items

getData();

// Function to fetch data from the API
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json(); // Extract the 'result' property from the API response JSON 

    // Clear result 
    result.innerHTML = ''

    results.forEach(user => {
        const liElem = document.createElement("li") // Create new list element


        listItems.push(liElem)

        liElem.innerHTML += `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last} </h4> 
                <p>${user.location.state}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(liElem)
    });   
}

filter.addEventListener('input', (e) => filterData(e.target.value))

// Function to filter the list items based on the search term
function filterData(searchTerm) {
    // Loop through each list item
    listItems.forEach(item => {
        // Check if the inner text of the list item contains the search term (case-insensitive)
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            // if the search term is found remove the 'hide' class to show the item
            item.classList.remove('hide')
        } else {
            // if the search term is not found, add the 'hide' class to hide the item
            item.classList.add('hide')
        }
    })
}