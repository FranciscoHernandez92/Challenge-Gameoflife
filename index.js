import { game, currentBoard } from './functions.js';
setInterval(() => {
  currentBoard = game(currentBoard);
}, 1000);
