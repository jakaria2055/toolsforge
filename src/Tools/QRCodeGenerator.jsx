import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("https://www.google.com");

  const downloadImg = () => {
    const canvas = document.querySelector("canvas");
    const imageDataURI = canvas.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = imageDataURI;
    el.download = "qrcode.png";
    el.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4M6 6h2v2H6zm0 10h2v2H6zm10-10h2v2h-2zm0 10h2v2h-2z"
                  />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">QR Code Generator</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">QR Code Generator</h3>
            
            <div className="w-full max-w-md mb-8">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter URL or text to generate QR Code"
              />
            </div>

            {input && (
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200 inline-block mb-6">
                  <QRCodeCanvas
                    value={input}
                    size={200}
                    level="M"
                  />
                </div>
                
                <button 
                  onClick={downloadImg} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
                >
                  Download QR Code
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRCodeGenerator;