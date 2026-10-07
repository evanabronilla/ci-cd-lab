const { add, subtract } = require('./calculator');

describe('Calculator Operations', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
  });
});