  // selectors
const input = document.querySelector("input");
const label = document.querySelector("label");

input.addEventListener("input", (e) => {
    // console.log(e.target);
    // console.log(e.target.value);

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue("width")

    // console.log(range_width);
    // console.log(label_width);

    const range_num_width = +range_width.substring(0, range_width.length - 2)
    const label_num_width = +label_width.substring(0, label_width.length -2 )
    // console.log(label_num_width);

    const max = +e.target.max;
    const min = +e.target.min;

    const value = +e.target.value;

    const left = value * (range_num_width / max) - label_num_width / 2 + scale(value, min, max, 10, -10)


    console.log(value);
    console.log(left);
    label.style.left = `${left}px`
    label.innerText = value 
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


//   ++++++++++ OR ++++++++++++
// input.addEventListener("input", () => {
//     // console.log("hii");
//     console.log(input.value);
//     label.innerText = input.value;
//     label.style.left = input.value + "%";
// });

