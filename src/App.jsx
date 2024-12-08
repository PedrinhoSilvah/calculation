import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState(null);

 
  const handleInput = (value) => {
    setDisplay((prev) => prev + value);
  };

 
  const performOperation = (operator) => {
    if (display === "") return;
    const currentNumber = parseFloat(display);

    if (result === null) {
      setResult(currentNumber);
    } else if (operation) {
      const newResult = calculate(result, currentNumber, operation);
      setResult(newResult);
    }

    setOperation(operator);
    setDisplay("");
  };

 
  const calculate = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Erro";
      default:
        return b;
    }
  };

 
  const handleEquals = () => {
    if (operation && display !== "") {
      const newResult = calculate(result, parseFloat(display), operation);
      setDisplay(newResult.toString());
      setResult(newResult);
      setOperation(null);
    }
  };

 
  const handleClear = () => {
    setDisplay("");
    setResult(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display || result || "0"}</div>
      <div className="buttons">
        <div className="row">
          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleInput(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => performOperation("/")}>÷</button>
        </div>
        <div className="row">
          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleInput(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => performOperation("*")}>×</button>
        </div>
        <div className="row">
          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleInput(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => performOperation("-")}>−</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={handleEquals}>=</button>
          <button onClick={() => performOperation("+")}>+</button>
        </div>
        <div className="row">
          <button className="clear" onClick={handleClear}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
