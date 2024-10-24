const palindromes = function (str) {
  //have to check for case sensitivity.
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, "");

  //splits str
  const splitStr = str.split("");
    // reverses str
  const reverseStr = splitStr.reverse("");
    // joins str
  const joinStr = reverseStr.join("");
    //checks whetehr its the same back and the same forward. 
  if (str === joinStr) {
    console.log("This is a Palindrome");
    return "This is a Palindrome";
  } else {
    return "This is NOT a Palindrome";
  }
};

console.log(palindromes("DAD"));

// Do not edit below this line
module.exports = palindromes;
