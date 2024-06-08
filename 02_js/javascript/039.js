/*39 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. 
Utilize a função `toFixed()` para formatar os números.*/

const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const formatador = (array) => {
    return array.map(i => i.toFixed(2));
};

console.log(formatador(numeros));