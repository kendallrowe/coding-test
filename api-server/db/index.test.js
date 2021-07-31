const client = require("./index");

describe("Database mock client class returns URL lists", () => {

    test("if cats query returns in array format and if array recieved, that string values are found", () => {
        const data = client.query("cats")
        
        expect(Array.isArray(data) && data.length > 0 && typeof(data[0]) === "string").toBe(true);
        
    });

    test("if sharks query returns in array format and if array recieved, that string values are found", () => {
        const data = client.query("sharks")
        
        expect(Array.isArray(data) && data.length > 0 && typeof(data[0]) === "string").toBe(true);
        
    });
});