var fibonacciNumbers = [1, 1];
var numbersQuantity = 7;

/*for(var i = 0; i < numbersQuantity; i++){
  fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i + 1]);
} */
for(var i = 1; i <= numbersQuantity; i++){
  fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i - 1]);
}

/* Техническое задание

Напиши программу, которая считает числа Фибоначчи и последовательно записывает эти числа в массив.

Массив записан в переменную fibonacciNumbers. Первые два числа уже находятся в этом массиве.

Вам нужно дополнить массив: найти следующие числа в последовательности и записать каждое из них по порядку в массив.

Количество новых чисел в массиве ограничено. В переменной numbersQuantity указано сколько чисел нужно добавить в массив. Это значение не включает в себя два числа, которые изначально даны в массиве.

*/
