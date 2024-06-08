/*8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:
- A primeira nota do aluno é: …
- A segunda nota do aluno é: …
- A terceira nota do aluno é: …
- A média do aluno é: …
- O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).*/

const mediaParaAprovacao = 7.00;
var notas = [7.60, 5.20, 10.00];

const calcularMedia = (notas) => {
    const media = ((notas[0] + notas[1] + notas[2]) / notas.length).toFixed(2);
    const aprovacao = media >= mediaParaAprovacao ? 'APROVADO' : 'REPROVADO';
    return {media, aprovacao};
}

const {media, aprovacao} = calcularMedia(notas);
console.log(`A primeira nota do aluno é ${notas[0]}, a segunda nota do aluno é ${notas[1]}, a terceira nota do aluno é ${notas[2]}`);
console.log(`A média do aluno é ${media}, o aluno está ${aprovacao}`);