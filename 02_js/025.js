/*25 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
retorne um novo array onde cada string esteja em letras maiúsculas. 
Utilize a função `toUpperCase()` para converter as strings.*/

var string = ['ovos', 'queijo', 'leite'];
const upper = string.map(i => i.toUpperCase());
console.log(upper);