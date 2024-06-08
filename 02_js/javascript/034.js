/*34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e 
possui as propriedades `nome`, `idade` e `notas` (um array de números). 
Utilize a função `reduce()` para calcular a média das idades dos alunos. Imprima o resultado.*/

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

const media = (array) => {
    soma = array.reduce((total, idades) => total + idades.idade, 0);
    return calculoDaMedia = soma/array.length;
};

console.log(media(listaAlunos));