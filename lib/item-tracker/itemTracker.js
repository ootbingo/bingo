import { renderTokens } from "./components/tokens.js";
import { renderCounter } from "./components/counter.js";
import { getGoalTrackerData } from "./getGoalTrackerData.js";

/**
 * @param {object} props
 * @param {string} props.goal
 * @returns
 */
export const renderTracker = ({ goal }) => {
  const match = getGoalTrackerData(goal);

  if (!match) {
    return;
  }

  const { mode, data, matches } = match;
  switch (mode) {
    case "tokens":
      return renderTokens({
        rows: data.options.tokens.rows ?? [
          [...new Array(+matches[1])].map(() => data.options.tokens.icon),
        ],
      });
    case "counter":
      return [
        renderCounter({
          denominator: data.options.counter.denominator ?? +matches[1],
          icon: data.options.counter.icon,
        }),
      ];
  }
};
