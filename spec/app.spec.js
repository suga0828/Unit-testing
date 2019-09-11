const saludar = require('../app').saludar;

it('La función saluda', () => {
  expect(saludar('Alexander')).toBe('Hola Alexander');
});