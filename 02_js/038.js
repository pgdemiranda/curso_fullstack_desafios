/*38 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
retorne um novo array contendo apenas as strings que terminam com a letra "a".*/

const strings = ['amazonina', 'antonio', 'bruna', 'pablo', 'pandora', 'pandinha'];
const seletor = (strings) => {
    return strings.filter(i => i.toLowerCase().endsWith('a'))
};

console.log(seletor(strings));