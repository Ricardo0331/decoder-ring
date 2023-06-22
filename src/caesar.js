const caesarModule = (function () {
  
  function shiftChar(char, shift, encode) {
    const charToASC = char.charCodeAt(0);
    let charIndex = charToASC - 97;

    if (!encode) {
      shift = -shift;
    }

    let shiftedIndex = (charIndex + shift + 26) % 26; // Wraps shiftedIndex within [0, 25]
    
    let shiftedASC = shiftedIndex + 97;
    let shiftedChar = String.fromCharCode(shiftedASC);
    
    return shiftedChar;
  }

  function caesar(input, shift, encode = true) {
    
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
   
    const lowerInput = input.toLowerCase(); 

    let result = [];

    for (let lowerInputs of lowerInput) {
      if(lowerInputs.match(/[a-z]/)) {
        result.push(shiftChar(lowerInputs, shift, encode));
      } else {
        result.push(lowerInputs);
      }
    }

    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
