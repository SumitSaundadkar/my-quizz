import "../rule/rule.css";
import { Link } from "react-router-dom";
import { actionConstants } from "../../hooks/actionConst";
import { useQuiz } from "../../context/dataContext";
import { useEffect } from "react";
export const Rules = () => {
  const currQuiz = sessionStorage.getItem("currQuiz");
  const { quizDispatch } = useQuiz();

  const { START_QUIZ } = actionConstants;

  useEffect(() => {
    quizDispatch({ type: START_QUIZ });
  }, [quizDispatch, START_QUIZ]);

  return (
    <main className="rules-main-container">
      <div className="card-vertical rules-card">
        <h3 className="justify-center">Rules to be followed</h3>
        <ul className="rules-main">
          <li className="rule">💪 You will face 5 Questions</li>
          <li className="rule">💎 The right answer will give you 2 points</li>
          <li className="rule">😄 There is no negative marking</li>
          <li className="rule">🏆 Score atleast 70% to win.</li>
        </ul>
        <Link to={`/questions/${currQuiz}`}>
          <button
            class="btn btn-primary start-btn"
            onClick={() => {
              quizDispatch({ type: START_QUIZ });
            }}
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </main>
  );
};
