const counters = document.querySelectorAll(".counter") 

// For Each counter element
counters.forEach(counter => { 
    counter.innerText = '0'; // set the initial value

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // Get the target value from the data-target attribute
        const c = +counter.innerText // Get the current value

        const increment = target / 200
        console.log(increment);

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}` //Update the text inside the counter element with the rounded-up value of the current value plus the increment
            setTimeout(updateCounter, 1); // calling the updatecounter again and again based on 1ms duration
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})
