const { expect } = require("chai"); 
const { caesar } = require("../src/caesar");


describe("caesar()", () => {
    it("should return false if shift value is zero", () => {
        const expected = false; 
        const actual = caesar("Hello", 0);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is less than -25", () => {
        const expected = false; 
        const actual = caesar("Hello", -26);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is more than 25", () => {
        const expected = false; 
        const actual = caesar("Hello", 26);
        expect(actual).to.equal(expected);
    });

    it("should correctly shift letters forward when encoding", () => {
        const expected = "khoor";
        const actual = caesar("hello", 3);
        expect(actual).to.equal(expected);
    });

    it("should correctly shift letters backward when decoding", () => {
        const expected = "hello";
        const actual = caesar("khoor", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols when encoding", () => {
        const expected = "khoor, zruog!";
        const actual = caesar("hello, world!", 3);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols when decoding", () => {
        const expected = "hello, world!";
        const actual = caesar("khoor, zruog!", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = "khoor";
        const actual = caesar("HELLO", 3);
        expect(actual).to.equal(expected);
    });
});
