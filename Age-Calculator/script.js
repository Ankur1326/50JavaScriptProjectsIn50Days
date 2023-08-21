const error = document.querySelector('.error')
const container = document.querySelector(".container")

function getAge() {

    const dobValue = document.getElementById('dob').value;
    console.log(dobValue);

    if (!dobValue) return;

    let dob = new Date(dobValue)

    const today = new Date();
    
    let diff = today - dob;
    console.log('diff : ', diff);

    let age = diff / (1000 * 60 * 60 * 24 * 365);
    console.log("age", age);
    calculateAge(age)
}

function calculateAge(age) {
    let year = Math.floor(age);
    let remainingYear = age - year;
    
    let monthDiff = remainingYear * 12;
    month = Math.floor(monthDiff)

    let remainingMonth = monthDiff - month;
    let day = Math.floor(remainingMonth * 30);

    displayAge(year, month, day)
    
}

function displayAge(y, m, d) {
    const years = document.getElementById('years')
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = y;
    months.innerText = m;
    days.innerText = d;

    if (y >= 0) {
        error.style.display = 'none'
    } else {
        error.style.display = 'block'
    }
}

container.addEventListener('input', getAge);