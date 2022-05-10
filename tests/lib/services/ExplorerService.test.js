const ExplorerService = require("./../../../lib/services/ExplorerService");
const Reader = require("./../../../lib/utils/Reader");
const explorers = Reader.readJsonFile('./tests/test_explorers.json');

describe('Test for ExplorerService', () => {
    test('Requirement 1: Filter explorers by mission', () => {
        const explorersByMission = ExplorerService.filterByMission(explorers, 'node');
        expect(explorersByMission).toStrictEqual([{
            "githubUsername": "Testjolonauta1",
            "mission": "node",
            "name": "TestWoopa1",
            "score": 1,
            "stacks": ["javascript", "reasonML", "elm"]
        }, {
            "githubUsername": "Testjolonauta2",
            "mission": "node",
            "name": "TestWoopa2",
            "score": 2,
            "stacks": ["javascript", "groovy", "elm"]
        }, {
            "githubUsername": "Testjolonauta3",
            "mission": "node",
            "name": "TestWoopa3",
            "score": 3,
            "stacks": ["elixir", "groovy", "reasonML"]
        }, {
            "githubUsername": "Testjolonauta4",
            "mission": "node",
            "name": "TestWoopa4",
            "score": 4,
            "stacks": ["javascript"]
        }, {
            "githubUsername": "Testjolonauta5",
            "mission": "node",
            "name": "TestWoopa5",
            "score": 5,
            "stacks": ["javascript", "elixir", "elm"]
        }]);
    });

    test('Requirement 2: Get quantity of explorerrs in mission', () => {
        const explorersQuantityInMission = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
        expect(explorersQuantityInMission).toBe(5);
    });

    test('Requirement 3: Get name of explorerrs in mission', () => {
        const explorersNameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, 'node');
        expect(explorersNameByMission).toStrictEqual(["Testjolonauta1", "Testjolonauta2", "Testjolonauta3", "Testjolonauta4", "Testjolonauta5"]);
    });

});