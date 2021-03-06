var calculateRoots = function(a, b, c){
  var D = Math.pow(b, 2) - 4 * a * c;
  var radical1 = (-b + Math.sqrt(D)) / (2 * a);
  var radical2 = (-b - Math.sqrt(D)) / (2 * a);
  if(D < 0){
    return 'Корней нет';
  } else if(D === 0){
    return 'Корень равен ' + radical1;
  } else if(D > 0){
    return 'Первый корень равен ' + radical1 + ', второй корень равен ' + radical2;
  }
}

/* Техническое задание

Мяу! Напиши функцию calculateRoots, которая будет считать корни через дискриминант.

Формула дискриминанта выглядит так: b * b - 4 * a * c. Функция должна принимать на вход три параметра: a, b, c. Это коэффициенты из формулы дискриминанта.

Если полученное число меньше 0, функция должна возвращать строку 'Корней нет'.

Если результат равен 0, корень в уравнении один. Функция должна возвращать строку 'Корень равен ' + найденный корень. Формула корня в этом случае такая: -b / (2 * a).

А вот если дискриминант больше 0, корня два. Придётся посчитать каждый и добавить результат в строку. Формула для первого корня: (-b + √D) / (2 * a). Формула для второго корня: (-b - √D) / (2 * a). Функция должна возвращать строку 'Первый корень равен ' + первый корень + ', второй корень равен ' + второй корень.

*/
