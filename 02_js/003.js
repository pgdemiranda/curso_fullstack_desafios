/*3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
```js
var nomeAluno;
let curso;
const matricula;
```
As variáveis nomeAluno e matricula devem estar em um escopo global. 
A variável curso deve estar dentro de uma função. 
A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals `${var}`.*/

const matricula = '2024010203'
var nomeAluno = 'Charlinho do Hermes e Renato'

const concat = (matricula, nomeAluno) => {
    let curso = 'Fundamental';
    return console.log(`o aluno ${nomeAluno}, de matrícula ${matricula}, está cursando ${curso}.`);
}

concat(matricula, nomeAluno);