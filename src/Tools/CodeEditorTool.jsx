import React, { useRef, useState } from "react";
import LanguageSelector from "../components/codeEditor/LanguageSelector";
import { CODE_SNIPPETS } from "../utility/codeEditor/constants";
import Editor from "@monaco-editor/react";
import Output from "../components/codeEditor/Output";

const CodeEditorTool = () => {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS.javascript);
  const editorRef = useRef();

  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Online Code Editor</h1>
          </div>
        </div>
      </nav>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Code Editor</h3>
            <p className="text-gray-600">
              Run your JavaScript, Python, PHP, or Java code instantly in browser.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Editor Section */}
            <div className="w-full lg:w-1/2">
              <LanguageSelector onSelect={onSelect} />

              <Editor
                height="80vh"
                theme="vs-dark"
                language={language}
                value={value}
                onChange={(value) => setValue(value)}
                onMount={onMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                }}
              />
            </div>

            {/* Output Section */}
            <div className="w-full lg:w-1/2">
              <Output editorRef={editorRef} language={language} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeEditorTool;
