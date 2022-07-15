const test1 = [
  [7, 0],
  [6, 1],
  [4, 3],
  [4, 0],
  [8, 5],
  [8, 4],
  [3, 5],
  [7, 6],
  [2, 8],
  [3, 8],
];
const test2 = [
  [2, 8],
  [3, 5],
  [3, 8],
  [7, 6],
  [8, 5],
  [8, 4],
  [6, 1],
  [7, 0],
  [4, 3],
  [4, 0],
];
const test3 = [
  [0, 1],
  [7, 1],
  [4, 2],
  [4, 0],
  [9, 3],
  [0, 3],
  [5, 8],
  [4, 8],
  [2, 9],
  [2, 8],
];
const test4 = [
  [0, 3],
  [0, 1],
  [2, 8],
  [4, 8],
  [2, 9],
  [5, 8],
  [9, 3],
  [7, 1],
  [4, 2],
  [4, 0],
];

const tets = (bombs: number[][], flags: number[][]) => {
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

console.log(tets(test1, test2));
console.log(tets(test4, test3));

// console.log(sortBombs(test1));
// console.log(sortBombs(test2));

// console.log(sortBombs(test3));
// console.log(sortBombs(test4));
