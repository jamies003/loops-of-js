let activities = [['baseball', 'soccer', 'hockey'], ['hiking', 'cycleing', 'swimming'],
['fishing', 'skiing', 'Rock-Climbing']];

for (let i = 0; i < activities.length; i++) {
  // get the size of the inner array
  let innerArrayLength = activities[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
      console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
  }
}