import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizData } from "../../quizdata/quizData";
import "../Questions/questionPage.css";
const QuestionPage = () => {
  //const navigate = useNavigate();
  const { quizId } = useParams();
  const [myQuizData, setMyQuizData] = useState();

  useEffect(() => {
    setMyQuizData(
      QuizData.find((item) => {
        return item._id.toString() === quizId.toString();
      })
    );
  }, [quizId]);

  return (
    <div className="quiz-container">
      <div className="card-vertical ques theme-color">
        <h2 className="justify-center">{myQuizData?.heading}</h2>
        <div className="ques-and-score">
          <div className="count">
            <p className="tag">Question: </p>
            <p className="tag-value"></p>
          </div>
          <div className="count">
            <p className="tag-value"></p>
          </div>
        </div>
        {myQuizData?.questions.map((el) => {
          return <li>{el.question}</li>;
        })}

        <button className="btn btn-primary next-btn">submit</button>
      </div>
    </div>
  );
};

export { QuestionPage };
