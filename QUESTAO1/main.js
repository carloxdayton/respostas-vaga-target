const readline = require('readline')

// CONFIGURAÇÃO DA INTERFACE
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// FUNÇÃO DO CÁLCULO DA SOMA
function calcularSoma(indice) {
    let soma = 0;

    for(let k = 1; k < indice; k++){
        soma += k
    }

    return soma;
}

//DIGITAR O VALOR DO INDICE
rl.question('Digite o valor de INDICE: ', (input) => {
    const indice = parseInt(input, 10)

    if(isNaN(indice) || indice <= 0) {
        console.log('Por favor, insira um número inteiro positivo')
    } else {
        const resultado = calcularSoma(indice)
        console.log(`O valor da soma é: ${resultado}`)
    }

    rl.close()
})