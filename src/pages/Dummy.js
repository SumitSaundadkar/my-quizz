import React from "react";
import { Link } from "react-router-dom";

const Dummy = () => {
  return (
    <main className="rules-main-container">
      <div class="card-vertical rules-card">
        <h3 class="justify-center">Rules to be followed</h3>
        <ul class="rules-main">
          <li class="rule">💪 &nbsp You will face 5 Questions</li>
          <li class="rule">💎 &nbsp The right answer will give you 2 points</li>
          <li class="rule">😄 &nbsp There is no negative marking</li>
          <li class="rule">🏆 &nbsp Score atleast 70% to win.</li>
        </ul>
        <Link to={"#"}>
          <button class="btn btn-primary start-btn">Start Quiz</button>
        </Link>
      </div>
    </main>
  );
};

export { Dummy };
