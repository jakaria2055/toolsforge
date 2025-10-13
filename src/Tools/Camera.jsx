import { useCallback, useRef, useState } from "react";

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" },
        audio: false 
      });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }
    } catch (err) {
        console.log(err)
      alert("Unable to access camera. Please check permissions.");
    }
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = webcamRef.current.videoWidth;
      canvas.height = webcamRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(webcamRef.current, 0, 0);
      const imageSrc = canvas.toDataURL('image/jpeg');
      setImgSrc(imageSrc);
    }
  }, []);

  const downloadImage = () => {
    if (imgSrc) {
      const link = document.createElement('a');
      link.href = imgSrc;
      link.download = `photo-${Date.now()}.jpg`;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">Web Camera</h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">Take a Photo</h3>

            <div className="w-full max-w-2xl bg-black rounded-lg overflow-hidden mb-6">
              <video ref={webcamRef} autoPlay playsInline muted className="w-full h-auto" />
            </div>

            <div className="flex gap-4 mb-8">
              <button onClick={startCamera} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
                Start Camera
              </button>
              <button onClick={capture} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
                Capture Photo
              </button>
            </div>

            {imgSrc && (
              <div className="w-full max-w-2xl">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <img src={imgSrc} alt="Captured" className="w-full h-auto rounded-lg" />
                </div>
                <button onClick={downloadImage} className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition">
                  Download Photo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Camera;