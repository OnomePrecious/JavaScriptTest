let testScores = require("./testScores.js");

test("finding scores >= 70", () => {
    let scores = [34, 67, 85, 43, 23, 67, 87, 65, 54, 32];

    let answer = testScores(scores);

    expect(answer).toEqual([85, 87]);

});
