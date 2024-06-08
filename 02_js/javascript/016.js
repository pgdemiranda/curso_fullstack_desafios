/*16 - Crie um script que declare um array de números e utilize um loop `while` para calcular a soma de todos os números do array. 
Imprima o resultado.*/

const numeros = [11, 22, 33, 44, 55];
var soma = 0;
var i = 0;

while (i < numeros.length) {
    soma += numeros[i];
    i++;
}

console.log(soma)