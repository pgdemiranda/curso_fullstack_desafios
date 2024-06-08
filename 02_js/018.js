/*18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. 
Utilize a função `Math.max()` para encontrar o maior número.*/

const numeros = [11,33,22,55,44,77,99,66,88];

numeroMaximo = (numeros) => {
    return Math.max(...numeros);
};

console.log(numeroMaximo(numeros));