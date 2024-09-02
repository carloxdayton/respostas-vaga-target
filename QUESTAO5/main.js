//CRIANDO A INTERFACE DE ENTRADA
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// FUNÇÃO DE INVERSÃO DA STRING
function inversao(str) {
    let resultado = ''

    //PERCORRER TODA A STRING DE TRÁS PRA FRENTE
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]
    }

    return resultado
}

//SOLICITAÇÃO DE INSERIR STRING
rl.question('Digite uma palavra para vê-la invertida: ', (input) => {
    const stringInvertida = inversao(input)
    console.log(`String original: ${input}`)
    console.log(`String invertida: ${stringInvertida}`)

    //FECHAR A INTERFACE
    rl.close()
})

