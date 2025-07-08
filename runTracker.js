const { myWeek } = require("./activityData.js");
const {
  getTotalHoursByCategory,
  getAverageEveningEnjoyment,
  getHighEnjoymentLowEffortActivities,
  filterByCondition
} = require("./index.js");

console.log("Analyzing My Weekly Activities...\n");

console.log("Total hours spent on physical activities:", getTotalHoursByCategory(myWeek, "physical"));

console.log("Average enjoyment in the evening:", getAverageEveningEnjoyment(myWeek));

const lowEffort = getHighEnjoymentLowEffortActivities(myWeek);
console.log(
  "Low-effort, high-enjoyment activities:",
  lowEffort.length > 0 ? lowEffort.join(", ") : "(none found)"
);

const customFiltered = filterByCondition(myWeek, entry => entry.hoursSpent < 1.5 && entry.enjoyment > 8);

console.log(
  "Filtered custom (short + fun) activities:",
  customFiltered.length > 0
    ? customFiltered.map(e => e.activity).join(", ")
    : "(no matches)"
);
