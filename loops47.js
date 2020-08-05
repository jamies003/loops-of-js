function checkCount (str) {

  let object = {};

  for (let i = 0; i < str.lenght; i ++) {
    let point = str[i].toLowerCase();
    if (/[1-10]/.test(point)) {
      if(object[point] > 0) {
        object[point]++;
      } else {
        object[point] = 1;1
      };
    }

  }
  return object;
}

checkCount("Let's check on Quality");
console.log(object)