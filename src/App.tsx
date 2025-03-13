import React, { useState } from "react";
import Interpreter from "js-interpreter";
import Editor from "./components/Editor"; // Your editor component

const App: React.FC = () => {
  const [code, setCode] = useState<string>(""); // Code from the editor
  const [output, setOutput] = useState<string>(""); // State to hold output
  const [interpreter, setInterpreter] = useState<Interpreter | null>(null);

  // Start execution and initialize the interpreter
  const startExecution = () => {
    // Clear previous output
    setOutput("");

    // Initialize the interpreter with the code
    const myInterpreter = new Interpreter(code, (interpreter, globalObject) => {
      // Define a custom console object
      const consoleObj = interpreter.createObject(interpreter.OBJECT);
      interpreter.setProperty(
        consoleObj,
        "log",
        interpreter.createNativeFunction(function (...args) {
          // Convert arguments to native JS values and join them
          const message = args
            .map((arg) => interpreter.pseudoToNative(arg))
            .join(" ");
          // Append the message to the output state
          setOutput((prev) => prev + message + "\n");
        })
      );
      // Attach the custom console to the global scope
      interpreter.setProperty(globalObject, "console", consoleObj);
    });
    setInterpreter(myInterpreter);
  };

  // Run the entire code at once
  const runExecution = () => {
    if (interpreter) {
      interpreter.run();
    }
  };

  return (
    <div className="app">
      {/* Editor to input code */}
      <Editor code={code} setCode={setCode} />

      {/* Buttons to control execution */}
      <button onClick={startExecution}>Start Execution</button>
      <button onClick={runExecution}>Run All</button>

      {/* Display the captured output */}
      <div className="output">
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default App;
