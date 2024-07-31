let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Por favor ingrese una frase: ', (frase) => {
    rl.question('Por favor ingrese la palabra que quiere reemplazar por otra: ', (palabra) => {
        rl.question('Por favor ingrese la nueva palabra: ', (nuevaPalabra) => {
            const nuevaFrase = frase.replace(new RegExp(palabra, 'g'), nuevaPalabra);
            console.log(`La nueva frase es: ${nuevaFrase}`);
            rl.close();
        })
    })
})