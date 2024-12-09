let a = [1, 2, 3, 4, 6];

function kul(s) {
    let b = ''; // Start med en tom streng
    for (let i = 0; i < s.length; i += 2) { // Gå gjennom hvert andre element i arrayet
        b = b + s[i]; // Bruk elementene fra input-arrayet s
    }
    return b; // Returner den ferdige strengen
}

console.log(kul(a)); // Kaller funksjonen med arrayet 'a' som input
