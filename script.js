function startQuiz() {
    let correct = 0;
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    for (let i = 0; i < quiz.length; i++) {
        let questions = quiz[i];
        let content = `Викторина\n\n${questions.question}\n${questions.options.join('\n')}`;
        let answer = +prompt(content);

        if (answer === questions.correctAnswer) {
            correct++;
        }
    }

    alert(`Правильные ответы: ${correct} из ${quiz.length}`);
}

const quizBtn = document.querySelector('#game_start-4'); 

if (quizBtn) {
    quizBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        startQuiz();            
    });
}








// Игра «Угадай число»
// Описание

// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.

// Требования:

// Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.
// Для реализации случайного числа воспользуйтесь 
// Math.random()
// .


const gameButton = document.getElementById('game_start-1');

gameButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    startGuessingGame();   
});

function startGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let userGuess = null;

    function checkPlayerAnswer(playerNumber) {
        attempts++;
        if (playerNumber === secretNumber) {
            return ` Вы угадали! Это число ${secretNumber}. Попыток: ${attempts}`;
        } else if (playerNumber < secretNumber) {
            return "Загаданное число больше.";
        } else {
            return "Загаданное число меньше.";
        }
    }

    while (userGuess !== secretNumber) {
        const input = prompt("Угадай число от 1 до 100");

        if (input === null) {
            alert(`Игра окончена. Было загадано число: ${secretNumber}`);
            break; 
        }

        userGuess = parseInt(input, 10);

        if (isNaN(userGuess)) {
            alert("Пожалуйста, введите число!");
            continue;
        }

        const resultMessage = checkPlayerAnswer(userGuess);
        
        alert(resultMessage);
    }
}



// Игра "Простая арифметика"
// Описание

// Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ.
// Проверяет правильность ответа и выводит результат.
// Последовательность действий
//  Генерация задач:
// Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//  Запрос ответа:
// Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя функцию 
// prompt()
// .
//  Проверка и вывод результата:
// Проверьте правильность ответа пользователя.
// Выведите результат проверки: верный ответ или ошибка.



const ArithmeticGamebtn = document.getElementById('game_start-3');

ArithmeticGamebtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    startArithmeticGame();   
});

function startArithmeticGame() {
    const operations = ['+', '-', '*', '/'];
    const randomOperator = operations[Math.floor(Math.random() * operations.length)];
    
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    
    let correctAnswer;
    
    switch (randomOperator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            correctAnswer = parseFloat(correctAnswer.toFixed(2));
            break;
    }
    
    const userInput = prompt(`Решите задачу:\n${num1} ${randomOperator} ${num2} = ?\n\n(Для выхода нажмите Отмена)`);
    
    if (userInput === null) {
        alert("Игра окончена!");
        return;
    }
    
    const cleanInput = userInput.replace(',', '.');
    const playerAnswer = parseFloat(cleanInput);
    
    if (isNaN(playerAnswer)) {
        alert("Вы ввели не число! Попробуйте еще раз.");
    } else if (playerAnswer === correctAnswer) {
        alert("Верно!");
    } else {
        alert(`Ошибка. Ваш ответ: ${playerAnswer}. Правильный ответ: ${correctAnswer}`);
    }
}



// Игра «Переверни текст»
// Описание

// создайте игру, где пользователю нужно ввести текст, который будет перевернут.

// Требования:

// Сайт запрашивает у пользователя текст.
// Сайт переворачивает введенный текст.
// Сайт выводит перевернутый текст.



const textGameButton = document.getElementById('game_start-5');

textGameButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    startReverseTextGame(); 
});

function startReverseTextGame() {
    const userInput = prompt("Введите любой текст или слово, а я его переверну:\n\n(Для выхода нажмите Отмена)");
    if (userInput === null) {
        alert("Игра окончена!");
        return;
    }

    if (userInput.trim() === "") {
        alert("Вы ничего не ввели! Попробуйте еще раз.");
        return;
    }
    const reversedText = userInput.split('').reverse().join('');
    alert(`Оригинал: ${userInput}\nПеревертыш: ${reversedText}`);
}



// Задание 1
// Преобразовать строку 
// 'js'
//  в верхний регистр.

// let jscript = 'js';
// alert (jscript.toUpperCase())



// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив,
// содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
// let arr = ['айти', 'шериф', 'скуф', 'страсть', 'реальность',];
// let startSearch = 'С';
// function secondLine(array, line) {
//     let oops = line.toLowerCase();
//     return array.filter(item => {
//         return item.toLowerCase().startsWith(oops)
//     });
// }

// let result = secondLine(arr,startSearch);
// console.log(result);


// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

// let average = 32.58884;
// console.log(Math.floor(average));
// console.log(Math.ceil(average));
// console.log(Math.round(average));


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

// let resultMin = Math.min(52, 53, 49, 77, 21, 32);
// let resultMax = Math.max(52, 53, 49, 77, 21, 32);
// console.log (resultMin);
// console.log (resultMax);


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

// function randomNumb() {
//     let randomNumb = Math.floor(Math.random()*10 + 1 );
//     console.log(randomNumb);
// }

// randomNumb();

// Задание 6

// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
//  Длина массива должна быть в два раза меньше переданного числа.

// function getRandomArray(maxNumber) {
//   const arrayLength = Math.floor(maxNumber / 2);
//   const result = [];
//   for (let i = 0; i < arrayLength; i++) {
//     const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
//     result.push(randomNumber);
//   }
//   return result;
// }

// console.log(getRandomArray(10)); 

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

// function getRandom(num1, num2) {
//   return Math.round(Math.random() * (num2 - num1)) + num1;
// }

// console.log(getRandom(1, 3)); 



// Задание 8
// Вывести в консоль текущую дату.

// console.log(new Date()); 

// Задание 9
// Создать переменную 
// currentDate
// , хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.


// const currentDate = new Date();

// console.log('Сегодня:', currentDate.toLocaleDateString('ru-RU'));

// const futureDate = new Date(currentDate);
// futureDate.setDate(futureDate.getDate() + 73);

// console.log('Через 73 дня будет:', futureDate.toLocaleDateString('ru-RU'));



// Задание 10


// function formatDate(date) {
//   const months = [
//     'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
//     'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
//   ];
  
//   const weekdays = [
//     'воскресенье', 'понедельник', 'вторник', 'среда', 
//     'четверг', 'пятница', 'суббота'
//   ];
//   const day = date.getDate();
//   const year = date.getFullYear();
//   const monthName = months[date.getMonth()];
//   const weekdayName = weekdays[date.getDay()];
//   const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//   const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//   const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//   return `Дата: ${day} ${monthName} ${year} — это ${weekdayName}.\nВремя: ${hours}:${minutes}:${seconds}`;
// }

// const testDate = new Date();
// console.log(formatDate(testDate));