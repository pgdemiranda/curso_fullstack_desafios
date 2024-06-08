/*13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. 
Declare uma função que calcule a largura ao cubo e imprima o resultado.*/

var largura = 0.58;
const potencializacaoLargura = (largura) => {
    const larguraPotencializada = largura * largura * largura;
    console.log(larguraPotencializada);
}

potencializacaoLargura(largura);

