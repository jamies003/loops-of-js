let reviews = {

  'Avenger Series' : 10,
  'Teen Titan' : 9,
  Alien : 6,
  'X-Men' : 9.5,
  'Justice Leage' : 8.5,
  Predator : 7,
  'Sucide Squad' : 8.0,
  'X-Force' : 7.5

};

for (let movie of Object.keys(reviews)) {
  console.log(movie, reviews[movie]);
}

let ratings = Object.values(reviews);
let total = 0;
for (let nums of ratings) {
  total += nums;
}

let average = total / ratings.length;
console.log(total);
console.log(Math.round(average));