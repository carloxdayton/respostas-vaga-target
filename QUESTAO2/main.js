const readline = require('readline')

//CONFIGURAÇÃO A LEITURA
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//FUNÇÃO PARA VERIFICAR SE O NÚMERO FAZ PARTE DA SEQUÊNCIA
function pertenceFibonacci(num) {
    let a = 0
    let b = 1

    if (num === 0 || num === 1) return true

    while (b < num) {
        [a, b] = [b, a + b]
    }

    return b === num
}

// COLOCAR O NÚMERO PRA SER VERIFICADO
rl.question('Digite um número: ', (input) => {
    const numero = parseInt(input, 10)

    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, insira um número inteiro que não seja negativo')
    } else {
        const resultado = pertenceFibonacci(numero)

        if(resultado) {
            console.log(`${numero} pertence a sequência de Fibonacci`)
        } else {
            console.log(`${numero} não pertence a sequência de Fibonacci`)
        }
        
    }

    rl.close()
})