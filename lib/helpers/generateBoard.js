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
 * @param {string} version
 * @param {object} options
 * @param {number} options.seed
 * @param {"normal" | "short" | "blackout"} options.mode
 * @returns {Promise<{ board: string[][], filename: string }>}
 */
export const generateBoard = async (
  v,
  { seed = Math.ceil(999999 * Math.random()).toString(), mode = "normal" } = {}
) => {
  const { path, version } = await getVersionData(v);

  const [generator, goalList] = await Promise.all([
    fetchGenerator(path),
    fetchGoalList(path),
    fetchSeedRandom(),
  ]);

  const board = generator(goalList, { seed, mode, lang: "name" })
    .slice(1)
    .map((goal) => goal.name);
  return {
    board: [
      board.slice(0, 5),
      board.slice(5, 10),
      board.slice(10, 15),
      board.slice(15, 20),
      board.slice(20, 25),
    ],
    version,
    filename: `${randomLetter()}${randomLetter()}`,
  };
};
