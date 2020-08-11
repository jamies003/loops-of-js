//Captitalize the first letter in each word "I'm a little tea pot"

let quote = "I'm a little tea pot";

for ( let i = 0; i < quote.length; i++ ) {
  quote[i] = quote[i].charAt(0).toUpperCase() + quote[i].slice(1);;
  console.log(quote[i]);
}