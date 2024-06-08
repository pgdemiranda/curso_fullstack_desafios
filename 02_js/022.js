/*22 - Crie um script que declare um array de números e utilize a função `map()` 
para criar um novo array onde cada número seja multiplicado por 2. Imprima o novo array.*/

const numeros = [11,33,22,55,44,77,99,66,88];

const multiplicados = numeros.map(i => {
    return i * 2;
})

console.log(multiplicados)