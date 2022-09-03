import { useState } from "react";

const IsTriangle = (props) => {
  const [inputState, setInputFieldState] = useState({
    angle1: "",
    angle2: "",
    angle3: "",
  });

  const onInputChangeHandler = (e) => {
    setInputFieldState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: parseFloat(e.target.value),
      };
    });
  };

  const checkTriangle = (e) => {
    let { angle1, angle2, angle3 } = inputState;
    if (angle1 && angle2 && angle3) {
      if (angle1 + angle2 + angle3 === 180) {
        props.setMessage("The given angles forms a triangle.");
      } else {
        props.setMessage("The given angles doesn't form a triangle.");
      }
    } else {
      props.setMessage("Fill up all the fields with valid data");
    }
  };

  return (
    <>
      <h1>Angles of triangles</h1>
      <label>Angle 1 =</label>
      <input
        type="number"
        name="angle1"
        value={inputState.angle1}
        onChange={onInputChangeHandler}
        min="0"
      />

      <label>Angle 2 =</label>
      <input
        type="number"
        name="angle2"
        value={inputState.angle2}
        onChange={onInputChangeHandler}
        min="0"
      />

      <label>Angle 3 =</label>
      <input
        type="number"
        name="angle3"
        value={inputState.angle3}
        onChange={onInputChangeHandler}
        min="0"
      />
      <button onClick={checkTriangle}>Is Triangle?</button>
    </>
  );
};

export default IsTriangle;
