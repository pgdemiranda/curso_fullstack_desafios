/*23 - Crie um script que declare um array de números e utilize a função `reduce()` para calcular a soma de todos os números do array. 
Imprima o resultado.*/

const numeros = [11,33,22,55,44,77,99,66,88];

const soma = numeros.reduce((proximoNumero, i) => {
    return proximoNumero + i;
}, 0);

console.log(soma);

