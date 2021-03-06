var dayNames = ['понедельник','вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var getDayOfWeek = function(dayOfWeek, dayNumber){
  for(var i = 0; i < dayNames.length; i++){
    if(dayNames[i] === dayOfWeek){
      return dayNames[(i + dayNumber - 1) % 7];
    }
  }
}
console.log(getDayOfWeek('пятница', 4)); /// ПОНЕД

/* Техническое задание

Мяу! Напиши для меня программу-календарь.

Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

Функция должна возвращать строку с названием для недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

*/
