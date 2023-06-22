const substitutionModule = (function () {
  const standardAlpha = "abcdefghijklmnopqrstuvwxyz"; // standard alphabet for reference

  function substitution(input, alphabet, encode = true) {
    let set = new Set(alphabet); // convert sub alphabet to set to check for unique characters

    // return false if sub alphabet does not contain 26 unique characters
    if (set.size !== 26 || alphabet.length !== 26) {
      return false; 
    }

    const lowerInput = input.toLowerCase(); // ignore capital letters by converting input to lower case
    let result = ""; // variable to store the result

    // if encode is true
    if(encode) {
      // loop through each character of input
      for(let char of lowerInput) {
        if(char === " ") {
          result += char; // maintain spaces
        } else {
          // find the index of char in standardAlpha
          // use that index to find the corresponding character in alphabet
          // add that character to result
          let index = standardAlpha.indexOf(char);
          result += alphabet.charAt(index);
        }
      }
    } 
    // if encode is false
    else {
      // loop through each character of input
      for(let char of lowerInput) {
        if(char === " ") {
          result += char; // maintain spaces
        } else {
          // find the index of char in alphabet
          // use that index to find the corresponding character in standardAlpha
          // add that character to result
          let index = alphabet.indexOf(char);
          result += standardAlpha.charAt(index);
        }
      }
    }

    return result; // return the encoded or decoded result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
