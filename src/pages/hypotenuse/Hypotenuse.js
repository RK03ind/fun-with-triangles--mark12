import { useState } from "react";

const Hypotenuse = (props) => {
  const [inputState, setInputFieldState] = useState({
    baseA: "",
    baseB: "",
  });

  const onInputChangeHandler = (e) => {
    setInputFieldState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: parseFloat(e.target.value),
      };
    });
  };

  const calcHypotenuse = (e) => {
    let hypotenuse;
    if (inputState.baseA && inputState.baseB) {
      hypotenuse = Math.sqrt(
        Math.pow(inputState.baseA, 2) + Math.pow(inputState.baseB, 2)
      );
    } else {
      alert("Fill up all the fields");
    }
    props.setMessage(`The length of hypotenuse is ${hypotenuse} units.`);
  };

  return (
    <>
      <h1>Calculate Hypotenuse</h1>
      <label>Enter base value (a) =</label>
      <input
        type="number"
        name="baseA"
        value={inputState.baseA}
        onChange={onInputChangeHandler}
        min="0"
      />

      <label>Enter base value (b) =</label>
      <input
        type="number"
        name="baseB"
        value={inputState.baseB}
        onChange={onInputChangeHandler}
        min="0"
      />
      <button onClick={calcHypotenuse}>Calculate Hypotenuse</button>

      <h2>Hypotenuse formula</h2>
      <h3>√(base² + height²)</h3>
    </>
  );
};

export default Hypotenuse;
