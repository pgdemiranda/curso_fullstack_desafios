const mean = () => {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const result = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);
    if (result >=7) {
        document.getElementById('result').innerHTML = `Aprovado com nota ${result}`;
    } else {
        document.getElementById('result').innerHTML = `Reprovado com nota ${result}`;
    }
};