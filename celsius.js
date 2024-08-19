function fahrenheitToCelsius(fahrenheit) {
    // Aplicăm formula de conversie
    const celsius = (fahrenheit - 32) * 5 / 9;
    // Returnăm valoarea în grade Celsius
    return celsius;
}

// ca exemplu
const tempFahrenheit = 100;
const tempCelsius = fahrenheitToCelsius(tempFahrenheit);
console.log(`${tempFahrenheit}°F este echivalent cu ${tempCelsius.toFixed(2)}°C`);

// rezultat in console.log : 100°F este echivalent cu 37.78°C