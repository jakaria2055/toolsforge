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

          {/* Img to Base64*/}
          <Link
            to={"/img-base64"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-pink-400 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-pink-500 group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M21.039 18.904V5.096zM2.961 9.173V5.096H6.98v4.077zm4.788 0V5.096h3.866v4.077zm4.635 0V5.096h3.865v4.077zm4.634 0V5.096h4.02v4.077zm0 4.885V9.942h4.02v4.116zm-4.634 0V9.942h3.865v4.116zm-4.635 0V9.942h3.866v4.116zm-4.789 0V9.942h4.02v4.116zm14.058 4.846v-4.077h4.02v4.077zm-4.634 0v-4.077h3.865v4.077zm-4.635 0v-4.077h3.866v4.077zm-4.789 0v-4.077h4.02v4.077z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition-colors duration-300">
                Img to Base64
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Convert your image into web adaptable, enjoy unlimited base64
            </p>
          </Link>

          {/* Screen Recorder */}
          <Link
            to={"/screen-recorder"}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-cyan-500 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-cyan-500 group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M9.98 12.86V16q0 .213.145.356t.357.144t.356-.144t.143-.356v-3.14l2.9 1.667q.177.104.378.053t.302-.229t.045-.381t-.231-.303L11.481 12l2.894-1.667q.175-.099.23-.302t-.044-.382t-.302-.229q-.201-.05-.378.053l-2.9 1.668V8q0-.213-.144-.356q-.144-.144-.357-.144t-.356.144T9.981 8v3.14L7.1 9.474q-.177-.104-.378-.053q-.202.051-.302.229t-.045.382t.23.302L9.482 12l-2.875 1.667q-.175.099-.23.302t.044.382t.302.229t.378-.053zM5.097 19q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152T5.096 5h10.77q.69 0 1.152.463t.463 1.153v4.653l2.348-2.348q.186-.186.438-.09q.252.098.252.369v5.6q0 .272-.252.369t-.438-.09l-2.348-2.348v4.654q0 .69-.463 1.153T15.866 19z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-cyan-500 transition-colors duration-300">
                Screen Recorder
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Record lifetime what are you doing. And share with friends.
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

          {/* Rechart */}
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
