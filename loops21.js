let output = [];

function fizzyYay () {

  for (let i = 1; i < 101; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      output.push('fizzyYay');
    } else if (i % 3 === 0) {
      output.push('fizzy');
    } else if (i % 5 === 0) {
      output.push('Yay');
    } else {
      output.push(i);
    }
  }
  console.log(output);
}

console.log(fizzyYay());