/*32 - Crie um script que declare um array de objetos, 
onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). 
Utilize a função `map()` para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.*/

const listaAlunos = [{
    nome: 'Pablo',
    idade: 36,
    notas: [10.0, 7.50, 8.50]
}, {
    nome: 'Jucy',
    idade: 37,
    notas: [10.0, 9.00, 8.90]
}];

const arrayAlunos = (array) => {
    return array.map(aluno=>aluno.nome)
};

console.log(arrayAlunos(listaAlunos));