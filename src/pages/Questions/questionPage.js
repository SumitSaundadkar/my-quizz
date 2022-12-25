import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuizData } from "../../quizdata/quizData";
import "../Questions/questionPage.css";
import { actionConstants } from "../../hooks/actionConst";
import { useQuiz } from "../../context/dataContext";
const QuestionPage = () => {
  const navigate = useNavigate();
  const [myQuizData, setMyQuizData] = useState();
  const [selectedOption, setSelectedOption] = useState([]);
  const { quizId } = useParams();
  const {
    quizState: { currQuestion },
    quizDispatch,
  } = useQuiz();
  const { SET_CURRQUE, SET_ANSWERS } = actionConstants;

  useEffect(() => {
    setMyQuizData(
      QuizData.find((item) => {
        return item?._id === Number(quizId);
      })
    );
  }, [quizId]);

  const questions = myQuizData?.questions;

  let question, options;

  if (questions) {
    question = questions[Number(currQuestion)]?.question;
    options = questions[Number(currQuestion)]?.options;
  }

  const nextHandler = () => {
    quizDispatch({
      type: SET_CURRQUE,
      payload: { currQue: currQuestion + 1 },
    });
  };

  const submitHandler = () => {
    quizDispatch({
      type: SET_ANSWERS,
      payload: { selectedOption },
    });
    navigate("/result");
  };

  return (
    <div className="quiz-container">
      <div className="card-vertical ques theme-color">
        <h2 className="justify-center">{myQuizData?.heading}</h2>
        <div className="ques-and-score">
          <div className="count">
            <p className="tag">
              Question:{" "}
              <p>
                {currQuestion + 1} / {questions?.length}{" "}
              </p>
            </p>
            <p className="tag-value"> </p>
          </div>
          <div className="count">
            <p className="tag-value"> </p>
          </div>
        </div>

        <div className="qt_container">
          <h3>{question}</h3>
          {options?.map((el, index) => {
            return (
              <div
                className="option-wrapper"
                onClick={() => {
                  selectedOption[currQuestion] = el;
                  setSelectedOption([...selectedOption]);
                }}
              >
                <li
                  className={`option ${
                    selectedOption[currQuestion]?.value === el.value
                      ? "option-active"
                      : ""
                  }`}
                >
                  {el.value}
                </li>
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-primary next-btn"
          onClick={() =>
            currQuestion + 1 === questions.length
              ? submitHandler()
              : nextHandler()
          }
        >
          {currQuestion + 1 === questions?.length ? "submit" : "next"}
        </button>
      </div>
    </div>
  );
};

export { QuestionPage };
