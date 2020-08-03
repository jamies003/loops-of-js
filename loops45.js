let topClass = [['class 1', 'class 0', 'class 1'],
['class 2', 'class 3', 'class 1']];

for(let i = 0; i < topClass.length; i++) {
	for(let j = 0; j < topClass[i].length; j++){

  // console.log(topClass[i][j]);
  
    if (topClass[i][j] === 'class 1')
     topClass[i].splice(j, 1);
  }
}
console.log(topClass);