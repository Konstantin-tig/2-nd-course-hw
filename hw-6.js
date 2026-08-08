// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// .

// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10
// . После вывода значения 
// 10
//  в консоль цикл должен прекратить свою работу.



// let elOutput = [1, 5, 4, 10, 0, 3];
// for (let index = 0; index < elOutput.length; index++) {
//     console.log(elOutput[index]);
//     if (elOutput[index] === 10) {
//         break; 
//     }

// }



// Задание 2
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// .

// Найдите индекс значения 
// 4
//  в этом массиве.

// let searchIndex = [1, 5, 4, 10, 0, 3];
// let index = searchIndex.indexOf(4);
// console.log (index);


// Задание 3
// Дан массив чисел: 
// [1, 3, 5, 10, 20]
// .

// С помощью метода 
// join
//  выведите элементы массива через пробел (пустую строку 
// ' '
// ).

// let methodJoin = [1, 3, 5, 10, 20];
// let resultJoin = methodJoin.join(" ");
// console.log (resultJoin);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
// .


// let multidimensional = [];

// for (let i = 0; i < 3; i++) {
//     let row = []; 
//     for (let j = 0; j < 3; j++) {
//         row.push(1);
//     }
//     multidimensional.push(row);
// }
// console.log(multidimensional); 

// Задание 5
// Дан массив: 
// [1, 1, 1]
// . Добавьте в конец массива значения 2, 2, 2.

// let methodPush = [1, 1, 1];
// methodPush.push(2, 2, 2);
// console.log(methodPush); 

// Задание 6
// Дан массив: 
// [9, 8, 7, 'a', 6, 5]
// .

// С помощью метода 
// sort
//  отсортируйте массив и удалите букву 
// 'a'
//  из массива. Затем выведите массив.

// let methodSort = [9, 8, 7, 'a', 6, 5];
// methodSort.sort().pop();
// console.log(methodSort);





// Задание 7
// Дан массив: 
// [9, 8, 7, 6, 5]
// .

// Попросите пользователя угадать число с помощью метода 
// prompt
// . Если значение, которое ввел пользователь, есть в массиве, выведите в 
// alert
//  «Угадал», в противном случае — «Не угадал».

// let game = [9, 8, 7, 6, 5];
// let question = +prompt("Угадай число?!");
// if (game.includes(question)) {
//     alert("Угадал");
// } else {
//     alert("Не угадал");
// }



// Задание 8
// Дана строка: 
// 'abcdef'
// . Выведите в консоль 
// 'fedcba'
// .

// Для этого задания вам пригодится метод 
// reverse()
// . Он располагает элементы массива в порядке, обратном исходному.

// let methodRev = 'abcdef';
// let letter = methodRev.split("");
// letter.reverse();
// let resultLetter = letter.join("");
// console.log(resultLetter);



// Задание 9
// Дан массив: 
// [[1, 2, 3],[4, 5, 6]]
// . Выведите в консоль массив вида: 
// [1, 2, 3, 4, 5, 6]
// .

// let methodSpread = [[1, 2, 3],[4, 5, 6]];
// let resultSpread = methodSpread.concat(...methodSpread);
// console.log(resultSpread);



// Задание 10

// Создайте массив с произвольными числами (диапазон от 
// 1
//  до 
// 10
// ).
// Переберите его с помощью цикла 
// for
// .
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: 
// i + 1
// . Обратите внимание, что у последнего элемента нет следующего.


// let plunk = [2, 4, 7, 8, 3, 6];

// for (let i = 0; i < plunk.length-1; i++) {
//    let sum1 = plunk[i];
//    let sum2 = plunk[i + 1];
//    let sum3 = sum1 + sum2;
//    console.log(sum3);
// }



// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих ч
// let tale = [1, 2, 3, 4, 5];
// function accept(arr) {
//   return arr.map(tale => tale ** 2);

// }
// console.log(accept(tale));

//  Задание 12

// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
// let line = ["слово","строка","айти"];
// function getLendth(arr) {
//      return arr.map(line => line.length);
// }
// console.log(getLendth(line));

// задание 13

// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

// let num = [1, -2, 3, -4, 5, -6, 7];
// function negativeNumbers(arr) {
//      return arr.filter( nums => nums < 0);
// }
// console.log( negativeNumbers(num));

// задание 14

// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
// Math.random()
//  в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый массив.
//  Результат работы программы необходимо вывести в консоль — это будут 
//  два массива: исходный массив и массив с четными значениями.

// const numbers = [];

// for (let i = 0; i < 11; i++) {
//     const randomNum = Math.floor(Math.random() * 11);
//     numbers.push(randomNum);
// }

// console.log(numbers); 

// const even = [];
// for (let i = 0; i < numbers.length; i++) {
//    if  (numbers[i] % 2 === 0) {
//     even.push(numbers[i]);
//    }

// }

// console.log(even);


// задание 15

// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// Math.random()
//  в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

// const numbers = [];

// for (let i = 0; i < 6; i++) {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//      numbers.push(randomNum);
// }
// const sum = numbers.reduce((total, number) => total + number, 0);
// const arithmetic = sum/numbers.length;
// console.log(`Результат генерации массива ${numbers}`)
// console.log(`Результат сложения ${sum}`)
// console.log(`Среднее арифметическое ${arithmetic}`)

