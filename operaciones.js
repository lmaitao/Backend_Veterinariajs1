const fs = require('fs');
const nombreArchivo = 'citas.json';

const registrar = (nombre, edad, animal, color, enfermedad) => {
    try {
        const citas = JSON.parse(fs.readFileSync(nombreArchivo, 'utf8'));
        const nuevaCita = {
            nombre,
            edad,
            animal,
            color,
            enfermedad
        };
        citas.push(nuevaCita);
        fs.writeFileSync(nombreArchivo, JSON.stringify(citas, null, 2));
        console.log('Cita registrada con éxito.');
    } catch (error) {
        console.error('Error al registrar la cita:', error.message);
    }
};

const leer = () => {
    try {
        const citas = JSON.parse(fs.readFileSync(nombreArchivo, 'utf8'));
        if (citas.length === 0) {
            console.log('No hay citas registradas.');
        } else {
            console.log('--- Citas Registradas ---');
            citas.forEach((cita, index) => {
                console.log(`Cita #${index + 1}:`);
                console.log(`  Nombre del animal: ${cita.nombre}`);
                console.log(`  Edad: ${cita.edad}`);
                console.log(`  Tipo de animal: ${cita.animal}`);
                console.log(`  Color: ${cita.color}`);
                console.log(`  Enfermedad: ${cita.enfermedad}`);
                console.log('-----------------------');
            });
        }
    } catch (error) {
        console.error('Error al leer las citas:', error.message);
    }
};

module.exports = { registrar, leer };