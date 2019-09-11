const saludar = nombre => `Hola ${nombre}`;

const resultado = saludar('Alexander');
const esperado = 'Hola Alexander';

console.log(saludar('Alexander'));

if (resultado === esperado) {
  console.log('Prueba exitosa');
} else {
  console.log('Prueba no exitosa');
}
