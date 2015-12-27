describe("Hello world", function () {
    it("says hello", function () {
        expect(helloWorld()).toContain("world");
    });
});

describe("Disemvoweler", function () {
    
    it("should remove all lowercase vowels", function () {
        expect(disemvowel("Hello World")).toEqual("Hll Wrld");
    });
    
    it("should remove all uppercase vowels", function () {
        expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
    });
    
    it("shouldn't change empty strings", function () {
        expect(disemvowel("")).toBeFalsy();
    });
    
    it("shouldn't change strings with no vowels", function () {
        expect(disemvowel("Mhmm")).toEqual("Mhmm");
    });
})