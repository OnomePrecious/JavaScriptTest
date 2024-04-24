expenseTracker = [150, 100, 50, 80];

 function track(numbers){
let result = 0;
for(const index in numbers){
    result += numbers[index];
}
return result;
 }
 module.exports = track;
