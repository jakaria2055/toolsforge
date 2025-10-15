import React, { useState } from "react";

const Base64 = () => {
  const [base64, setBase64] = useState();
  const [fileName, setFileName] = useState();
  const [copySuccess, setCopySuccess] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopy = () => {
    if(base64){
        navigator.clipboard.writeText(base64).then(()=> {
            setCopySuccess("Copied to Clipboard");
            setTimeout(() => setCopySuccess(""), 2000)
        })
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <img
                src="/icon/base64.svg"
                alt=""
                className="w-6 h-6 text-pink-600"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Image to Base64</h1>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Base64 Converter
            </h3>
            <p className="text-gray-600 text-lg">
              Convert your images to Base64 instantly for browser compatibility
            </p>
          </div>

          {/* Upload Section */}
          <div className="mb-8">
            <div className="flex flex-col items-center">
              <label htmlFor="imageUpload" className="block text-lg font-semibold text-gray-700 mb-4">
                Upload an Image *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 w-full max-w-md hover:border-indigo-400 transition-colors duration-300">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full cursor-pointer"
                  onChange={handleFileChange}
                />
                <p className="text-gray-500 text-sm mt-2">Supported formats: JPG, PNG, GIF, WebP</p>
              </div>
            </div>
          </div>

          {base64 && (
            <div className="space-y-8">
              {/* File Info */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-gray-800">File Name: <span className="text-blue-600">{fileName}</span></h5>
              </div>

              {/* Base64 Output */}
              <div>
                <h6 className="text-lg font-semibold text-gray-700 mb-3">Base64 Output:</h6>
                <div className="relative">
                  <textarea
                    value={base64}
                    readOnly
                    rows={8}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 font-mono text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Copy Button */}
              <div className="flex flex-col items-center space-y-4">
                <button 
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                  onClick={handleCopy}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Base64 Code</span>
                </button>
                
                {copySuccess && (
                  <div className="flex items-center space-x-2 bg-green-100 border border-green-200 text-green-700 px-4 py-2 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">{copySuccess}</span>
                  </div>
                )}
              </div>

              {/* Preview Image */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h6 className="text-lg font-semibold text-gray-700 mb-4 text-center">Image Preview</h6>
                <div className="flex justify-center">
                  <img 
                    src={base64} 
                    alt="uploaded" 
                    className="max-w-full h-64 object-contain rounded-lg shadow-md border border-gray-300"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Base64;