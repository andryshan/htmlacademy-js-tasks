
var getYears = function(yearStart, yearEnd, number){
  var array = [];
  for(var i = yearStart; i <= yearEnd; i++){
    var numToString = String(i);
    var sum = 0;
    for(var j = 0; j < numToString.length; j++){
      sum+= Number(numToString[j]);
    }
    if(sum === number){
      array.push(i); // array.push(Number(numToString));
    }
  }
  return array;
}

getYears(2018, 2045, 11);
/* Техническое задание

Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть расположены по возрастанию, от меньшего к большему.

*/
