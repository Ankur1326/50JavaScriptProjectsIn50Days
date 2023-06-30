const btn = document.getElementById("ripple");
console.log(btn);

btn.addEventListener("click", (e) => {
    const x = e.pageX
    const y = e.pageY

    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft

    const xInsideBtnValue = x - btnLeft
    const yInsideBtnValue = y - btnTop
    // console.log(xInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInsideBtnValue + "px";
    circle.style.left = xInsideBtnValue + "px";

    e.target.appendChild(circle);

    setTimeout(() => circle.remove(), 500)
});