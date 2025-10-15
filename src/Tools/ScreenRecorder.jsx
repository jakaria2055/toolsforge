import React, { useRef, useState } from "react";

const ScreenRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const intervalRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: "screen" },
    });
    const chunks = [];
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoURL(URL.createObjectURL(blob));
      clearInterval(intervalRef.current);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
    setRecordingTime(0);
    intervalRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const formateTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <img
                src="/icon/screen-recorder.svg"
                alt=""
                className="w-6 h-6 text-cyan-600"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Screen Recorder</h1>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Screen Recorder
            </h3>
            <p className="text-gray-600 text-lg">
              Record your screen activity with high quality
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {/* Recording Controls */}
            <div className="flex flex-col items-center space-y-4">
              <button
                className={`px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-105 ${
                  isRecording 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
                onClick={isRecording ? stopRecording : startRecording}
              >
                <div className="flex items-center space-x-3">
                  {isRecording ? (
                    <>
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span>Stop Recording</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Start Recording</span>
                    </>
                  )}
                </div>
              </button>

              {/* Recording Timer */}
              {isRecording && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-6 py-3">
                  <h6 className="text-xl font-semibold text-red-700 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <span>Recording: {formateTime(recordingTime)}</span>
                  </h6>
                </div>
              )}
            </div>

            {/* Video Preview and Download */}
            {videoURL && (
              <div className="w-full space-y-6">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  <video 
                    controls 
                    className="w-full max-w-2xl mx-auto"
                    poster="/api/placeholder/800/450"
                  >
                    <source src={videoURL} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="flex justify-center">
                  <a
                    href={videoURL}
                    download={`screen-recording-${new Date().toISOString().split('T')[0]}.webm`}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download Recording</span>
                  </a>
                </div>

                {/* Recording Summary */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-blue-700 font-medium">
                    Recording Duration: {formateTime(recordingTime)}
                  </p>
                </div>
              </div>
            )}

            {/* Instructions */}
            {!isRecording && !videoURL && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 max-w-md text-center">
                <h4 className="font-semibold text-gray-800 mb-3">How to use:</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>1. Click "Start Recording" button</li>
                  <li>2. Select the screen/window you want to record</li>
                  <li>3. Click "Stop Recording" when finished</li>
                  <li>4. Download your recording</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScreenRecorder;