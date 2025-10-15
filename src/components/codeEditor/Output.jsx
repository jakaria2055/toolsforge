import React, { useState } from "react";
import { executeCode } from "../../utility/codeEditor/api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode);
      const outputText = result.run.output
        ? result.run.output.split("\n")
        : ["No output"];
      setOutput(outputText);
      setIsError(!!result.run.stderr);
    } catch (error) {
      console.error(error);
      setOutput(["Error running code!"]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[80vh] flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-700 font-semibold text-lg">Output:</p>
        <button
          onClick={runCode}
          disabled={isLoading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>

      <div
        className={`flex-1 border rounded-md p-3 overflow-y-auto text-sm font-mono ${
          isError ? "border-red-500 bg-red-50 text-red-600" : "border-green-500 bg-green-50 text-gray-800"
        }`}
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see output here.'}
      </div>
    </div>
  );
};

export default Output;
