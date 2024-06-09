const converter = () => {
    const numeroDigitado = document.getElementById('decimal').value;
    const resultado = document.getElementById('resultado');
    let binario = '';
    let decimal = parseInt(numeroDigitado);
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    resultado.innerHTML = `<p>O valor binário é: ${binario}</p>`;
};