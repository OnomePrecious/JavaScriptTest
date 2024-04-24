let increaseScores = require("./increaseScores");
test("Increase students score by 5", () => {
    let studentScores = [85, 92, 78, 88, 95];
    let increasedScores = increaseScores(studentScores);

    expect(increasedScores).toEqual([90, 97, 83, 93, 100]);



});