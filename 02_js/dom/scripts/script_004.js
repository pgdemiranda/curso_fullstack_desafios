const somar = () => {
    const numeroDado = parseFloat(document.getElementById('numeroDigitado').value);
    const resultado = document.getElementById('resultado');
    let soma = 0;
    for (let i = 1; i <= numeroDado; i++) {
        soma += i;
    }
    resultado.innerHTML = `A soma dos números de 1 à ${numeroDado} é ${soma}.`
};