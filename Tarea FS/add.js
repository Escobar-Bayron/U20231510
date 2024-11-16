const fs = require('fs');

const agregarEstudiante = () => {
    const fileName = 'estudiantes.json';

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        // convertir una cadena JSON en un objeto de Javascript
        const estudiantes = JSON.parse(data);
        const nuevoEstudiante = { nombre: 'Carlos', edad: 18, carrera: 'Ingeniería Industrial' };
        estudiantes.push(nuevoEstudiante);

        fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                return;
            }
            console.log('Nuevo estudiante agregado al archivo JSON.');
        });
    });
};

module.exports = agregarEstudiante;
