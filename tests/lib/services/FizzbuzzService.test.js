const FizbuzzService = require("./../../../lib/services/FizzbuzzService");
const Reader = require("./../../../lib/utils/Reader");
const explorers = Reader.readJsonFile("./tests/test_explorers.json");

describe("Test for Fizbuzz Service", () => {
    test("Test to apply Validation In Explorer", () => {
        const explorersValidation = explorers.map((explorer) => {
            return FizbuzzService.applyValidationInExplorer(explorer);
        });

        expect(explorersValidation).toStrictEqual([{
            "githubUsername": "Testjolonauta1",
            "mission": "node",
            "name": "TestWoopa1",
            "score": 1,
            "stacks": ["javascript", "reasonML", "elm"],
            "trick": 1
        }, {
            "githubUsername": "Testjolonauta2",
            "mission": "node",
            "name": "TestWoopa2",
            "score": 3,
            "stacks": ["javascript", "groovy", "elm"],
            "trick": "FIZZ"
        }, {
            "githubUsername": "Testjolonauta3",
            "mission": "node",
            "name": "TestWoopa3",
            "score": 5,
            "stacks": ["elixir", "groovy", "reasonML"],
            "trick": "BUZZ"
        }, {
            "githubUsername": "Testjolonauta4",
            "mission": "node",
            "name": "TestWoopa4",
            "score": 9,
            "stacks": ["javascript"],
            "trick": "FIZZ"
        }, {
            "githubUsername": "Testjolonauta5",
            "mission": "node",
            "name": "TestWoopa5",
            "score": 12,
            "stacks": ["javascript", "elixir", "elm"],
            "trick": "FIZZ"
        }, {
            "githubUsername": "Testjolonauta6",
            "mission": "java",
            "name": "TestWoopa6",
            "score": 15,
            "stacks": ["elm"],
            "trick": "FIZZBUZZ"
        }, {
            "githubUsername": "Testjolonauta7",
            "mission": "java",
            "name": "TestWoopa7",
            "score": 20,
            "stacks": [],
            "trick": "BUZZ"
        }, {
            "githubUsername": "Testjolonauta8",
            "mission": "java",
            "name": "TestWoopa8",
            "score": 26,
            "stacks": ["elm"],
            "trick": 26
        }, {
            "githubUsername": "Testjolonauta9",
            "mission": "java",
            "name": "TestWoopa9",
            "score": 30,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"],
            "trick": "FIZZBUZZ"
        }, {
            "githubUsername": "Testjolonauta10",
            "mission": "java",
            "name": "TestWoopa10",
            "score": 516,
            "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"],
            "trick": "FIZZ"
        }]);
    });

    test("Test 1 to apply Validation In a given number (1)", function () {
        const result = FizbuzzService.applyValidationInNumber(1);
        expect(result).toBe(1);
    });

    test("Test 2 to apply Validation In a given number(3)", function () {
        const result = FizbuzzService.applyValidationInNumber(3);
        expect(result).toBe("FIZZ");
    });

    test("Test 1 to apply Validation In a given number(5)", function () {
        const result = FizbuzzService.applyValidationInNumber(5);
        expect(result).toBe("BUZZ");
    });

    test("Test 1 to apply Validation In a given number(15)", function () {
        const result = FizbuzzService.applyValidationInNumber(15);
        expect(result).toBe("FIZZBUZZ");
    });

    test("Test 1 to apply Validation In a given number(90)", function () {
        const result = FizbuzzService.applyValidationInNumber(90);
        expect(result).toBe("FIZZBUZZ");
    });


});