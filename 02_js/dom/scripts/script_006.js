const nomes = () => {
    const nomesInput = document.getElementById('nomes').value;
    const resultado = document.getElementById('resultado');
    const nomes = nomesInput.split(',').map(nome => nome.trim()).filter(nome => nome);

    let nomeMaisLongo = nomes[0];
    let nomeMaisCurto = nomes[0];

    for (let nome of nomes) {
        if (nome.length > nomeMaisLongo.length) {
            nomeMaisLongo = nome;
        }
        else if (nome.length < nomeMaisCurto.length) {
            nomeMaisCurto = nome;
        }
    }

    resultado.innerHTML = `
        <p>Nome mais longo: ${nomeMaisLongo}</p>
        <p>Nome mais curto: ${nomeMaisCurto}</p>
    `;
};