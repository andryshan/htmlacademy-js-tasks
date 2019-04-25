var getZippedArrays = function(key, value){
  var obj = {};
  for(var i = 0; i < key.length; i++){
    obj[key[i]] = value[i];
  }
  return obj;
}

console.log(getZippedArrays(["country","city","month","arrivalDay","departureDay"], ["Португалия","Синтра","июль","5","10"]));

/*

Создайте функцию getZippedArrays.

У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.

Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.

*/
