// Calculates average enjoyment for activities done in the evening
function getAverageEveningEnjoyment(week) {
  const eveningActivities = week.filter(entry => entry.timeOfDay === "evening");
  const totalEnjoyment = eveningActivities.reduce((sum, entry) => sum + entry.enjoyment, 0);
  return (eveningActivities.length > 0)
    ? (totalEnjoyment / eveningActivities.length).toFixed(1)
    : 0;
}

// Export the function for use in index.js
module.exports = { getAverageEveningEnjoyment };
