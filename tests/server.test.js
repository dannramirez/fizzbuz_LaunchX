const supertest = require("supertest");
const {
    app,
    server
} = require("./../lib/server.js");
const request = supertest(app);

afterAll(() => {
    server.close();
});

describe("Test endpoint responses", () => {

    test("gets the / endpoint", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "message": "FizzBuzz API Welcome"
        });
    });

    test("Gets the Explorers in node mission with /v1/explorers/:mission endpoint", async () => {
        const response = await request.get("/v1/explorers/node");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([{
            "githubUsername": "ajolonauta1",
            "mission": "node",
            "name": "Woopa1",
            "score": 1,
            "stacks": ["javascript", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta2",
            "mission": "node",
            "name": "Woopa2",
            "score": 2,
            "stacks": ["javascript", "groovy", "elm"]
        }, {
            "githubUsername": "ajolonauta3",
            "mission": "node",
            "name": "Woopa3",
            "score": 3,
            "stacks": ["elixir", "groovy", "reasonML"]
        }, {
            "githubUsername": "ajolonauta4",
            "mission": "node",
            "name": "Woopa4",
            "score": 4,
            "stacks": ["javascript"]
        }, {
            "githubUsername": "ajolonauta5",
            "mission": "node",
            "name": "Woopa5",
            "score": 5,
            "stacks": ["javascript", "elixir", "elm"]
        }, {
            "githubUsername": "ajolonauta11",
            "mission": "node",
            "name": "Woopa11",
            "score": 11,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta12",
            "mission": "node",
            "name": "Woopa12",
            "score": 12,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta13",
            "mission": "node",
            "name": "Woopa13",
            "score": 13,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta14",
            "mission": "node",
            "name": "Woopa14",
            "score": 14,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }, {
            "githubUsername": "ajolonauta15",
            "mission": "node",
            "name": "Woopa15",
            "score": 15,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]
        }]);
    });

    test("Gets the Amount of explorers in Node mission with /v1/explorers/amount/:mission endpoint", async () => {
        const response = await request.get("/v1/explorers/amount/node");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "mission": "node",
            "quantity": 10,
        });
    });

    test("Gets the name of explorers in node mission with /v1/explorers/usernames/:mission endpoint", async () => {
        const response = await request.get("/v1/explorers/usernames/node");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "mission": "node",
            "quantity": [
                "ajolonauta1",
                "ajolonauta2",
                "ajolonauta3",
                "ajolonauta4",
                "ajolonauta5",
                "ajolonauta11",
                "ajolonauta12",
                "ajolonauta13",
                "ajolonauta14",
                "ajolonauta15",
            ],
        });
    });
});



describe("Test for FIZZBUZZ validation from a given service", () => {

    test("Test 1 to apply Validation In a given number (1)", async () => {
        const response = await request.get("/v1/fizzbuzz/1");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "score": 1,
            "trick": 1
        });
    });

    test("Test 2 to apply Validation In a given number (3)", async () => {
        const response = await request.get("/v1/fizzbuzz/3");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "score": 3,
            "trick": "FIZZ"
        });
    });

    test("Test 3 to apply Validation In a given number (5)", async () => {
        const response = await request.get("/v1/fizzbuzz/5");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "score": 5,
            "trick": "BUZZ"
        });
    });

    test("Test 4 to apply Validation In a given number (15)", async () => {
        const response = await request.get("/v1/fizzbuzz/15");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            "score": 15,
            "trick": "FIZZBUZZ"
        });
    });

    test("Test 5 to apply Validation In a given number (100)", async () => {
        const response = await request.get("/v1/fizzbuzz/NA");
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            score: "Not apply",
            trick: "Can't evalute when not a number"
        });
    });

});