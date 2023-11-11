import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import './TakeQuiz.css';
import quizzes from './quizzes';

const TakeQuiz = () => {
  const [subscribedBooks, setSubscribedBooks] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedSubscribedBooks = JSON.parse(localStorage.getItem('subscriptions'));
    if (storedSubscribedBooks) {
      setSubscribedBooks(storedSubscribedBooks);
    }

    const storedScore = JSON.parse(localStorage.getItem('quizScore'));
    if (storedScore) {
      setScore(storedScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizScore', JSON.stringify(score));
  }, [score]);

  const handleRowClick = (subscribedBooks) => {
    if (selectedRow === subscribedBooks) {
      setSelectedRow(null);
      setCurrentQuizIndex(null);
      setUserAnswers([]);
      setScore(0);
    } else {
      setSelectedRow(subscribedBooks);
      const selectedQuizIndex = quizzes.findIndex((quiz) => quiz.id === subscribedBooks.bookId);
      if (selectedQuizIndex !== -1) {
        setCurrentQuizIndex(selectedQuizIndex);
        setCurrentQuestionIndex(0);
        setUserAnswers(Array(quizzes[selectedQuizIndex].questions.length).fill(null));
        setScore(0);
      }
    }
  };

  const handleAnswerSelect = (selectedOption) => {
    if (currentQuizIndex !== null) {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestionIndex] = selectedOption;
      setUserAnswers(updatedUserAnswers);

      const currentQuestion = quizzes[currentQuizIndex].questions[currentQuestionIndex];
      if (selectedOption === currentQuestion.correctOption) {
        setScore(score + 10);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex !== null) {
      if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuizIndex !== null) {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    }
  };

  const handleResetQuiz = () => {
    if (currentQuizIndex !== null) {
      setCurrentQuestionIndex(0);
      setUserAnswers(Array(quizzes[currentQuizIndex].questions.length).fill(null));
      setScore(0);
    }
  };

  const currentQuiz = currentQuizIndex !== null ? quizzes[currentQuizIndex] : null;
  const currentQuestion = currentQuiz ? currentQuiz.questions[currentQuestionIndex] : null;

  return (
    <div className="quiz">
      <Sidebar />
      <div className="take-quiz">
        <h1>Take a Quiz</h1>
        <div className="subscription-card card">
          <h2>Active Subscriptions</h2>
          <div className="table-container">
            <table className="subscription-table">
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Subscription ID</th>
                  <th>Subscription Date</th>
                </tr>
              </thead>
              <tbody>
                {subscribedBooks.map((subscription) => (
                  <tr
                    key={subscription.subscription}
                    onClick={() => handleRowClick(subscription)}
                    className={selectedRow === subscription ? 'selected-row' : ''}
                  >
                    <td>{subscription.bookId}</td>
                    <td>{subscription.bookName}</td>
                    <td>{subscription.subscriptionid}</td>
                    <td>{subscription.Date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="quiz-card card">
          <h2>Quiz</h2>
          {currentQuiz ? (
            <div>
              <h3>{currentQuiz.title}</h3>
              <div className="question-slide">
                <p>{currentQuestion.text}</p>
                <ul className="option-list">
                  {currentQuestion.options.map((option, index) => (
                    <li
                      key={index}
                      className={`${
                        userAnswers[currentQuestionIndex] === option
                          ? currentQuestion.correctOption === option
                            ? 'correct-option'
                            : 'incorrect-option'
                          : ''
                      }`}
                      onClick={() => {
                        if (userAnswers[currentQuestionIndex] === null) {
                          handleAnswerSelect(option);
                        }
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navigation-buttons">
                <button
                  className="previous-button"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0 && currentQuizIndex === 0}
                >
                  Previous
                </button>
                <button
                  className="next-button"
                  onClick={handleNextQuestion}
                  disabled={userAnswers[currentQuestionIndex] === null}
                >
                  Next
                </button>
                <button className="reset-button" onClick={handleResetQuiz}>
                  Reset Quiz
                </button>
              </div>
            </div>
          ) : (
            <p>No quiz available.</p>
          )}
          <div className="score-container">
            <p className='score'>Your Score: {score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeQuiz;
