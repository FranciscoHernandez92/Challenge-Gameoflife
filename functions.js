/* eslint-disable no-unused-expressions */
const generateBoard = () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
  ];
  return board;
};
const game = () => {
  let counter = 0;
  const boardLocal = generateBoard();
  for (let i = 0; i < boardLocal.length; i++) {
    for (let j = 0; j < boardLocal[i].length; j++) {
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
  setInterval(game, 1000);
  return game;
};
