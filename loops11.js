let subNums = [[6, 9, 3], [12, 5, 7], [4, 11, 2]];

// for (let i = 0; i < subNums.length; i++) {
//   let nums = subNums[i];
//   let total = 0;
//   for (let j = 0; j < nums.length; i++) {
//     total += nums[j];

//   }
//   console.log(`${nums} summed to ${total}`);
// }

for (let row of subNums) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}