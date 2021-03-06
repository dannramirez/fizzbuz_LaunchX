const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");
const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({
        message: "FizzBuzz API Welcome"
    });
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({
        mission: request.params.mission,
        quantity: explorersAmountInMission
    });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({
        mission: request.params.mission,
        quantity: explorersUsernamesInMission
    });
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = Number(request.params.score);
    if (isNaN(score)) {
        response.json({
            score: "Not apply",
            trick: "Can't evalute when not a number"
        });
    }
    const scoreValidation = ExplorerController.applyValidationInNumber(score);
    response.json({
        score: score,
        trick: scoreValidation
    });
});

const server = app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});

module.exports = {
    app,
    server
};