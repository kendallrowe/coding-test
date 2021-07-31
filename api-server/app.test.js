const request = require("supertest");
const app = require("./app");

describe("Test the cats API endpoint", () => {
  test("if response 200 is received when connecting to endpoint", () => {
    return request(app)
      .get("/api/cats")
      .expect(200);
  });

  test("if response is in array format and if array recieved, that values are found", () => {
    return request(app)
      .get("/api/cats")
      .then(res => {
        const data = res.body
        expect(Array.isArray(data) && data.length > 0 && typeof(data[0]) === "string");
      });
  });
});

describe("Test the sharks API endpoint", () => {
  test("if response 200 is received when connecting to endpoint", () => {
    return request(app)
      .get("/api/sharks")
      .expect(200);
  });

  test("if response is in array format and if array recieved, that values are found", () => {
    return request(app)
      .get("/api/sharks")
      .then(res => {
        const data = res.body
        expect(Array.isArray(data) && data.length > 0 && typeof(data[0]) === "string");
      });
  });
});