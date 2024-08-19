// Functia pentru calculul BMI si evaluarea categoriei, greutatea divizata la patratul inaltimei
function calculateBMI(weight, height) {
    // Calculăm BMI-ul
    const bmi = weight / (height * height);

    let category;
    if (bmi < 18.5) {
        category = "subponderal";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        category = "supraponderal";
    } else {
        category = "obez";
    }

    // Afișăm rezultatul
    console.log(`BMI-ul este ${bmi.toFixed(2)} și este în categoria: ${category}.`);
}

calculateBMI(70, 1.85); // Greutate în kg, înălțime în metri
calculateBMI(50, 1.50);
calculateBMI(90, 1.75);
calculateBMI(60, 1.70);
