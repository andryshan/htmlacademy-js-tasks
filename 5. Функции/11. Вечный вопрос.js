var calculateDeposit = function (startDep, percent, time, isCapitalize){
  var result = 0;
  var sumDeposit = 0;
  if(isCapitalize){
    for(var i = 1; i <= time; i++){
        result = startDep + (percent / 100 / 12) * startDep;
        startDep = result;
    }
  }else{
    result = ((percent / 100 / 12) * time * startDep) + startDep;
  }
  return Math.floor(result);
};

var getProfitableDeposit = function(startDep, time, percentSimple, percentCapitalize){
  var simpleDep = calculateDeposit(startDep, percentSimple, time, false);
  var capitalizeDep = calculateDeposit(startDep, percentCapitalize, time, true);
  if(simpleDep > capitalizeDep){
    return 'Выбирай обычный вклад. Заработаешь ' + simpleDep;
  } else {
    return  'Выбирай капитализацию. Заработаешь ' + capitalizeDep;
  }
  
}

getProfitableDeposit(10000, 9, 7, 6.8.); //Первый тест. Исходная сумма: 10000, количество месяцев: 9, процент без капитализации: 7, процент с капитализацией: 6.8. Ожидаемый ответ: Выбирай обычный вклад. Заработаешь 10525.
/* Техническое задание

Мяу! Мне нужна программа <code>getProfitableDeposit</code> для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я заработаю с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Заработаешь ' + доход от вклада.
'Выбирай капитализацию. Заработаешь ' + доход от вклада.

*/

