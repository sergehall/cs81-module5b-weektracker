// Weekly activity tracker - my personal log for 7 days

const myWeek = [
  {
    day: "Monday",
    activity: "Jogging",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 7,
    timeOfDay: "morning",
  },
  {
    day: "Tuesday",
    activity: "Painting",
    category: "creative",
    hoursSpent: 2,
    enjoyment: 9,
    timeOfDay: "afternoon",
  },
  {
    day: "Wednesday",
    activity: "Video Call with Friends",
    category: "social",
    hoursSpent: 1.5,
    enjoyment: 8,
    timeOfDay: "evening",
  },
  {
    day: "Thursday",
    activity: "Reading",
    category: "creative",
    hoursSpent: 1.2,
    enjoyment: 6,
    timeOfDay: "evening",
  },
  {
    day: "Friday",
    activity: "Cycling",
    category: "physical",
    hoursSpent: 2,
    enjoyment: 8,
    timeOfDay: "morning",
  },
  {
    day: "Saturday",
    activity: "Watching Movie",
    category: "social",
    hoursSpent: 2.5,
    enjoyment: 7,
    timeOfDay: "evening",
  },
  {
    day: "Sunday",
    activity: "Cooking",
    category: "creative",
    hoursSpent: 1.5,
    enjoyment: 9,
    timeOfDay: "afternoon",
  }
];

// --- Predictions before analysis ---

// 1. I think "Painting" or "Cooking" will have the highest enjoyment rating.
// 2. The "creative" category seems to dominate my week with 3 activities.
// 3. I suspect that I enjoy activities more in the evening, especially social ones.

module.exports = { myWeek };
