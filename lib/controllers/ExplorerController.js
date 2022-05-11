const ExplorerService = require("./../services/ExplorerService");
// const FizbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
}

module.exports = ExplorerController;