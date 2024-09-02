//VALORES DOS FATURAMENTOS DE CADA ESTADO
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

//FUNÇÃO PARA CALCULAR OS PERCENTUAIS E EXIBIR
function calcularPercentual(faturamento) {
    const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0)

    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / faturamentoTotal * 100).toFixed(2)
        console.log(`Percentual de ${estado}: ${percentual}%`)
    }
}

calcularPercentual(faturamento)