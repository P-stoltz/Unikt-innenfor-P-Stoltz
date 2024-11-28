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
}
