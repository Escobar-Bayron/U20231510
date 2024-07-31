let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Por favor ingrese una palabra: ', (palabra) => {
    const palabraPalindromo = palabra === palabra.split('').reverse().join('')
    console.log(`¿Es un palíndromo? ${palabraPalindromo}`)
    rl.close();
})
