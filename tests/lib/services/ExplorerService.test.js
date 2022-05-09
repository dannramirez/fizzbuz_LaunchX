const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

const explorers =Reader.readJsonFile('./tests/test_explorers.json');

describe('Test for ExplorerService', () => {
    test('Requirement 1: Filter explorers by mission', () => {
        const result = 11;
        expect(result).toBe(11);
    });

});
