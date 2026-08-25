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



// Основное задание по верстке макета
// Реализуйте связь с сайтом для следующей игры.

// Игра «Камень, ножницы, бумага»
// Описание: создайте игру «Камень, ножницы, бумага», где пользователь играет против компьютера.

// Требования:

// Сайт запрашивает у пользователя его выбор (камень, ножницы, бумага).
// Генерирует случайный выбор компьютера.
// Определяет победителя и выводит результат.



let RockPaperScissors = document.getElementById('game_start-2');
RockPaperScissors.addEventListener('click', function(event) {
    event.preventDefault(); 
    let user = prompt("Введите: камень, ножницы или бумага");
    if (user === null) {
        alert("Игра отменена!");
        return; 
    }
    let choices = ["камень", "ножницы", "бумага"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = choices[randomNumber];

    if (user === computer) {
        alert("Вы выбрали: " + user + "\nКомпьютер выбрал: " + computer + "\n\nИтог: Ничья!");
    } 
    
    else if (user === "камень" && computer === "ножницы") {
        alert("Вы выбрали: " + user + "\nКомпьютер выбрал: " + computer + "\n\nИтог: Вы победили!");
    } 
    else if (user === "ножницы" && computer === "бумага") {
        alert("Вы выбрали: " + user + "\nКомпьютер выбрал: " + computer + "\n\nИтог: Вы победили!");
    } 
    else if (user === "бумага" && computer === "камень") {
        alert("Вы выбрали: " + user + "\nКомпьютер выбрал: " + computer + "\n\nИтог: Вы победили!");
    } 
    
    else if (user === "камень" || user === "ножницы" || user === "бумага") {
        alert("Вы выбрали: " + user + "\nКомпьютер выбрал: " + computer + "\n\nИтог: Компьютер победил!");
    } 
    
    else {
        alert("Ошибка! Вы ввели что-то не то. Надо писать точно: камень, ножницы или бумага.");
    }

});




// Задание 1
// С помощью метода массива 
// sort
//  отсортируйте массив 
// people
//  по возрастанию возраста и выведите результат в консоль.


// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// people.sort(function(a, b) {
//    return a.age - b.age;
// });

// console.log(people);



// Задание 2
// Реализуйте функцию 
// filter
// , которая должна работать аналогично методу массива 
// filter
// . Возьмите за основу функцию 
// map
// , которую мы реализовывали на уроке.

// Чтобы из функции 
// map
//  сделать 
// filter
// , нужно, в зависимости от результата вызова 
// ruleFunction
// , принимать решение о том, добавлять в результирующий массив очередной элемент или нет.




// function isPositive(number) {
//     if (number > 0) {
//         return true;  
//     } else {
//         return false; 
//     }
// }

// function isMale(person) {
//     if (person.gender === 'male') {
//         return true; 
//     } else {
//         return false; 
//     }
// }

// function filter(array, ruleFunction) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {

//         if (ruleFunction(array[i]) === true) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); 

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));



// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
// Последней строкой должно выводиться сообщение «30 секунд прошло».



// let timerId = setInterval(function() {
//     let currentDate = new Date();
//     console.log(currentDate);

// }, 3000); 

// setTimeout(function() {

//     clearInterval(timerId);

//     console.log("30 секунд прошло");

// }, 30000); 


// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

// Допишите функцию 
// delayForSecond
//  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
// setTimeout
// .

// function delayForSecond(callback) {
//     setTimeout(function() {
//         callback();
//     }, 1000); 
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// });



// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(function() {
//     sayHi('Глеб');
// });