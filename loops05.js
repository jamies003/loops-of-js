let gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
  let gameRows = gameBoard[i];
  // console.log(gameRows[i]);
  for (let j = 0; i < gameRows[i].length; i ++) {

    totalScore += gameRows[i][j];

    // console.log(gameRows[j]);
  }
}

console.log(totalScore);
console.log(gameBoard[i][j]);

