const fs = require('fs');

const contarEstudiantes = () => {
    const fileName = 'estudiantes.json';

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return;
        }

        const estudiantes = JSON.parse(data);
        console.log(`Número total de estudiantes es: ${estudiantes.length}`);
    });
};

module.exports = contarEstudiantes;

