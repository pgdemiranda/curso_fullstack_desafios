const contar = () => {
    const textoDigitado = document.getElementById('textoDigitado').value;
    const resultado = document.getElementById('resultado');
    const vogais = textoDigitado.match(/[aeiou]/gi);
    const consoantes = textoDigitado.match(/[^aeiou]/gi);
    resultado.innerHTML = `Vogais: ${vogais.length}. Consoantes: ${consoantes.length}.`;
}