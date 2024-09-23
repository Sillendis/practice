import React, { useState } from "react";

const quizQuestions = [
    {
        quiestion: 'Кто заебал Машу в последнее время больше?',
        options: ['Мама', 'Пахан', 'Колбасун', 'Маша', 'Все они блять'],
        answer: 'Все они блять'
    },
    {
        quiestion: 'Пойдёт ли папа сам в магазин?',
        options: ['Да', 'Нет', 'Только с Машей, то вынесет мозги', 'С мамой'],
        answer: 'Только с Машей, то вынесет мозги'
    },
    {
        quiestion: 'Как быстро папа будет в хорошем настроении после Машиного отказа?',
        options: ['Быстро', 'Хер там', 'Мама заебала его больше', 'что-то случилось?'],
        answer: 'что-то случилось?'
    },
    {
        quiestion: 'Мама, сегодня опять на ужин угли?',
        options: ['Да, Витечька', 'что-то случилось?', '/обидеться нахуй/', '/обидеться нахуй и вызвать у всех чувство вины/'],
        answer: '/обидеться нахуй и вызвать у всех чувство вины/'
    },
    {
        quiestion: 'Как пройдёт ужин?',
        options: ['Сойдёт', 'Прозвучит Иисус раз 5', 'Угли вкусные всё равно', 'Похуй'],
        answer: 'Прозвучит Иисус раз 5'
    },
]

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswer, setUserAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const handleAnswerClick = (option: string) => {
        setUserAnswer(option)
    }

    const handleSubmit = () => {
        if (userAnswer === quizQuestions[currentQuestion].answer) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion)
            setUserAnswer('')
        } else {
            setShowResult(true)
        }
    }

    const handleRestart = () => {
        setCurrentQuestion(0)
        setUserAnswer('')
        setScore(0)
        setShowResult(false)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Вопросики</h1>
            {showResult ? (
                <div style={{ color: 'wheat' }}>
                    <h2>Ваш результат: {score} из {quizQuestions.length}</h2>
                    <button onClick={handleRestart}>Начать заново!</button>
                </div>
            ) : (
                <div style={{ color: 'wheat' }}>
                    <h3>{quizQuestions[currentQuestion].quiestion}</h3>
                    <div>
                        {quizQuestions[currentQuestion].options.map((option: string) => (
                            <button
                                key={option}
                                onClick={() => handleAnswerClick(option)}
                                style={{
                                    margin: '15px',
                                    padding: '15px',
                                    width: '15vh',
                                    backgroundColor: userAnswer === option ? 'pink' : ''
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleSubmit} disabled={!userAnswer}>
                        Ответить
                    </button>
                </div>
            )}
        </div>
    )
}

export default QuizApp