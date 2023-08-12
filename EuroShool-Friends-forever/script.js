const aside = document.querySelector("aside");
const container = document.querySelector(".container")

function changeStyle(x) {
    x.classList.toggle("change");
    aside.classList.toggle("show") 
    container.classList.toggle("left")
}
changeStyle(document.querySelector(".ham-menu")) // inesely

const students = [
        {
            name: "Yajat Ramawat",
            photo: "./img/Yajat.jpg",
            favoriteFood: "Daal Baati",
            favoritePlace: "Norway",
            favoriteMovie: "RRR",
            favoriteActor: "Amitabh Bachcchan",
        },
        {
            name: "Adish Shinde",
            photo: "./img/aadi.jpg",
            favoriteFood: "CHICKEN and pav bhaji",
            favoritePlace: "NYC (USA)",
            favoriteMovie: "RRR (2022)",
            favoriteActor: "The rock",
        },
        {
            name: "Anay Mulay",
            photo: "./img/anay.jpg",
            favoriteFood: "Chaat",
            favoritePlace: "Chennai (formerly Madras)",
            favoriteMovie: "Oppenheimer",
            favoriteActor: "Shah Rukh Khan",
        },
        {
            name: "Rishabh Patel",
            photo: "./img/rishab.jpg",
            favoriteFood: "Dhokla",
            favoritePlace: "School",
            favoriteMovie: "The Fast and the Fuhrerious",
            favoriteActor: "Vin petrol",
        },
        {
            name: "Ajinkyya Lokhande",
            photo: "./img/ajinkya.jpg",
            favoriteFood: "Pasta",                       favoritePlace: "sriharikota",
            favoriteMovie: "Oppenheimer",
            favoriteActor: "none",
        },
]

students.forEach((student) => {
    const btn = document.createElement("button");
    btn.classList.add("userBtn")
    btn.innerText = student.name

    aside.appendChild(btn)
})

const userBtns = document.querySelectorAll(".userBtn")

userBtns.forEach((userBtn) => {
    userBtn.addEventListener("click", () => {
        userBtns.forEach((userBtn) => userBtn.classList.remove("active")) 
        userBtn.classList.add("active");

        const name = document.querySelector(".name")
        const img = document.querySelector(".photo img")
        const food = document.querySelector(".food")
        const place = document.querySelector(".place")
        const movie = document.querySelector(".movie")
        const actor = document.querySelector(".actors")
        for (const student of students) {
            if(student.name === userBtn.innerText) {
                img.setAttribute("src", student.photo);

                name.innerText = student.name
                food.innerText = student.favoriteFood
                place.innerText = student.favoritePlace
                movie.innerText = student.favoriteMovie
                actor.innerText = student.favoriteActor
            }
        }

    })
    // click()
})