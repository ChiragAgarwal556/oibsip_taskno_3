// script.js
document.getElementById('convertButton').addEventListener('click', () => {
    const inputTemp = document.getElementById('inputTemperature').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputTemp) || inputTemp === '') {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(inputTemp);
    let result;

    switch (unit) {
        case 'celsius':
            result = `Fahrenheit: ${(temperature * 9/5) + 32} °F | Kelvin: ${temperature + 273.15} K`;
            break;
        case 'fahrenheit':
            result = `Celsius: ${(temperature - 32) * 5/9} °C | Kelvin: ${(temperature - 32) * 5/9 + 273.15} K`;
            break;
        case 'kelvin':
            result = `Celsius: ${temperature - 273.15} °C | Fahrenheit: ${(temperature - 273.15) * 9/5 + 32} °F`;
            break;
    }

    resultDiv.textContent = result;
});
