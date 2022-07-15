export const createGame = (
  size: number,
  bomsNum: number
): { table: (number | string)[][]; bombsArr: number[][] } => {
  const table = genetareTable(size);
  const bombsArr = generateBombs(size, bomsNum);
  addBombsToTable(table, bombsArr);
  updateTableAfterBombPlacement(table);
  return { table, bombsArr };
};

const generateRow = (size: number): number[] => {
  const row: number[] = [];
  while (row.length < size) {
    row.push(0);
  }
  return row;
};

const genetareTable = (size: number): (number | string)[][] => {
  const table: (number | string)[][] = [];
  while (table.length < size) {
    table.push(generateRow(size));
  }
  return table;
};

const generateBombs = (talbesize: number, bomsNum: number): number[][] => {
  const bombs: number[][] = [];
  while (bombs.length < bomsNum) {
    const rowNum = Math.floor(Math.random() * talbesize);
    const placeInRow = Math.floor(Math.random() * talbesize);
    const bomb = [rowNum, placeInRow];
    if (!bombs.some((arr) => arr[0] === bomb[0] && arr[1] === bomb[1])) {
      bombs.push(bomb);
    }
  }
  return bombs;
};

const addBombsToTable = (table: (number | string)[][], bombs: number[][]) => {
  bombs.forEach(([row, collumn]) => (table[row][collumn] = '💥'));
};

const updateTableAfterBombPlacement = (table: (number | string)[][]) => {
  table.forEach((row, iRow) => {
    row.forEach((tile, iCollumn) => {
      if (typeof tile === 'string') return;
      table[iRow][iCollumn] = calcAdjacentBombs(table, iRow, iCollumn);
    });
  });
};

const calcAdjacentBombs = (
  table: (number | string)[][],
  row: number,
  collumn: number
): number => {
  const tableSize = table.length - 1;
  let adjacentBombs = 0;
  if (row > 0) {
    if (typeof table[row - 1][collumn] === 'string') adjacentBombs++;
    if (collumn > 0 && typeof table[row - 1][collumn - 1] === 'string')
      adjacentBombs++;
    if (collumn < tableSize && typeof table[row - 1][collumn + 1] === 'string')
      adjacentBombs++;
  }
  if (row < tableSize) {
    if (typeof table[row + 1][collumn] === 'string') adjacentBombs++;
    if (collumn > 0 && typeof table[row + 1][collumn - 1] === 'string')
      adjacentBombs++;
    if (collumn < tableSize && typeof table[row + 1][collumn + 1] === 'string')
      adjacentBombs++;
  }
  if (collumn > 0 && typeof table[row][collumn - 1] === 'string')
    adjacentBombs++;
  if (collumn < tableSize && typeof table[row][collumn + 1] === 'string')
    adjacentBombs++;
  return adjacentBombs;
};

const generateRowClicked = (size: number): boolean[] => {
  const row: boolean[] = [];
  while (row.length < size) {
    row.push(false);
  }
  return row;
};

export const genetareTableClicked = (size: number): boolean[][] => {
  const table: boolean[][] = [];
  while (table.length < size) {
    table.push(generateRowClicked(size));
  }
  return table;
};
