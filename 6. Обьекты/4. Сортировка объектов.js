var getSortedArray = function(array, key){
  for(var i = 0; i < array.length - 1; i++){
    var minValue = array[i];
    for(var j = i + 1; j < array.length; j++){
      if(array[j][key] < minValue[key]){
        minValue = array[j];
        var swap = array[i];
        array[i] = minValue;
        array[j] = swap;
      }
    }
  }
  return array;
}

getSortedArray( [{"name":"Василий","age":6},{"name":"Виктор","age":4},{"name":"Пётр","age":8},{"name":"Иннокентий","age":1}], "age");

/*

Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.

Функция должна возвращать отсортированный массив объектов.

Значения в массиве должны увеличиваться от меньшего к большему.

*/
