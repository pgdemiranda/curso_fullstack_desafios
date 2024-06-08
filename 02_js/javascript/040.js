/*40 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array contendo apenas os números que são maiores que 10.*/

const numeros = [9, 7, 5, 1, 11, 22, 33, 44, 55, 66, 77, 88, 99];

novoArray = (numeros) => {
    const lista = numeros.filter(numeros => numeros > 10);
    return lista;
};

console.log(novoArray(numeros));