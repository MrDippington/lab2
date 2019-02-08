'use strict';


var counter = 0;
var name = prompt('Hello! Thanks for visiting! What is your name, please?');
console.log(name);
//question 1

function wa() {  
  var waNative = prompt('Hi, ' + name + '! Lets play a guessing game. Do you think I am a Washington native?').toUpperCase();
  console.log(waNative); 


  if (waNative === 'Y' || waNative === 'YES' || waNative === 'Yes') {
    alert('That is correct, ' + name + '!');
    counter++;
  } else {
    alert('Actually, ' + name + ', I grew up in Washington!');
  }
}
wa();
//question 2
function pets() {
  var catDog = prompt('Are cats my favorite?').toUpperCase();
  console.log(catDog);
  if (catDog === 'Y' || catDog === 'YES' || waNative === 'Yes') {
    alert('You know, ' + name + ', I love cats, but dogs are my favorite!');
  } else {
    alert('That is correct, ' + name + ', I would have to say dogs are my favorite!');
    counter++;
  }
}
pets();
//question 3
function maryBerry() {
  var greatBritish = prompt('Do I like the Great British Baking Show?').toUpperCase();
  console.log(greatBritish);
  if (greatBritish === 'Y' || greatBritish === 'YES' || greatBritish === 'Yes') {
    alert('Yep, most definitely!');
    counter++;
  } else {
    alert('What?! You mean nothing to me.');
  }
}
maryBarry();
//question 4
function ben() {
  var iceCream = prompt('Do I consider Phish Food to be the best Ben & Jerry\'s flavor?').toUpperCase();
  console.log(iceCream);
  if (iceCream === 'Y' || iceCream === 'YES' || iceCream === 'Yes') {
    alert('Its delicious, but no! Americone Dream!');
  } else {
    alert('Correct! My favorite is Americone Dream.');
    counter++;
  }
}
ben();
//question 5
function munich() {
  var germany = prompt('Have I ever been to Germany?').toUpperCase();
  console.log(germany);
  if (germany === 'Y' || germany === 'YES' || germany === 'Yes') {
    alert('Yes! Munich! It\'s such a beautiful city!');
    counter++;
  } else {
    alert('Actually, yes, I have! Munich is amazing!');
  }
}
munich();
//question 6
// i represents number of times prompt appears to ask user question
function siblings() {
  var siblings = prompt('How many siblings do I have? Please use numerical values ONLY.');
  console.log(siblings);
  siblings = parseInt(siblings);

  for (var i = 0; i < 3; i++) {

      if (siblings > 2) {
        siblings = prompt('Not quite. Try a little less!');
        console.log(siblings);
        siblings = parseInt(siblings);
      } else if (siblings < 2) {
        siblings = prompt('Not quite. Try a little more.');
        console.log(siblings);
        siblings = parseInt(siblings); 
      } else if (siblings === 2) {
        alert('Correct!');
        counter++;
        console.log(siblings);
        siblings = parseInt(siblings);
        break;
      }  
  }
}
siblings();

// question 7
function Europe() {
  for (var q = 0; q < 7; q++) {

    var countries = ['GERMANY','ITALY','ENGLAND'];

    var eCountries = prompt('Name a country in Europe I have visited.');
    eCountries = eCountries.toUpperCase();

    if (countries.includes(eCountries)) {
      counter++;
      alert('Correct! I have been to Germany, Italy, and England.');
      console.log(eCountries);
      break;
    } else {
      alert('Not quite. Try again!');
      console.log(eCountries);
    }
  }
}
Europe();

alert('You got ' + counter + ' out of 7 correct! Nice work, ' + name + '!');

