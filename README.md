# CS81 Module 5B – My Week in Data

This project is part of **Module 5 Assignment 5B** for Santa Monica College's CS81 JavaScript Programming course.  
It focuses on analyzing real-world weekly activities using JavaScript, particularly with the array methods `map()`, `filter()`, and `reduce()`.

---

## Repository Structure

```
.
├── activityData.js               # Weekly data object (7-day log)
├── activityTracker.js           # Contains prediction comments and task setup
├── index.js                     # Central export hub for all functions
├── runTracker.js                # Main entry point to execute analysis
├── tracker-functions/           # Modularized analysis functions
│   ├── filterByCondition.js
│   ├── getAverageEveningEnjoyment.js
│   ├── getHighEnjoymentLowEffortActivities.js
│   └── getTotalHoursByCategory.js
├── REFLECTION.md                # Reflection on predictions, surprises, and higher-order functions
└── README.md                    # This project overview
```

---

## Requirements

- Node.js (v14 or higher recommended)
- Git (for cloning and commits)

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/sergehall/cs81-module5b-weektracker
cd cs81-module5b-weektracker
```

2. **Run the tracker**

```bash
node runTracker.js
```

This will output summary data such as:
- Total hours spent on physical activity
- Average enjoyment in the evening
- High enjoyment, low effort activities
- Filtered custom activities using a higher-order function

---

## Analysis Functions

Each function was written using array methods and moved into modular files inside the `tracker-functions/` folder.

- `getTotalHoursByCategory(week, category)`  
  → Uses `filter()` and `reduce()` to total hours by category.

- `getAverageEveningEnjoyment(week)`  
  → Uses `filter()` and `reduce()` to calculate enjoyment of evening activities.

- `getHighEnjoymentLowEffortActivities(week)`  
  → Uses `filter()` and `map()` to return high-rated, low-time activities.

- `filterByCondition(week, testFn)`  
  → Custom higher-order function that filters using a passed-in callback.

---

## What This Assignment Covers

- Creating your own real dataset in JavaScript
- Making predictions about habits and enjoyment
- Practicing `map()`, `filter()`, and `reduce()` with clean code
- Writing and using higher-order functions
- Reflecting on surprising or insightful results

---

## Submission Requirements

- [x] `activityData.js` with 7 entries (1 per day)
- [x] 3+ modularized analysis functions using array methods
- [x] Custom higher-order function (`filterByCondition`)
- [x] `activityTracker.js` with written predictions as comments
- [x] `REFLECTION.md` answering reflection prompts
- [x] `runTracker.js` showing output via `console.log()`
- [x] At least 3 meaningful Git commits

---

## License

This project is for educational purposes only as part of Santa Monica College's CS81 coursework.
