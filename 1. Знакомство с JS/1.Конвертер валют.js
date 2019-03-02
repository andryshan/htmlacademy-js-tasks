var euroRate = 74;
var dollarRate = 63;

var euroAmount = 500;
var dollarAmount = 2500;

/* Техническое задание

Напиши программу, которая посчитает сколько всего рублей понадобится на поездку.

Курсы валют указаны в переменных euroRate и dollarRate.

Переменные euroAmount и dollarAmount— необходимые суммы на поездку.

Создай переменную rublesAmount и записывай в неё результат вычислений.
*/

var rublesAmount = euroRate * euroAmount + dollarRate * dollarAmount;
console.log(rublesAmount);