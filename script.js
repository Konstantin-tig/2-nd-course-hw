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
    quizBtn.addEventListener('click', function (event) {
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

gameButton.addEventListener('click', function (event) {
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

ArithmeticGamebtn.addEventListener('click', function (event) {
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

textGameButton.addEventListener('click', function (event) {
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
RockPaperScissors.addEventListener('click', function (event) {
    event.preventDefault();

    let userInput = prompt("Введите: камень, ножницы или бумага");

    // Проверка на нажатие кнопки «Отмена»
    if (userInput === null) {
        alert("Игра отменена!");
        return;
    }

    // ВСЕ БУКВЫ ДЕЛАЕМ МАЛЕНЬКИМИ И УБИРАЕМ ЛИШНИЕ ПРОБЕЛЫ
    // Теперь не важно, написали вы КАМЕНЬ, Камень или каМеНь — JavaScript увидит это как "камень"
    let user = userInput.toLowerCase().trim();

    let choices = ["камень", "ножницы", "бумага"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = choices[randomNumber];

    // Логика сравнения (все слова здесь строго маленькими буквами)
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


// Генератор случайных цветов
// Описание: При каждом клике на кнопку фон страницы меняется на случайный цвет.

// Требования: Создайте кнопку, которая при нажатии меняет цвет фона (или другого элемента) на случайный.


const colorBtn = document.getElementById('color-btn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
colorBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const allSections = document.querySelectorAll('section');
    const randomColor = getRandomColor();
    allSections.forEach(function (section) {
        section.style.backgroundImage = 'none';
        section.style.backgroundColor = randomColor;
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.ticker__track');

    if (track) {
        // Дублируем содержимое внутренней ленты
        const clone = track.innerHTML;
        track.innerHTML = clone + clone;
    }
});













