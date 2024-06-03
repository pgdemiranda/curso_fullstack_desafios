/*10 - Refaça o exercício anterior utilizando `.map()`. Para criar um array com números de 1 a 100:
```js
const numeros = Array.from({ length: 100 }, (_, index) => index + 1);
```*/

const numeros = Array.from({length:100}, (_, index) => index + 1);
var qtdFizz = 0;
var qtdBuzz = 0;
var qtdFizzBuzz = 0;

numeros.map(i => {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        qtdFizzBuzz++;
    } else if (i % 3 == 0) {
        console.log('Fizz');
        qtdFizz++;
    } else if (i % 5 == 0) {
        console.log('Buzz');
        qtdBuzz++;
    } else {
        console.log(i);
    }
});