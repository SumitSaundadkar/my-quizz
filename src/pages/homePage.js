import React from "react";
import "./homePage.css";
import { QuizData } from "../quizdata/quizData";
import { QuizCategory } from "../quizdata/quizCategory";

const HomePage = () => {
  return (
    <div className="quiz-container">
      <h2>
        Unloking the knowledge with RAPID speed!
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
