const newItem = [['item 1', 'item 0', 'item 1'],
['item 2', 'item 3', 'item 1'], ['item 4', 'item 3', 'item 1']];

for(let i = 0; i < newItem.length; i++) {
	for(let j = 0; j < newItem[i].length; j++){

  // console.log(newItem[i][j]);
  
    if (newItem[i][j] === 'item 1')
     newItem[i].splice(j, 1);
  }
}
console.log(newItem);