import React, { useState } from "react";

const quizQuestion = [
    {
        question: '',
        options: ['', '', '', ''],
        answer: '',
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
        if (userAnswer === quizQuestion[currentQuestion].answer) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quizQuestion.length) {
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
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
            <h1>Вопросы, блять</h1>
            {showResult ? (
                <div>
                    <h2>Ваш результат: {score} из {quizQuestion.length}</h2>
                    <button onClick={handleRestart}>Начать сначала</button>
                </div>
            ) : (
                <div>
                    <h3>{quizQuestion[currentQuestion].question}</h3>
                    <div>
                        {quizQuestion[currentQuestion].options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleAnswerClick(option)}
                                style={{
                                    margin: '25px',
                                    padding: '25px',
                                    backgroundColor: userAnswer === option ? 'pink' : '',
                                    width: '25vh'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleSubmit} disabled={!userAnswer}>Ответить</button>
                </div>
            )}
        </div>
    )
}

export default QuizApp