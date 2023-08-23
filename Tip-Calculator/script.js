const container = document.querySelector('.container');
const billAmountElem = document.getElementById('bill-amount');
const tipPercentageElem = document.getElementById('tip-percentage');
const tipInputElem = document.getElementById('tip-input');
const tipTotalElem = document.querySelector('.tip-total');
const splitValueElem = document.getElementById('split-value');
const splitInputElem = document.getElementById('split-input');
const totalPerPersonElem = document.getElementById('total-per-person');
const billPerPersonElem = document.getElementById('bill-per-person');
const tipPerPersonElem = document.getElementById('tip-per-person');

// Funciton to update calculations and display
function update(){
    // Get input values
    let billAmount = Number(billAmountElem.value); // Convert bill amount to number
    let tipPercentage = tipInputElem.value;
    let persons = splitInputElem.value;

    // Calculate tip and amounts per person
    let tipValue = (tipPercentage / 100) * billAmount;
    let tipEach = tipValue / persons;
    let totalEach = (billAmount + tipValue) / persons;
    let billEach =  billAmount / persons;

    // Update daisplayed elements with calcuclted values
    tipPercentageElem.innerHTML = `${tipPercentage}%`;
    tipTotalElem.innerHTML = formatMoney(tipValue);
    splitValueElem.innerHTML = formatSplit(persons);
    totalPerPersonElem.innerHTML = formatMoney(totalEach);
    billPerPersonElem.innerHTML = formatMoney(billEach);
    tipPerPersonElem.innerHTML = formatMoney(tipEach);
}

// Funciton to format split display
function formatMoney(value){
    value = Math.ceil(value * 100) / 100; // Round up to two decimal places
    value = value.toFixed(2); //Convert to string with two decimal places
    return `₹${value}`; // Return formatted string with currency symobol
}

// function to format split display
function formatSplit(value){
    if(value === '1') 
        return `${value} Person`; // Singular form
    return `${value} People`; // Plural form
}

// update call on any input change
container.addEventListener('input', update);

