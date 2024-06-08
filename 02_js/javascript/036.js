/*36 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array contendo apenas os números que são múltiplos de 5.*/

const array = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const multiplosDe5 = (array) => {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            resultado.push(array[i]);
        }
    }
    return resultado;
};

console.log(multiplosDe5(array));
