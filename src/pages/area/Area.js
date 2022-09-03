import { useState } from "react";

const Area = (props) => {
  const [inputState, setInputFieldState] = useState({
    side1: "",
    side2: "",
    side3: "",
  });

  const onInputChangeHandler = (e) => {
    setInputFieldState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: parseFloat(e.target.value),
      };
    });
  };

  const isTriangleValid = () => {
    const { side1, side2, side3 } = inputState;
    if (
      side1 + side2 > side3 &&
      side2 + side3 > side1 &&
      side1 + side3 > side2
    ) {
      return true;
    }
    return false;
  };

  const calcArea = () => {
    let { side1, side2, side3 } = inputState;
    if (side1 && side2 && side3) {
      if (!isTriangleValid()) {
        return props.setMessage("Enter valid triangle sides");
      }
      const semiPerimeter = (side1 + side2 + side3) / 2;
      const area = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - side1) *
          (semiPerimeter - side2) *
          (semiPerimeter - side3)
      ).toPrecision(6);
      props.setMessage(`The Area of the triangle is ${area} units.`);
    } else {
      props.setMessage("Fill up all the fields with valid data");
    }
  };

  return (
    <>
      <h1>Area of Triangle</h1>
      <label>Enter first side of the triangle =</label>
      <input
        type="number"
        name="side1"
        value={inputState.side1}
        onChange={onInputChangeHandler}
        min="0"
      />

      <label>Enter second side of the triangle =</label>
      <input
        type="number"
        name="side2"
        value={inputState.side2}
        onChange={onInputChangeHandler}
        min="0"
      />

      <label>Enter third side of the triangle =</label>
      <input
        type="number"
        name="side3"
        value={inputState.side3}
        onChange={onInputChangeHandler}
        min="0"
      />
      <button onClick={calcArea}>Find Area</button>
    </>
  );
};

export default Area;
