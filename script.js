let correct = 0;
const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
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
    let content = ` Викторина \n ${questions.question} \n ${questions.options}`;
    let answer = +prompt(content);

    if (answer === questions.correctAnswer) {
        correct++;
    }
}

alert(`Правильные ответы: ${correct}`);