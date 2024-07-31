let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingresa una cadena: ', (cadena) => {
    rl.question('Ingresa el índice de inicio: ', (inicio) => {
        rl.question('Ingresa la longitud de la subcadena: ', (longitud) => {
            const subcadena = cadena.substr(parseInt(inicio), parseInt(longitud))
            console.log(`La subcadena es: ${subcadena}`)
            rl.close()
        })
    })
})