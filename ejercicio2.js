let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Por favor ingrese su mensaje',(mensaje)=>{
    const numCaracteres=mensaje.length
    console.log(`El número de caracteres que tiene el mensaje que usted ingreso es de: ${numCaracteres}`)
    process.exit()
})