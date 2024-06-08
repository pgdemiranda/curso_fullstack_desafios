/*26 - Crie um script que declare uma função que receba um array de strings como parâmetro 
e retorne um novo array onde cada string esteja em letras minúsculas. 
Utilize a função `toLowerCase()` para converter as strings.*/

var string = ['OVOS', 'QUEIJO', 'LEITE'];
const lower = string.map(i => i.toLowerCase());
console.log(lower);