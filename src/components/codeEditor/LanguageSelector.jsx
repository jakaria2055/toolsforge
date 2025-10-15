import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "../../utility/codeEditor/constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ onSelect }) => {
  const [selectedLang, setSelectedLang] = useState("javascript");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    if (onSelect) onSelect(lang);
  };

  return (
    <div className="relative inline-block text-left mb-4">
      <p className="mb-2 text-gray-700 font-semibold">Language:</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-52 px-4 py-2 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-50 transition"
      >
        <span className="capitalize">{selectedLang}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {languages.map(([lang, version]) => (
            <li
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`px-4 py-2 cursor-pointer hover:bg-indigo-100 ${
                selectedLang === lang ? "bg-indigo-50 font-semibold" : ""
              }`}
            >
              {lang}{" "}
              <span className="text-gray-500 text-sm">({version})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
