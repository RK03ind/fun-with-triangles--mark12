import { useState } from "react";
import "./Quiz.css";

const Quiz = (props) => {
  const [quizAnswerState, setAnswerState] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  const qna = [
    {
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["45°", "90°", "60°"],
      answer: "90°",
    },
    {
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["obtuse", "acute", "right angled"],
      answer: "right angled",
    },
    {
      question: "A triangle can have ?",
      options: ["one right angle", "two right angles"],
      answer: "one right angle",
    },
    {
      question: "Which of the following can form a right angled triangle?",
      options: ["14, 15, 26", "12, 16, 20"],
      answer: "12, 16, 20",
    },
    {
      question: "Which of the following triangles are always similar?",
      options: ["Equilateral triangle", "Isosceles triangle"],
      answer: "Equilateral triangle",
    },
    {
      question:
        "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
      options: ["100°", "85°"],
      answer: "100°",
    },
    {
      question:
        "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
      options: ["30°", "10°"],
      answer: "30°",
    },
    {
      question: "The perimeter of scalene triangle with sides a, b, c is ?",
      options: ["a + b + c", "2a", "None of these"],
      answer: "a + b + c",
    },
    {
      question: "A scalene triangle has ___ lines of symmetry",
      options: ["two", "no", "15"],
      answer: "no",
    },
    {
      question:
        "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
      options: ["85°", "65°", "45°"],
      answer: "45°",
    },
  ];

  const onAnsChangeHandler = (e) => {
    setAnswerState((prevState) => {
      return {
        ...prevState,
        [`q${Number(e.target.name) + 1}`]: e.target.value,
      };
    });
  };

  const calcResult = () => {
    let score = 0;

    qna.forEach((item, index) => {
      if (item.answer === quizAnswerState[`q${index + 1}`]) {
        score += 10;
      }
    });
    props.setMessage(`Your score is ${score}`);
  };

  return (
    <>
      <div className="question-container">
        <h1>Quiz on triangles</h1>
        <h3>For each correct answer you will get 10 point</h3>

        {qna.map((item, index) => {
          return (
            <div className="question">
              <p>{item.question}</p>
              {item.options.map((option) => {
                return (
                  <label>
                    <input
                      type="radio"
                      name={index}
                      onChange={onAnsChangeHandler}
                      value={option}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          );
        })}
      </div>
      <button onClick={calcResult} className="check-quiz">
        Check
      </button>
    </>
  );
};

export default Quiz;
