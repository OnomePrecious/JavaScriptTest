classTimings = ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm", "5:00 pm"];

function planSchedule(timings){
                return timings.filter(time => time.includes("pm"));

            }
        

              //console.log(planSchedule(classTimings));
              module.exports = planSchedule;

