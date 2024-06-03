/*2 - Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:
```js
var produto;
let categoria;
const codigoProduto;
```
As variáveis produto e codigoProduto devem estar em um escopo global. 
A variável categoria deve estar dentro de uma função. 
A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): Produto Categoria Código do Produto.*/

const codigoProduto = 'MOB330';
var produto = 'Cadeira de Praia';
const catproduto = () => {
    let categoria = 'Mobília';
    return categoria;
}
console.log(produto)
console.log(catproduto())
console.log(codigoProduto)