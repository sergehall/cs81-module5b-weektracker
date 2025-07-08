// A custom higher-order function that filters the week based on a test function
function filterByCondition(week, testFn) {
  return week.filter(testFn);
  // testFn is a callback like: entry => entry.hoursSpent < 1 && entry.enjoyment > 8
}

module.exports = { filterByCondition };
