const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const crearArchivo = require('./create');
const leerArchivo = require('./read');
const agregarEstudiante = require('./add');
const actualizarEstudiante = require('./update');
const eliminarEstudiante = require('./delete');
const contarEstudiantes = require('./count');

const menu = () => {
    console.log(`\n--- Menú ---
1. Crear archivo JSON con estudiantes
2. Leer archivo JSON de estudiantes
3. Agregar nuevo estudiante
4. Actualizar información de estudiantes
5. Eliminar un estudiante
6. Contar estudiantes
7. Salir`);
    rl.question('Seleccione una opción: ', (option) => {
        switch (option) {
            case '1':
                crearArchivo();
                break;
            case '2':
                leerArchivo();
                break;
            case '3':
                agregarEstudiante();
                break;
            case '4':
                actualizarEstudiante();
                break;
            case '5':
                eliminarEstudiante();
                break;
            case '6':
                contarEstudiantes();
                break;
            case '7':
                console.log('Saliendo...');
                rl.close();
                return;
            default:
                console.log('Opción no válida. Intente de nuevo.');
                break;
        }
        menu();
    });
};

menu();

