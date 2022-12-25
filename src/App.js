import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/Navbar";
import { HomePage } from "../src/pages/homePage";
import { Rules } from "./pages/rule/rule";
import { QuestionPage } from "./pages/Questions/questionPage";
import { Result } from "./pages/result/result";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rule/:quizPage" element={<Rules />} />
        <Route path="/questions/:quizId" element={<QuestionPage />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
