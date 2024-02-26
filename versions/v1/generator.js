export const generator = (goals, seed = Math.ceil(999999 * Math.random())) => {
  return goals[seed % goals.length];
};
