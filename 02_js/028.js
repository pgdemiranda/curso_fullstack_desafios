/*28 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array contendo apenas os números que são múltiplos de 3.*/

const numeros = [11, 12, 33, 22, 55, 57, 44, 77, 99, 66, 84, 88];
const multiplos = (numeros) => {
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 3 === 0) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
};

console.log(multiplos(numeros));