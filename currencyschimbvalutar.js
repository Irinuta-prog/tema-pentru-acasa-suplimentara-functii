// Funcția care returnează rata de schimb pentru o monedă dată
function getExchangeRate(fromCurrency) {
    let rate;
    if (fromCurrency === 'USD') {
        rate = 18.5;
    } else if (fromCurrency === 'EUR') {
        rate = 19.5;
    } else if (fromCurrency === 'RON') {
        rate = 4.8;
    } else if (fromCurrency === 'GBP') {
        rate = 20.6;
    } else {
        rate = null; // Moneda nu este suportată
    }
    return rate;
}

// Funcția care calculează suma convertită
function calculateAmount(initialAmount, rate) {
    return initialAmount * rate;
}

// Funcția principală care efectuează conversia și afișează rezultatul
function convertCurrency(amount, fromCurrency) {
    // Obținem rata de schimb
    const rate = getExchangeRate(fromCurrency);
// Verificăm dacă moneda este suportată
    if (rate === null) {
        console.log("Moneda nu este suportată.");
    } else {
        // Calculăm suma convertită
        const convertedAmount = calculateAmount(amount, rate);
        // Afișăm rezultatul
        console.log(`${amount} ${fromCurrency} este echivalent cu ${convertedAmount} MDL`);
    }
}
// Testarea calculatorului cu valorile date
convertCurrency(100, 'USD'); // Output: 100 USD este echivalent cu 1850 MDL
convertCurrency(100, 'EUR'); // Output: 100 EUR este echivalent cu 1950 MDL
convertCurrency(100, 'RON'); // Output: 100 RON este echivalent cu 480 MDL
convertCurrency(100, 'GBP'); // Output: 100 GBP este echivalent cu 2060 MDL
convertCurrency(100, 'ABC'); // Output: Moneda nu este suportată.
