/*33 - Crie um script que declare um array de objetos, 
onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). 
Utilize a função `filter()` para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. 
Imprima o novo array.*/

const listaAlunos = [{
    nome: 'Pablo',
    idade: 36,
    notas: [10.0, 7.50, 8.50]
}, {
    nome: 'Jucy',
    idade: 37,
    notas: [10.0, 9.00, 8.90]
}, {
    nome: 'Charlinho',
    idade: 14,
    notas: [10.0, 10.0, 9.99]
}];

const novaLista = listaAlunos.filter(alunos => alunos.idade > 18);
console.log(novaLista);