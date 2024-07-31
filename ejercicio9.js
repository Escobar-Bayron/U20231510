let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Por favor ingrese una palabra: ', (palabra) => {
    const numVocales = palabra.match(/[aeiouáéíóúü]/gi)?.length || 0
    console.log(`El número de vocales es de su palabra es: ${numVocales}`)
    rl.close()
})
