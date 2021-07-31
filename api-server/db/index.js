const catsList = require("./cats-list");
const sharksList = require("./sharks-list");

// Define a Client class to replicate postgres Client. Mocks usage of pg database engine for 
// future compatibility.
class Client {
    query(table) {
        switch (table) {
            case "cats":
                return catsList;
            case "sharks":
                return sharksList;
            default:
                throw new Error(`Tried to grab a table that does not exist ${table}`);
        };
    };
};

const client = new Client()

module.exports = client;