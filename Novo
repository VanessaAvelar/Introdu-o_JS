function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = peso / (altura * altura)
        document.getElementById("resultado").textContent = imc.toFixed(2)

        if (imc < 18.5) {
            document.getElementById("mensagem").textContent = "Vosê está abaixo do Peso Ideal"
        } else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById("mensagem").textContent = "Vosê está no Peso Ideal"
        } else if (imc >= 24.9 && imc < 29.9) {
            document.getElementById("mensagem").textContent = "Vosê está acima do Peso Ideal. Para a sua altura o Peso seria" + (24.9 * (altura * altura)).toFixed(2) + "Kg"
        } else {
            document.getElementById("mensagem").textContent = "Vosê está obeso. Para a sua altura o Peso seria" + (24.9 * (altura * altura)).toFixed(2) + "Kg"
        }

    } else {
        document.getElementById('resultado').textContent = 'Informe um valor válido'
    } document.getElementById('mensagem').textContent = ''
}