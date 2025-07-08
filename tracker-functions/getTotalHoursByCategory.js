// Returns the total hours spent on a given activity category (e.g. physical, creative, social)
function getTotalHoursByCategory(week, categoryName) {
  return week
    .filter(entry => entry.category === categoryName)       // keep only matching category
    .reduce((sum, entry) => sum + entry.hoursSpent, 0);     // sum the hours
}

// Export the function for use in index.js
module.exports = { getTotalHoursByCategory };
