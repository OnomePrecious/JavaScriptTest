let expenseTracker = require("./expenseTracker");

test("Total amount of expenses", () => {
    let expenses = [150, 100, 50, 80];
    let totalExpenses = expenseTracker(expenses);

    expect(totalExpenses).toBe(380);



});