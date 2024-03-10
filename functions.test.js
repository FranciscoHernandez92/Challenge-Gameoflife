import { game, aliveCells } from './functions.js';

describe('aliveCells', () => {
  test('should count alive cells correctly', () => {
    //Arrange
    const x = [
      [1, 0, 1],
      [0, 1, 1],
      [0, 0, 1],
    ];
    const expected = 4;
    //Act
    const r = liveCells(x, 1, 1);
    //Assert
    expect(r).toBe(expected);
  });
  test('should count alive cells correctly', () => {
    //Arrange
    const x = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const expected = 0;
    //Act
    const r = liveCells(x, 1, 1);
    //Assert
    expect(r).toBe(expected);
  });
});
