const numeroRandomico = Math.floor(Math.random() * 100) + 1;

verificar = () => {
    const adivinhe = document.getElementById('numero').value;
    const resultado = document.getElementById('result');

    if (adivinhe > numeroRandomico) {
        resultado.innerHTML = `Resposta maior do que o número. Tente novamente!`;
    } else if (adivinhe < numeroRandomico) {
        resultado.innerHTML = `Resposta menor do que o número. Tente novamente!`;
    } else {
        resultado.innerHTML = `Você acertou! O número é ${numeroRandomico}`;
    }
};