const calcularTabuada = () => {
    const numeroDado = document.getElementById('numeroDado').value;
    const resultado = document.getElementById('resultado');
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += numeroDado + ' x ' + i + ' = ' + (numeroDado * i) + '<br>';
    }
    resultado.innerHTML = tabuada;
}