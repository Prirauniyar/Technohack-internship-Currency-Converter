function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            if (exchangeRate) {
                const convertedAmount = (amount * exchangeRate).toFixed(2);
                document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}.`;
            } else {
                alert("Conversion rate not available. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert("Error fetching conversion data. Please try again later.");
        });
}
