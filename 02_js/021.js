/*21 - Crie um script que declare um array de números e utilize a função `filter()` para criar um novo array contendo apenas os números pares. 
Imprima o novo array.*/

const numeros = [11,33,22,55,44,77,99,66,88];
const pares = numeros.filter(i => i % 2 === 0);
console.log(pares);