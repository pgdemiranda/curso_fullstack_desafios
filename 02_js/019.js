/*19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. 
Utilize a função `Math.min()` para encontrar o menor número.*/

const numeros = [11,33,22,55,44,77,99,66,88];

numeroMinimo = (numeros) => {
    return Math.min(...numeros);
};

console.log(numeroMinimo(numeros));