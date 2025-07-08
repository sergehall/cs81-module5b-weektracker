const { getTotalHoursByCategory } = require("./tracker-functions/getTotalHoursByCategory.js");
const { getAverageEveningEnjoyment } = require("./tracker-functions/getAverageEveningEnjoyment.js");
const { getHighEnjoymentLowEffortActivities } = require("./tracker-functions/getHighEnjoymentLowEffortActivities.js");

module.exports = {
  getTotalHoursByCategory,
  getAverageEveningEnjoyment,
  getHighEnjoymentLowEffortActivities,
};
