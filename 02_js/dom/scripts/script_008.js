const rolar = () => {
    const resultado = document.getElementById('resultado');
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    resultado.innerHTML = `O resultado da rolagem foi: ${dado1} e ${dado2}`;
}