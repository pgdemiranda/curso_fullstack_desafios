/*31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e 
possui as propriedades `nome`, `idade` e `notas` (um array de números). 
Utilize um loop `for` para imprimir o nome de cada aluno.*/

const listaAlunos = [{
    nome: 'Pablo',
    idade: 36,
    notas: [10.0, 7.50, 8.50]
}, {
    nome: 'Jucy',
    idade: 37,
    notas: [10.0, 9.00, 8.90]
}];

for (let i = 0; i < listaAlunos.length; i++) {
    console.log(listaAlunos[i].nome);
};
