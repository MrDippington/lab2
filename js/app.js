'use strict';
/*var dogs = prompt('How many dogs do I own');

console.log('Number of dogs, ' dogs);

//alert('Number of dogs, ' + dogs);

var guitars = prompt('How many guitars do you have?');

if (guitars === '1') || (guitars === '2') {
  alert('Yes, I have ' + guitars + ' guitars!');
} */



/*var name = prompt('Hello! Thanks for visiting! What is your name, please?');
console.log(name);

var waNative = prompt('Hi, ' + name + '! Lets play a guessing game. Do you think I am a Washington native?').toUpperCase();
console.log(waNative); 


if (waNative === 'Y' || waNative === 'YES' || waNative === 'Yes') {
  alert('That is correct, ' + name + '!');
} else {
  alert('Actually, ' + name + ', I grew up in Washington!');
}

var catDog = prompt('Are cats my favorite?').toUpperCase();
console.log(catDog);
if (catDog === 'Y' || catDog === 'YES' || waNative === 'Yes') {
  alert('You know, ' + name + ', I love cats, but dogs are my favorite!');
} else {
  alert('You know, ' + name + ', I would have to say dogs are my favorite.');
}
var greatBritish = prompt('Do I like the Great British Baking Show?').toUpperCase;
console.log(greatBritish);
if (greatBritish === 'Y' || greatBritish === 'YES' || greatBritish === 'Yes') {
  alert('Yep, most definitely!');
} else {
  alert('What?! You mean nothing to me.');
}
var iceCream = prompt('Do I consider Phish Food to be the best Ben & Jerry\'s flavor?').toUpperCase();
console.log(iceCream);
if (iceCream === 'Y' || iceCream === 'YES' || iceCream === 'Yes') {
  alert('Its delicious, but no! Americone Dream!');
} else {
  alert('Correct! My favorite is Americone Dream.');
}
var germany = prompt('Have I ever been to Germany?').toUpperCase();
console.log(germany);
if (germany === 'Y' || germany === 'YES' || germany === 'Yes') {
  alert('Yes! Munich! It\'s such a beautiful city!');
} else {
  alert('Actually, yes, I have! Munich is amazing!');
}
*/

var siblings = prompt('How many siblings do I have? Please only use numerical values.');
console.log(siblings);
/*if (siblings > 2) {
  alert('Not quite. Try a little less!');
  siblings();
} else if (siblings < 2) {
  alert('Not quite. Try a little more.');
  siblings();
} else if (siblings === 2){
  alert('Correct!');

}*/
console.log(parseInt(siblings));
while (siblings !== 2) {
  if (siblings > 2) {

    siblings = prompt('Not quite. Try a little less!');
    console.log(siblings);
    siblings = parseInt(siblings);
  } else if (siblings < 2) {
    siblings = prompt('Not quite. Try a little more.');
    console.log(siblings);
    siblings = parseInt(siblings);
  } else if (siblings !== )
  } else {
    alert('Correct!');
    console.log(siblings);
    // siblings = parseInt(siblings); start here
  } 
}
