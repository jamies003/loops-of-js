// nextNumber = current + previous

let numberArray = [1,2];

for (let i = 1; i < 11; i++) {
    numberArray.push(numberArray[i] + numberArray[i - 1 ] )
    
}
console.log(numberArray)
