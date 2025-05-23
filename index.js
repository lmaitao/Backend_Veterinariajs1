const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === 'registrar') {
    const [, nombre, edad, animal, color, enfermedad] = argumentos;
    if (nombre && edad && animal && color && enfermedad) {
        registrar(nombre, edad, animal, color, enfermedad);
    } else {
        console.log('Faltan argumentos para la operación "registrar".');
        console.log('Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>');
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida.');
    console.log('Uso: node index.js registrar ... o node index.js leer');
}