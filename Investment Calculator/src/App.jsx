import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });
  function handleInputUpdate(inputType,newValue){
      setUserInput(prevUserInput =>{
          const newUserInput = {
              ...prevUserInput,
              [inputType]:+newValue
          };
          return newUserInput;
      })
  }
  const inputIsValid = userInput.duration >= 1;
  return (
    <>
        <Header/>
        <UserInput onInputChange={handleInputUpdate} userInput={userInput}/>
        {inputIsValid ? (<Table input={userInput} />) : (<p className="center">Please enter a duration greater than zero.</p>)}
    </>

  )
}

export default App
