import "./quizCategory.css";
import { useNavigate } from "react-router-dom";
const QuizCategory = ({ cardData }) => {
  const { _id, heading, desc, src } = cardData;
  const navigate = useNavigate();

  const clickHandler = (categoryId) => {
    navigate(`/rule/${categoryId}`);
    sessionStorage.setItem("currQuiz", categoryId);
  };
  return (
    <div className="card-vertical theme" onClick={() => clickHandler(_id)}>
      <img
        src={src}
        alt="pic"
        loading="lazy"
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <div className="card-body">
        <h3 className="card-header">{heading}</h3>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
};
export { QuizCategory };
