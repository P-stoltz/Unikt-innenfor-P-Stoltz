for (let i = 1; i <= 50; i += 1){
    if (i % 3 === 0 & i % 5 === 0) {
        console.log(i + "Fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log(i + "Fizz")
    } 
    else if (i % 5 === 0) {
        console.log(i + "buzz")
    }
    else {

    }
}

function kalkuler(tall1, tall2, operasjon) {
    switch (operasjon) {
        case '+':
            return tall1 + tall2;
        case '-':
            return tall1 - tall2;
        case '*':
            return tall1 * tall2;
        case '/':
            return tall2 !== 0 ? tall1 / tall2 : 'Kan ikke dele på 0';
        default:
            return 'Ugyldig operasjon';
    }
}

// Eksempelbruk
const resultat = kalkuler(8, 4, '*');
console.log(resultat); // Skriver ut 32
