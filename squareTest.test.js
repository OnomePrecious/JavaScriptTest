let square = require("./square.js");

test("square of each number in a list", () => {
    let numbers = [2, 4, 6, 8, 10];
    let answer = square(numbers);

    expect(answer).toEqual([4, 16, 36, 64, 100]);

});
