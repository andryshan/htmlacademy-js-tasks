var incomeTax = 13;
var contributions = 30;

var calculateExpences = function(netSalary){
  var dirtySalary = Math.round(netSalary + (netSalary / (100 - incomeTax) * incomeTax));
  var total = Math.round(dirtySalary + dirtySalary / 100 * 30);
  return total;
}

calculateExpences(87000); //130000

/* Техническое задание

Напиши функцию calculateExpences, которая вычисляет ежемесячные затраты компании на сотрудника из «чистой» зарплаты работника.

Функция должна принимать параметр netSalary – это «чистая» зарплата после вычета налогов.

В переменную incomeTax записан размер НДФЛ в процентах.

В переменной contributions указан общий размер взносов в процентах.

Функция должна возвращать общие затраты компании на сотрудника. Округляй результат вычислений с помощью Math.round().

*/
