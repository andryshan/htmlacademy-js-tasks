var getDocumentsNumbers = function(documentsArray, year){
  var result = 0;
  for(var i = 0; i < documentsArray.length; i++){
    if(documentsArray[i].indexOf(year, 4) !== -1){
      console.log(documentsArray[i].indexOf(year));
      result +=1;
    } else{
      result += 0; 
    }
    
  }
  return result;
}


/* Техническое задание

Мяу! Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.

У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.

Функция должна возвращать количество документов, в названии которых есть необходимый год.

Если таких документов в массиве нет, функция должна возвращать 0.

*/
