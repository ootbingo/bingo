import { generator } from "./generator.js";

export const setup = (version, goals) => {
  const searchParams = new URLSearchParams(window.location.search);
  const seed = searchParams.get("seed") || Math.ceil(999999 * Math.random());

  const boardInfo = document.querySelector("#bingo-info");
  boardInfo.innerHTML = `
OoT Bingo <strong>${version}</strong>&emsp;
Seed: <strong>${seed}</strong>&emsp;
`;

  const newCards = document.querySelector("#newcards");
  const seedParam = `seed=${Math.ceil(999999 * Math.random()).toString()}`;
  if (newCards) {
    newCards.href = `?${seedParam}`;
  }

  const chosenGoal = generator(goals, seed);

  document.getElementById(
    "givenitem"
  ).innerHTML = `<strong>${chosenGoal}</strong>`;
};
