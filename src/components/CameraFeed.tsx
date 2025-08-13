import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

function CameraFeed() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const detectedPeople = Array.from({ length: 50 }, (_, i) => ({
    name: `Person ${i + 1}`,
    id: `EMP${String(i + 1).padStart(3, "0")}`,
    time: new Date(Date.now() - i * 5 * 60 * 1000).toLocaleString(),
    image: "https://via.placeholder.com/40",
  }));

  const mainFeedIndex = parseInt(id || "0", 10);

  const toggleFullscreen = () => {
    const feedContainer = document.getElementById("camera-feed-container");
    if (!feedContainer) return;

    if (!isFullscreen) {
      if (feedContainer.requestFullscreen) {
        feedContainer.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleDoubleClick = () => {
    toggleFullscreen();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#15233e]">
      {/* Mobile Header - Shows on mobile and tablet */}
      <div className="md:hidden flex items-center gap-2 p-4">
        <button onClick={() => navigate('/CameraPanel')} className="text-white hover:text-gray-300">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h4 className="text-lg font-semibold uppercase">Camera Feed</h4>
      </div>

      {/* Left - Main Camera Feed Container */}
      <div 
        id="camera-feed-container"
        className="flex-1 relative p-4 md:p-6 text-gray-200 flex flex-col min-h-[50vh] md:min-h-0 md:h-full"
        onDoubleClick={handleDoubleClick}
      >
        {/* Desktop Header - Shows on tablet and desktop */}
        <div className="hidden md:flex items-center gap-4 mb-2">
          <button onClick={() => navigate('/CameraPanel')} className="text-white hover:text-gray-300">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h4 className="text-lg font-semibold uppercase">Camera Feed</h4>
        </div>

        {/* Fullscreen toggle button - Responsive positioning */}
        <button 
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
          )}
        </button>

        {/* Camera Feed Content */}
        <div className="flex-1 mt-4 bg-gray-500 rounded-xl flex items-center justify-center aspect-video md:aspect-auto">
          {/* Camera feed content here */}
        </div>
      </div>

      {/* Right - Detected People Container */}
      <div className="w-full md:w-[340px] p-4 md:p-6 text-gray-200 flex flex-col bg-[#182d5c] md:h-full border-l border-[#3c5c8f]">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm md:text-lg font-medium uppercase">Detected People</h4>
          <span className="text-xs bg-[#d5dee2] text-black px-2 py-1 rounded">
            {detectedPeople.length} detected
          </span>
        </div>

        {/* Scrollable container */}
        <div className="flex-1 mt-4 md:mt-6 overflow-hidden">
          <ScrollArea className="h-[40vh] md:h-full w-full pr-1">
            <div className="flex flex-col gap-2 md:gap-3">
              {detectedPeople.map((person, index) => (
                <div
                  key={person.id}
                  className={`bg-gray-600 p-3 md:p-4 rounded-xl cursor-pointer transition-all duration-200
                    ${mainFeedIndex === index ? "ring-1 ring-white" : "hover:bg-gray-700"}`}
                  onClick={() => navigate(`/CameraFeed/${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-white text-xs md:text-sm truncate max-w-[120px] md:max-w-[180px]">
                      {person.name}
                    </p>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-sm border border-[#00b7c2]"
                    />
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-300">{person.time.split(",")[1].trim()}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default CameraFeed;