/* eslint-disable padding-line-between-statements */

const generateBoard = () => {
  // CREO EL TABLERO
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

export const aliveCells = (board, x, y) => {
  // BOARD = TABLERO, X = COLUMNAS, Y = FILAS
  let arroundCounter = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    // RECORRO ALREDEDOR Y PONGO LIMITES SI ESTA EN LOS BORDES
    for (let j = y - 1; j <= y + 1; j++) {
      if (i >= 0 && j >= 0 && board.length > i && board[i].length > j) {
        if (i !== x || j !== y) {
          arroundCounter += board[i][j];
        }
      }
    }
  }
  return arroundCounter;
};

export const game = (board) => {
  // EMPIEZA EL JUEGO
  const newBoard = [];
  for (let i = 0; i < board.length; i++) {
    // RECORRO TODAS LAS POSICIONES DEL TABLERO CON LOS DOS BUCLES
    newBoard[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      const arroundCounter = aliveCells(board, i, j);
      if (board[i][j] === 1) {
        // APLICO LAS REGLAS
        if (arroundCounter < 2 || arroundCounter > 3) {
          newBoard[i][j] = 0;
        } else {
          newBoard[i][j] = 1;
        }
      } else if (arroundCounter === 3) {
        newBoard[i][j] = 1;
      } else {
        newBoard[i][j] = 0;
      }
    }
  }
  console.log(newBoard);
  return newBoard;
};

export let currentBoard = generateBoard(); // CREO UNA NUEVA VARIABLE PARA QUE GUARDE EL TABLERO ANTERIOR
setInterval(() => {
  currentBoard = game(currentBoard);
}, 1000);
