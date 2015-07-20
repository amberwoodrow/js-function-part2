// numbers 1 - 3 group work with Yusef Marra.

// 1.
console.log("---OldestPerson---");
var people = {
  'Betty': 20,
  'Brian': 42,
  'Noah': 7895,
  'Bobby': 2
};

function oldestPerson (list){
  var oldestAge = 0; // stores the oldest age
  var oldestName = ""; // stores the oldest person's name
  for(i in list) {
    if (list[i] > oldestAge) { // calculates the oldest age
      oldestAge = list[i]; // pushes the the greatest age to be storaged
      oldestName = i; // pushes the greatest age's name
    }
  }
  return "The oldest is: " + oldestName + "! all the contestants that entered were "
   + JSON.stringify(people); // returns by name
}
console.log(oldestPerson(people));


// 2. and 3.
console.log("---Longest word with no punctuation---")
var string = "This is us doing a programming exercise!"

function longestWord (str) {
  var array = str.split(" "); // str to array
  var longestWordOfString = ""; // stores the longest word of the array
  for (i in array) { // iterates through array
    array[i] = array[i].replace(/[^A-Za-z0-9 ]/g, ''); // replaces punctuation with an empty string.
    if (longestWordOfString.length < array[i].length) { // calulates longest word
      longestWordOfString = array[i]; // pushes string to longestWordOfString
    }
  }
  return "Original string with no punctuation: '" + array.join(" ") + "'\nLongest word: "
   + longestWordOfString;
}
console.log(longestWord(string));


Now homework to finish on our own.
4.
console.log("---Factorial---")
function factorial (num) {
  var factorialSum = 1;
  if (num === 0) {
    factorialSum = 1;
  }else {
    for (i=1; i<=num; i++) {
      factorialSum = factorialSum * i;
    }
  }
  return "!" + num + " is: " + factorialSum;
}

// Pete Jeffryes Solution for #4 Factorial, using recursion
function factorial (n) {
  if(n === 0){
    return 0;
  } else {
    return (n * factorial(n-1));
  }
};
console.log(factorial(5));


console.log(factorial(3));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(10));

5.
console.log("---Palindrome---");
function palindrome(str) {
  var strCopy = str.split("").reverse().join("");
  if (str === strCopy){
    return true + "! '" + str + "' spelled backwards is '" + str + "'";
  } else {
    return false + "! '" + str + "' spelled backwards is not '" + strCopy + "'";
  }
}

console.log(palindrome("Hello my name is Amber"));
console.log(palindrome("racecar"));
