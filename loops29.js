var cubes = [
  [1, 2, 3],
  [4, 5, 6],    
  [7, 8, 9],
 ];
 
 for(let i = 0; i < cubes.length; i++) {
     let iceCube = cubes[i];
     for(var j = 0; j < iceCube.length; j++) {
         console.log("iceCube[" + i + "][" + j + "] = " + iceCube[j]);
     }
 }