const { expect } = require("chai"); 
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const expected = false; 
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(expected);
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });

    it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = 'jrufscpw';
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
});

