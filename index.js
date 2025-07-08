const { getTotalHoursByCategory } = require("./tracker-functions/getTotalHoursByCategory.js");
const { getAverageEveningEnjoyment } = require("./tracker-functions/getAverageEveningEnjoyment.js");
const { getHighEnjoymentLowEffortActivities } = require("./tracker-functions/getHighEnjoymentLowEffortActivities.js");
const { filterByCondition } = require("./tracker-functions/filterByCondition.js");

module.exports = {
  getTotalHoursByCategory,
  getAverageEveningEnjoyment,
  getHighEnjoymentLowEffortActivities,
  filterByCondition,
};
