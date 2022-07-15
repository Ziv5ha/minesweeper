export const revealTile = (
  table: (string | number)[][],
  clicked: boolean[][],
  row: number,
  collumn: number
): boolean[][] => {
  const newClickedArr = [...clicked];
  newClickedArr[row][collumn] = true;
  if (table[row][collumn] === 0) clearAdjecent(table, clicked, row, collumn);
  return newClickedArr;
};

const clearAdjecent = (
  table: (string | number)[][],
  clicked: boolean[][],
  row: number,
  collumn: number
) => {
  const size = table.length - 1;
  if (row < size) {
    if (clicked[row + 1][collumn] !== true)
      revealTile(table, clicked, row + 1, collumn);
    if (collumn < size && clicked[row + 1][collumn + 1] !== true)
      revealTile(table, clicked, row + 1, collumn + 1);
    if (collumn > 0 && clicked[row + 1][collumn - 1] !== true)
      revealTile(table, clicked, row + 1, collumn - 1);
  }
  if (row > 0) {
    if (clicked[row - 1][collumn] !== true)
      revealTile(table, clicked, row - 1, collumn);
    if (collumn < size && clicked[row - 1][collumn + 1] !== true)
      revealTile(table, clicked, row - 1, collumn + 1);
    if (collumn > 0 && clicked[row - 1][collumn - 1] !== true)
      revealTile(table, clicked, row - 1, collumn - 1);
  }
  if (clicked[row][collumn + 1] !== true)
    revealTile(table, clicked, row, collumn + 1);
  if (clicked[row][collumn - 1] !== true)
    revealTile(table, clicked, row, collumn - 1);
};
