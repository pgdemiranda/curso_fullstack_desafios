/*35 - Crie um script que declare uma função que receba um array de números como parâmetro e 
retorne um novo array onde cada número seja decrementado em 1.*/

const array = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const decremento = (array) => {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i] - 1;
        novoArray.push(elemento);
    }
    return novoArray;
}

console.log(decremento(array));