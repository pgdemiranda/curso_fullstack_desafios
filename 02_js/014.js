/*14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. 
Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.*/

const base = 42;

areaTriangulo = (base, altura) => {
    return (1/2) * base * altura;
}

console.log(`${areaTriangulo(base, 65)}m2`)