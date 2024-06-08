/*20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.*/

const numeros = [11,33,22,55,44,77,99,66,88];

const media = (i) => {
    let soma = numeros.reduce((total, i) => total + i, 0);
    let media = soma/numeros.length;
    return media;
}

console.log(media(numeros));