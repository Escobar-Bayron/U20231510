const fs = require('fs');

const crearArchivo = () => {
    const fileName = 'estudiantes.json';
    const estudiantes = [
        { nombre: 'Juan', edad: 18, carrera: 'Ingeniería en DS' },
        { nombre: 'Ana', edad: 22, carrera: 'Ingeniería Civil' },
        { nombre: 'Juan', edad: 21, carrera: 'Ingeniería en DS' }
    ];

    fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
        if (err) {
            console.error('Error al crear el archivo JSON', err);
            return;
        }
        console.log('El archivo JSON fue creado exitosamente');
    });
};

module.exports = crearArchivo;
