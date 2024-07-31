let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es su nombre? ', (nombre) => {
    rl.question('¿Cuál es su apellido? ', (apellido) => {
        console.log(`Hola, ${nombre} ${apellido}!`);
        rl.close();
    });
});
