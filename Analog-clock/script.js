function updateTime() {

    const hourHand = document.querySelector('.hour')
    const minuteHand = document.querySelector('.minute')
    const secondHand = document.querySelector('.second')

    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    hourHand.style.transform = `rotate(${30*hours + minutes/2 + seconds/120}deg)`
    minuteHand.style.transform = `rotate(${6*minutes + seconds/10}deg)`
    secondHand.style.transform = `rotate(${6*seconds}deg)`



}
updateTime()
setInterval(updateTime, 1000);

