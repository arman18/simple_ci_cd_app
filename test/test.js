const request = require("supertest");
const app = require("../server");

describe("GET /adding two numbers 10+5", () => {
    it("Responds should 15", (done) => {
        request(app).get("/add?num1=10&num2=5").expect("15", done);
    })
});