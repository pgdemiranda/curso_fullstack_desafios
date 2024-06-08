/*37 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
retorne um novo array onde cada string esteja invertida. 
Utilize a função `reverse()` para inverter as strings.*/

const strings = ['amazonina', 'antonio', 'bruna', 'pablo', 'pandora', 'pandinha'];

const invertida = (strings) => {
    return strings.map(str => str.split('').reverse().join(''));
};

console.log(invertida(strings));