var getPrice = function(time, isUrgency){
  var priceForHour = 1500;
  if(isUrgency){
    time = time / 2;
    priceForHour = priceForHour * 2.5;
  }
  if(time > 150){
    priceForHour -= 250;
  }
  return time * priceForHour;
}

var getProfitableProject = function(time, profitUrgency){
  var urgenProject = getPrice(time, true) - profitUrgency;
  var usuallyProject = getPrice(time, false);
  var message = '';
  if(urgenProject < usuallyProject){
    message = 'Выгодней срочный проект. Потратишь на него ' + urgenProject;
  } else {
    message = 'Выгодней обычный проект. Потратишь на него ' + usuallyProject;
  }
  return message;
}

/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/
