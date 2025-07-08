const { myWeek } = require("./activityData.js");
const {
  getTotalHoursByCategory,
  getAverageEveningEnjoyment,
  getHighEnjoymentLowEffortActivities,
} = require("./index.js");

console.log("Analyzing My Weekly Activities...\n");

console.log("Total hours spent on physical activities:", getTotalHoursByCategory(myWeek, "physical"));

console.log("Average enjoyment in the evening:", getAverageEveningEnjoyment(myWeek));

console.log("Low-effort, high-enjoyment activities:", getHighEnjoymentLowEffortActivities(myWeek).join(", "));
