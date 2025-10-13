import React, { useState } from "react";
import * as XLSX from "xlsx";

const XLFileReader = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError("⚠️ Failed to read the Excel file. Please upload a valid one.");
        setData([]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      {/* Navbar */}
      <nav className="backdrop-blur-md bg-white/80 shadow-lg border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 rounded-xl shadow-sm">
                <img src="/icon/xl.svg" alt="XL" className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-extrabold text-indigo-700 tracking-wide">
                XL File Reader
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-indigo-100 p-10 transition-transform hover:scale-[1.01]">
          <div className="flex flex-col items-center">
            <h3 className="mb-8 text-4xl font-extrabold text-gray-800 tracking-tight text-center">
              Excel File <span className="text-indigo-600">Reader</span>
            </h3>

            {/* File Input */}
            <label className="flex flex-col items-center justify-center w-full max-w-md border-2 border-dashed border-indigo-300 rounded-2xl p-6 mb-6 cursor-pointer bg-indigo-50/50 hover:bg-indigo-100 transition">
              <input
                onChange={handleFileUpload}
                type="file"
                accept=".xlsx, .xls"
                className="hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-indigo-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 4h.01M12 20h.01M12 16h.01"
                />
              </svg>
              <p className="text-indigo-600 font-medium">
                Click or drag an Excel file here
              </p>
            </label>

            {/* Error */}
            {error && (
              <div className="text-red-600 font-semibold bg-red-50 px-4 py-2 rounded-lg mb-4">
                {error}
              </div>
            )}

            {/* Table */}
            {data.length > 0 && (
              <div className="w-full overflow-x-auto mt-4">
                <table className="min-w-full border border-indigo-100 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
                    <tr>
                      {Object.keys(data[0]).map((key) => (
                        <th
                          key={key}
                          className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-indigo-50"
                        } hover:bg-indigo-100 transition`}
                      >
                        {Object.values(row).map((val, i) => (
                          <td
                            key={i}
                            className="px-4 py-3 text-sm text-gray-800 border-b border-indigo-100"
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Placeholder text */}
            {data.length === 0 && !error && (
              <p className="text-gray-500 mt-8 italic text-sm">
                Upload an Excel file (.xlsx or .xls) to display its content.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XLFileReader;
