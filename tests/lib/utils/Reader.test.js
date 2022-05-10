const Reader = require("../../../lib/utils/Reader");

describe("Test for Reader utils", () => {
    test("Requirement 1: Test readJsonFile() method to read and get info from file ", () => {
        const explorers = Reader.readJsonFile("./tests/reader_explorers.json");
        expect(explorers).toStrictEqual([{
            "name": "TestWoopa1",
            "githubUsername": "Testjolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "TestWoopa2",
            "githubUsername": "Testjolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "javascript",
                "groovy",
                "elm"
            ]
        }
        ]);
    });
});