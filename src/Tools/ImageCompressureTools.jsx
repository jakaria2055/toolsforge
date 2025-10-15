import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const ImageCompressureTools = () => {
  const [originalImage, setOriginalImage] = useState();
  const [compressedImage, setCompressedImage] = useState();
  const [originalImageSize, setOriginalImageSize] = useState();
  const [compressedImageSize, setCompressedImageSize] = useState();
  const [isCompressing, setIsCompressing] = useState();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOriginalImage(file);
      setOriginalImageSize((file.size / 1024).toFixed(2));
      setCompressedImage(null);
      setCompressedImageSize(0);
    }
  };

  const handleCompression = async () => {
    if (!originalImage) {
      alert("Please upload an image!");
      return;
    }

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      setIsCompressing(true);
      const compressedFile = await imageCompression(originalImage, options);
      const compressedFileUrl = URL.createObjectURL(compressedFile);
      setCompressedImage(compressedFileUrl);
      setCompressedImageSize((compressedFile.size / 1024).toFixed(2));
      setIsCompressing(false);
    } catch (error) {
      console.log("Compression error due to ", error);
      setIsCompressing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">
                Image Compressor
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Compress Your Images
            </h3>
            <p className="text-gray-600">Reduce image size without losing quality</p>
          </div>

          {/* Upload Section */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4 text-center">
              Upload Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors duration-300">
              <input
                type="file"
                className="w-full max-w-md mx-auto cursor-pointer"
                onChange={handleImageUpload}
                accept="image/*"
              />
              <p className="text-gray-500 mt-2">Click or drag to upload an image</p>
            </div>
          </div>

          {/* Images Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Original Image */}
            {originalImage && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                  Original Image
                </h3>
                <div className="flex justify-center mb-4">
                  <img
                    src={URL.createObjectURL(originalImage)}
                    alt="original"
                    className="max-w-full h-64 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-800 bg-red-100 inline-block px-4 py-2 rounded-full">
                    Size: {originalImageSize} KB
                  </p>
                </div>
              </div>
            )}

            {/* Compressed Image */}
            {compressedImage && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                  Compressed Image
                </h3>
                <div className="flex justify-center mb-4">
                  <img
                    src={compressedImage}
                    alt="compressed"
                    className="max-w-full h-64 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="text-center space-y-3">
                  <p className="font-semibold text-gray-800 bg-green-100 inline-block px-4 py-2 rounded-full">
                    Size: {compressedImageSize} KB
                  </p>
                  <a href={compressedImage} download={"compressed-img.jpg"}>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105">
                      Download Compressed Image
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Compress Button */}
          {originalImage && !compressedImage && (
            <div className="text-center mt-8">
              <button
                onClick={handleCompression}
                disabled={isCompressing}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              >
                {isCompressing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Compressing...
                  </span>
                ) : (
                  "Compress Image"
                )}
              </button>
            </div>
          )}

          {/* Stats */}
          {compressedImage && originalImageSize && compressedImageSize && (
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Compression Results</h4>
              <p className="text-gray-700">
                Reduced by <span className="font-bold text-green-600">{((1 - compressedImageSize / originalImageSize) * 100).toFixed(1)}%</span> • 
                Saved <span className="font-bold text-green-600">{(originalImageSize - compressedImageSize).toFixed(1)} KB</span>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ImageCompressureTools;