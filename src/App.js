import React, { useState } from 'react';
import "./style.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'In which year did Sourav Ganguly make his international cricket debut?',
      options: ['1992', '1996', '1998', '2000'],
      answer: '1992',
    },
    {
      question: 'Against which country did Sourav Ganguly score his debut Test century?',
      options: ['England', 'Australia', 'South Africa', 'Sri Lanka'],
      answer: 'England',
    },
    {
      question: 'How many centuries did Sourav Ganguly score in his ODI career?',
      options: ['12', '16', '22', '27'],
      answer: '22',
    },
    {
      question: 'In which year did Sourav Ganguly become the captain of the Indian cricket team?',
      options: ['1999', '2000', '2001', '2002'],
      answer: '2000',
    },
    {
      question: "What is Sourav Ganguly's highest score in Test cricket?",
      options: ['183', '194', '200', '239'],
      answer: '239',
    },
  ];

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
