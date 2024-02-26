import { trackerDefaults } from "/bingo/lib/item-tracker/trackerDefaults.js";
import { fetchDefaultVersionGoalList } from "/bingo/lib/helpers/generateBoard.js";

fetchDefaultVersionGoalList().then((goalList) => {
  let missingCount = 0;

  const goals = getGoals(goalList);
  const goalNames = goals.map((goal) => goal.name);

  const trackerGoalNames = Object.keys(trackerDefaults);

  for (const trackerGoalName of trackerGoalNames) {
    if (!goalNames.includes(trackerGoalName)) {
      missingCount++;
      console.log(
        `Tracker goal name '${trackerGoalName}' missing in goal list, goal was possibly removed or renamed`
      );
    }
  }

  console.log(`Analyzed ${goals.length} goals`);
  if (missingCount === 0) {
    console.log(
      "Passed test: all tracker goal names in tracker-default.js also exist in the goal list!"
    );
  } else {
    console.log(
      `Failed test: found ${missingCount} tracker goal names that do not exist in the goal list.`
    );
  }
});

const getGoals = (goalList) => {
  const goals = Object.values(goalList.normal).flat();
  return goals;
};
