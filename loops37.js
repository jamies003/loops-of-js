let numbers = [
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80]];
  
  for(let i = 0; i < numbers.length ; i++ ) {
    for(let j = 0 ; j < numbers[i].length; j++) {
      
      if (numbers[i][j] % 2 === 0) {
        numbers[i][j] = "even";
  }else
  numbers[i][j] = "odd";
}
}
console.log(numbers);