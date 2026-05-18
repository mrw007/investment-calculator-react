import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputs.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration (at least 1 year).</p>}
      {inputIsValid && <Results inputs={inputs} />}
    </>
  );
}

export default App;
