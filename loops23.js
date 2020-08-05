let myarray = ['a-c', 'a-7', 'a-b', 'a-2', 'a-3', 'a-z'];

for (let i = 0; i < myarray.length; i++) {
  if (i === 3)
  break;

  console.log(`index ${i}, value ${myarray[i]}`);

}