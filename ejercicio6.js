let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Por favor ingrese una frase: ', (frase) => {
    const palabras = frase.trim().split(/\s+/)
    console.log(`El número de palabras es de su frase es: ${palabras.length}`)
    rl.close()
})
