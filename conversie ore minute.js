// Definim funcția principală convertMinutes
function convertMinutes(totalMinutes) {
    // Funcția internă pentru a extrage numărul de ore
    function extractHours(minutes) {
        return Math.floor(minutes / 60);
    }
// Funcția internă pentru a extrage minutele rămase
    function extractMinutes(minutes) {
        return minutes % 60;
    }
// Calculăm orele și minutele rămase
    const hours = extractHours(totalMinutes);
    const minutes = extractMinutes(totalMinutes);
    console.log(`${totalMinutes} minute sunt echivalente cu ${hours} ore și ${minutes} minute.`);
}

// Exemple 
convertMinutes(130); // Output: 130 minute sunt echivalente cu 2 ore și 10 minute.
convertMinutes(45);  // Output: 45 minute sunt echivalente cu 0 ore și 45 minute.
