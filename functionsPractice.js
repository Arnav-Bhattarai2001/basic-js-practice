// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const counter = (statement) => {
  const vowels = /[aeiouAEIOU]/g;
  const text = String(statement);
  const match = text.match(vowels);
  return match.length;
  //   const result = match ? match.length : 0;
  //   return result;
};
const number = counter("The quick brown fox");
console.log(number);

// const counter = (statement) => String(statement).match(vowels).

//Write a JavaScript function to get the number of occurrences of each letter in a specified string.

const count = 1;
const numberOfalphabets = (sentence) => {
  const alphabets = /[abcdefghijklmnopqrstuvwxyz]/g;
  const text = String(sentence);
  const text1 = text.toLowerCase();
  const match = text1.match(alphabets);
  return ;
};
 
