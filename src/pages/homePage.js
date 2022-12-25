import React, { useEffect } from "react";
import "./homePage.css";
import { QuizData } from "../quizdata/quizData";
import { QuizCategory } from "../quizdata/quizCategory";
import { useQuiz } from "../context/dataContext";
import { actionConstants } from "../hooks/actionConst";

const HomePage = () => {
  const { quizDispatch } = useQuiz();

  const { RESET } = actionConstants;

  useEffect(() => {
    quizDispatch({
      type: RESET,
    });
  }, [RESET, quizDispatch]);
  return (
    <div className="quiz-container">
      <h2>
        Unlocking the knowledge with RAPID speed!
        <span className="sub-title">Select your quiz category and play...</span>
      </h2>
      <div className="category-container">
        {QuizData.map((el) => {
          return <QuizCategory key={el._id} cardData={el} />;
        })}
      </div>
    </div>
  );
};

export { HomePage };
