/*27 - Crie um script que declare uma função que receba um array de números como parâmetro 
e retorne um novo array onde cada número seja elevado ao quadrado.*/

const numeros = [11,33,22,55,44,77,99,66,88];
const quadrado = (numeros) => {
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        const elevadoQuadrado = numeros[i] * numeros[i];
        resultado.push(elevadoQuadrado);
    }
    return resultado;
};

console.log(quadrado(numeros));