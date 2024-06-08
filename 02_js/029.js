/*29 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
retorne um novo array contendo apenas as strings que começam com a letra "A".*/

const array = ['Abacate', 'Laranja', 'Melancia', 'Maracujá', 'Abóbora'];

const seletor = () => {
    return array.filter(i => i.toLowerCase().startsWith('a'));
};

console.log(seletor(array));

