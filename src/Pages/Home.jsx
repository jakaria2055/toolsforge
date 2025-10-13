import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/image/ToolsForge.png"
                alt="app logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">
                ToolsForge
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All-in-One Tool Suite
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools for your daily tasks. Generate, convert, edit, and
            manage files with ease.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* QR Code Generator */}
          <Link
            to={"/qr-code"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white"
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
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                QR Code Generator
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Create custom QR codes for URLs, text, and contact information
            </p>
          </Link>

          {/* Media Player */}
          <Link
            to={"/media-player"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-purple-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                Media Player
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Play audio and video files with advanced controls
            </p>
          </Link>

          {/* Blog Pagination */}
          <Link
            to={"/pagination"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                <img
                  src="/icon/blog.svg"
                  alt=""
                  className="text-green-700 w-6 h-6 group-hover:text-white"
                />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                Blog Pagination
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Read Blog with Pagination style.
            </p>
          </Link>

           {/* Blog Pagination */}
          <Link
            to={"/rechart"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                <img
                  src="/icon/chart.svg"
                  alt=""
                  className="text-green-700 w-6 h-6 group-hover:text-white"
                />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Re-Charts
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Visualize all of your activity.
            </p>
          </Link>

          {/* Camera */}
          <Link
            to={"/camera"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-green-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                Camera
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Capture photos and record videos with your device camera
            </p>
          </Link>

          {/* Image to PDF */}
          <Link
            to={"/image-pdf"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-red-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-red-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                Image to PDF
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Convert multiple images into a single PDF document
            </p>
          </Link>

          {/* Excel Reader */}
          <Link
            to={"/xl-reader"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-green-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                Excel Reader
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Read and analyze Excel files with data visualization
            </p>
          </Link>

          {/* Image Compressor */}
          <Link
            to={"/img-compress"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-orange-600 group-hover:text-white"
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
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                Image Compressor
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Reduce image file size without losing quality
            </p>
          </Link>

          {/* Code Editor */}
          <Link
            to={"/code-editor"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-500 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-indigo-600 group-hover:text-white"
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
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                Code Editor
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Write and edit code with syntax highlighting
            </p>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500">More tools coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
