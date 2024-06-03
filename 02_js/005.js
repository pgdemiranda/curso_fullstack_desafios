/*5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. 
Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals `${var}`. 
Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".*/

const obj = 'Cientista de Dados Fullstack';

//exemplo com function:
function carreiraComFunction(carreira) {
    return console.log(`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

carreiraComFunction(obj);

//exemplo com arrow function:
const carreiraComArrow = (carreira) => {
    return console.log(`Meu objetivo de carreira é me tornar um ${carreira}.`);
}

carreiraComArrow(obj);
