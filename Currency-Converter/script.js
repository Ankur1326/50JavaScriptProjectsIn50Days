const currency1InputElem = document.getElementById('currency-1');
const selectCurrency1 = document.getElementById('select-currency-1');
const currency2InputElem = document.getElementById('currency-2');
const selectCurrency2 = document.getElementById('select-currency-2');

const rateDetail = document.getElementById('rate-detail');

calc();

// calculate and display currency conversion
function calc(){
    
    const selectCurrency1value = selectCurrency1.value;
    const selectCurrency2value = selectCurrency2.value;

    // Fetch the latest exchange rates from the API based on selected currency
    fetch(`https://api.exchangerate-api.com/v4/latest/${selectCurrency1value}`)
    .then(response => {

        // Check if the network response is okay; otherwise, throw an error
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        // Calculate the converted value based on the exchange rate
        const val = data.rates[selectCurrency2value];
        currency2InputElem.value = (currency1InputElem.value * val).toFixed(3);
        
        // Display thr exchange rate details
        rateDetail.innerText = `1 ${selectCurrency1value} = ${val.toFixed(3)} ${selectCurrency2value}`;
    })
    .catch(error => {
        console.log('problem : ', error); // Handle errors by logging them to the console
    });
}



currency1InputElem.addEventListener('input', calc);
currency2InputElem.addEventListener('input', calc);

selectCurrency1.addEventListener('change', calc);
selectCurrency2.addEventListener('change', calc);