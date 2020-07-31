let temps = [
  [35, 28, 29, 31],
  [33, 24, 25, 29],
  [43,45,47]
];
for (let i = 0; i < temps.length; i++) {
  console.log("Row #" + i) 

  for (let j = 0; j < temps[i].length; j++) {
     console.log(i, j, temps[i][j])
  }
}