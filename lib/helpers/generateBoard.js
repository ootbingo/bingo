const getVersionData = async (version) => {
  const res = await fetch("/bingo/api/v1/available_versions.json");
  const availableVersions = await res.json();
  const path =
    availableVersions.versions[version ?? availableVersions.default_version];
  if (!path) {
    throw Error(`Version '${version}' does not exist in available_versions`);
  }
  return {
    path,
    version: version ?? availableVersions.default_version,
  };
};

const randomLetter = () =>
  (Math.floor(Math.random() * 26) + 10).toString(36).toUpperCase();

const fetchGenerator = async (path) => {
  const res = await fetch(`/bingo/${path}/generator.js`);
  return Function(
    `${await res.text()}; return typeof BingoLibrary === 'undefined' ? ootBingoGenerator : BingoLibrary.ootBingoGenerator;`
  )();
};

const fetchGoalList = async (path) => {
  const res = await fetch(`/bingo/${path}/goal-list.js`);
  return Function(`${await res.text()}; return bingoList;`)();
};

const fetchSeedRandom = async () => {
  const seedrandomRes = await fetch(`/bingo/lib/seedrandom-min.js`);
  Function(`${await seedrandomRes.text()}`)();
};

export const fetchDefaultVersionGoalList = async () => {
  const res = await fetch("/bingo/api/v1/available_versions.json");
  const availableVersions = await res.json();
  const path = availableVersions.versions[availableVersions.default_version];
  return fetchGoalList(path);
};

/**
 *
 * @param {object} options
 * @param {string} options.version
 * @param {number} options.seed
 * @param {"normal" | "short" | "blackout"} options.mode
 * @returns {Promise<{
 *   board: string[][],
 *   filename: string,
 *   version: string,
 *   mode: "normal" | "short" | "blackout",
 *   seed: number
 * }>}
 */
export const generateBoard = async ({
  seed = Math.ceil(999999 * Math.random()).toString(),
  mode = "normal",
  version: originalVersion,
} = {}) => {
  const { path, version } = await getVersionData(originalVersion);

  const [generator, goalList] = await Promise.all([
    fetchGenerator(path),
    fetchGoalList(path),
    fetchSeedRandom(),
  ]);

  const baseBoard = generator(goalList, { seed, mode, lang: "name" });
  if (!baseBoard) {
    alert(localize("Failed to generate board"));
    throw new Error("Failed to generate board");
  }

  const board = baseBoard.slice(1).map((goal) => goal.name);

  return {
    board: [
      board.slice(0, 5),
      board.slice(5, 10),
      board.slice(10, 15),
      board.slice(15, 20),
      board.slice(20, 25),
    ],
    seed,
    mode,
    version,
    filename: `${randomLetter()}${randomLetter()}`,
  };
};
