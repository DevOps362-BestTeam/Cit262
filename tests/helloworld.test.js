import HelloWorld from "../utils/HelloWorld.js";

it("Should return 'Hello Julio'", () => {
   
    const result = HelloWorld();
    expect(result).toBe("Hello Julio");
});