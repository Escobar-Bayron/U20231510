let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese por favor un mensaje: ', (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('')
    console.log(`El mensaje invertido es: ${cadenaInvertida}`)
    rl.close();
})
