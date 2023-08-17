// Select the HTML elements
const quoteElement = document.querySelector('.quote')
const authorElement = document.querySelector(".author")

const link = `https://api.quotable.io/random`; // fetch a random quote from the quotable API

function getQuote() {
    fetch(link)
        .then(response => {
            let data = response.json(); // convert the response data to JSON format
            return data; // Return the JSON promise
        })
        .then(data => {
            quoteElement.innerText = `${data.content}`
            authorElement.innerText = `${data.author}`
        })
        .catch(error => {
            // Handle any errors that occur during the fetch process
            console.log(error);
        })
}

window.addEventListener("load", getQuote)