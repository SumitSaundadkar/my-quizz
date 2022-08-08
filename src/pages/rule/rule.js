import "../rule/rule.css";
import { Link, useParams } from "react-router-dom";
export const Rules = () => {
  const { quizPage } = useParams();

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
        <Link to={`/questions/${quizPage}`}>
          <button class="btn btn-primary start-btn">Start Quiz</button>
        </Link>
      </div>
    </main>
  );
};
