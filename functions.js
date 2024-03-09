/* eslint-disable max-depth */
/* eslint-disable padding-line-between-statements */

const generateBoard = () => {
  const board = [
    [1, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 1],
    [0, 0, 0, 1, 0, 1],
  ];
  return board;
};
export const game = () => {
  let counter = 0;
  const boardLocal = generateBoard();
  for (let i = 0; i < boardLocal.length; i++) {
    counter = 0;
    for (let j = 0; j < boardLocal[i].length; j++) {
      if (
        i < boardLocal.length - 1 &&
        j < boardLocal[i].length - 1 &&
        i > 0 &&
        j > 0
      ) {
        if (boardLocal[i][j] === 1) {
          if (boardLocal[i][j - 1] === 1) {
            counter++;
          }
          if (boardLocal[i][j + 1] === 1) {
            counter++;
          }
          if (boardLocal[i - 1][j] === 1) {
            counter++;
          }
          if (boardLocal[i - 1][j - 1] === 1) {
            counter++;
          }
          if (boardLocal[i - 1][j + 1] === 1) {
            counter++;
          }
          if (boardLocal[i + 1][j] === 1) {
            counter++;
          }
          if (boardLocal[i + 1][j - 1] === 1) {
            counter++;
          }
          if (boardLocal[i + 1][j + 1] === 1) {
            counter++;
          }
          if (counter < 2 || counter > 3) {
            boardLocal[i][j] = 0;
          }
        }
        if (boardLocal[i][j] === 0) {
          if (counter === 3) {
            boardLocal[i][j] = 1;
          }
        }
      }
    }
  }
  console.log(boardLocal);
};
