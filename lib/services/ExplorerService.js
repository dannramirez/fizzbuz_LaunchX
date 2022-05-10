class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

}

module.exports = ExplorerService;