const polybiusModule = (function () {
  // Encoding table
  const encodeKey = {
    a: "11", b: "21", c: "31", d: "41", e: "51",
    f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
    l: "13", m: "23", n: "33", o: "43", p: "53",
    q: "14", r: "24", s: "34", t: "44", u: "54",
    v: "15", w: "25", x: "35", y: "45", z: "55",
  }
  // Decoding table
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }

  function polybius(input, encode = true) {
    let resultText = ""; // This will store the final encoded/decoded message
    input = input.toLowerCase(); // Convert the input to lowercase

    if(encode){
      // Encoding process
      for(let char of input){
        if(char === " "){
          // Spaces are maintained as is
          resultText += char;
        } else if(encodeKey[char]) {
          // Translate letters to their number pair from encodeKey
          resultText += encodeKey[char];
        }
      }
    } else {
      // Decoding process
      // Check if the length of all numbers is odd (excluding spaces)
      if(input.replace(/ /g,"").length % 2 !== 0) return false;

      // Go through each character pair in the input
      for(let i=0; i<input.length; i+=2){
        if(input[i] === " "){
          // Spaces are maintained as is
          resultText += " ";
          i--; // sub the index to handle the space
        } else {
          // Translate number pair to their letter from decodeKey
          let code = input[i] + input[i+1];
          if(decodeKey[code]) {
            resultText += decodeKey[code];
          } else {
            return false; // Return false if the code does not exist in decodeKey
          }
        }
      }
    }
    // Return the final string
    return resultText;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
