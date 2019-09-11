const it = require('./framework').it;
const expect = require('./framework').expect;
const saludar = require('./app').saludar;

console.log(saludar('Alexander'));

it('Should greet', () => {
  expect(saludar('Alexander')).toBe('Hola Alexander');
});
