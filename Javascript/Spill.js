function sumArray(numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length; i += 1){
        console.log(numbers[i])
        sum = sum + numbers[i]
    }
    return sum
}

let list = [1, 2, 3, 4, 5];
console.log(sumArray(list))
