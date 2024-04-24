let classTimings = require("./classTimings.js");

test("find afternoon ", () => {
    let timings = ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm", "5:00 pm"];
    let answer = classTimings(timings);

    expect(answer).toEqual(['1:00 pm', '3:00 pm', '5:00 pm']);

});
