/*- Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. 
O script deve realizar as seguintes tarefas:
- nome: O nome do aluno.
- cpf: O CPF do aluno.
- cidade: A cidade onde o aluno mora.
- notas: Um array com 4 notas do aluno.
Imprima o nome, CPF e cidade do aluno. 
Imprima cada uma das notas do array notas. 
Calcule a média das notas do aluno e imprima. 
Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). 
Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. 
Utilize template literals para a concatenação de strings.*/
var pessoa = {
    nome: 'Pablo',
    CPF: '123.123.123-12',
    cidade: 'João Pessoa',
    notas: [7.0, 8.15, 9.50, 5.65]
};
const random = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)];

console.log(`nome: ${pessoa.nome}, cpf: ${pessoa.CPF} e cidade: ${pessoa.cidade}.`);
console.log(`as notas do aluno são: ${pessoa.notas[0]}, ${pessoa.notas[1]}, ${pessoa.notas[2]}, ${pessoa.notas[3]}.`);
console.log(`a média das notas do aluno é: ${((pessoa.notas[0]+pessoa.notas[1]+pessoa.notas[2]+pessoa.notas[3])/pessoa.notas.length).toFixed(2)}`);
console.log(`A nota sorteada foi: ${random} e convertida para a escala de 0-100 é: ${(random*10).toFixed(2)}`);