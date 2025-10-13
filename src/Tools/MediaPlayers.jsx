import { useState } from "react";

const MediaPlayers = () => {
  const [input, setInput] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [fileUrl, setFileUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [playerType, setPlayerType] = useState("youtube");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFileUrl(input);
  };

  const sampleVideos = [
    { name: "YouTube Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", type: "youtube" },
    { name: "MP4 Sample", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", type: "video" },
    { name: "Another MP4", url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4", type: "video" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">Media Player</h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Video Player
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center mb-6 w-full max-w-2xl"
            >
              <label htmlFor="inputVideoUrl" className="font-medium mb-2 text-gray-700">
                Enter Video URL
              </label>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                id="inputVideoUrl"
                name="inputVideoUrl"
                className="border-2 border-gray-300 rounded-lg p-3 mb-3 w-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter YouTube URL or direct video link"
                required
              />

              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-md"
              >
                Load Video
              </button>
            </form>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Try these sample videos:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {sampleVideos.map((video, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(video.url);
                      setFileUrl(video.url);
                      setPlayerType(video.type);
                    }}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm transition"
                  >
                    {video.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
              {playerType === "youtube" && fileUrl.includes("youtube") ? (
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${fileUrl.split("v=")[1]?.split("&")[0] || ""}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              ) : (
                <video
                  key={fileUrl}
                  controls
                  className="w-full"
                  style={{ maxHeight: "500px" }}
                >
                  <source src={fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>Supported formats: YouTube URLs, MP4 video files</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPlayers;