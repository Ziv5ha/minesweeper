export const checkWin = (bombs: number[][], flags: number[][]) => {
  let win = true;
  const sortedBombs = sortBombs(bombs);
  const sortedFlags = sortBombs(flags);
  sortedBombs.forEach((rows, row) => {
    if (
      sortedBombs[row][0] !== sortedFlags[row][0] &&
      sortedBombs[row][1] !== sortedFlags[row][1]
    )
      win = false;
  });
  return win;
};

const sortBombs = (arr: number[][]) => {
  return arr.sort(([a, b], [c, d]) => {
    if (a !== c) return a - c;
    return b - d;
  });
};
