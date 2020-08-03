let hours = [
  [4, 8, 2, 1],
  [3, 12, 24, 9],
  [48,12,7]
];
for (let i = 0; i < hours.length; i++) {
  console.log("Weekly #'s " + i) 

  for (let j = 0; j < hours[i].length; j++) {
     console.log(i, j, hours[i][j])
  }
}