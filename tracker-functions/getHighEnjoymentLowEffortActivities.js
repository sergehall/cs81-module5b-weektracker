// Returns names of activities with low effort (< 1.5 hrs) and high enjoyment (> 7)
function getHighEnjoymentLowEffortActivities(week) {
  return week
    .filter(entry => entry.hoursSpent < 1.5 && entry.enjoyment > 7)
    .map(entry => entry.activity); // return just the activity names
}

// Export the function for use in index.js
module.exports = { getHighEnjoymentLowEffortActivities };
