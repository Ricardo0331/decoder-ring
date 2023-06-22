const { expect } = require("chai"); 
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it("should translate both 'i' and 'j' to 42 when encoding", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to '(i/j)' when decoding", () => {
        const expected = "(i/j)(i/j)";
        const actual = polybius("4242", false);
        expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
        const expected = "42 42";
        const actual = polybius("i j");
        expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd when decoding", () => {
        const expected = false;
        const actual = polybius("12345", false);
        expect(actual).to.equal(expected);
    });

    it("should correctly encode a message by translating each letter to number pairs", () => {
        const expected = "3251131343";
        const actual = polybius("hello");
        expect(actual).to.equal(expected);
    });

    it("should correctly decode a message by translating each pair of numbers into a letter", () => {
        const expected = "hello";
        const actual = polybius("3251131343", false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = "3251131343";
        const actual = polybius("HELLO");
        expect(actual).to.equal(expected);
    });
});

