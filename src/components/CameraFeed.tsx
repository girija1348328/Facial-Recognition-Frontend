import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";

function CameraFeed() {
  const { id } = useParams();
  const navigate = useNavigate();

  const detectedPeople = Array.from({ length: 50 }, (_, i) => ({
    name: `Person ${i + 1}`,
    id: `EMP${String(i + 1).padStart(3, "0")}`,
    time: new Date(Date.now() - i * 5 * 60 * 1000).toLocaleString(),
    image: "https://via.placeholder.com/40",
  }));

  const mainFeedIndex = parseInt(id || "0", 10);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden bg-[#102b5b]">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center gap-2 p-4">
        <button onClick={() => navigate(-1)} className="text-white hover:text-gray-300">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h4 className="text-lg font-semibold uppercase">Camera Feed</h4>
      </div>

      {/* Left - Main Camera Feed */}
      <div className="flex-1 p-4 lg:p-6 text-gray-200 flex flex-col min-h-[50vh] lg:min-h-0 lg:h-[calc(100vh-48px)]">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center gap-2 mb-4">
          <button onClick={() => navigate(-1)} className="text-white hover:text-gray-300">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h4 className="text-lg font-semibold uppercase">Camera Feed</h4>
        </div>

        <div className="flex-1 bg-gray-500 rounded-xl flex items-center justify-center aspect-video lg:aspect-auto">
          <span className="text-xl font-bold text-gray-200">
            {detectedPeople[mainFeedIndex]?.name || "Detecting Face..."}
          </span>
        </div>
      </div>

      {/* Right - Sidebar - Detected People */}
      <div className="w-full lg:w-[440px] p-4 lg:p-6 text-gray-200 flex flex-col bg-[#102b5b] lg:h-[calc(100vh-48px)]">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm lg:text-md font-medium uppercase">Detected People</h4>
          <span className="text-xs bg-[#d5dee2] text-black px-2 py-1 rounded">
            {detectedPeople.length} detected
          </span>
        </div>

        {/* Scrollable container for all viewports */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-[40vh] lg:h-full w-full pr-1">
            <div className="flex flex-col gap-2 lg:gap-3">
              {detectedPeople.map((person, index) => (
                <div
                  key={person.id}
                  className={`bg-gray-600 p-3 lg:p-4 rounded-xl cursor-pointer transition-all duration-200
                    ${mainFeedIndex === index ? "ring-1 ring-white" : "hover:bg-gray-700"}`}
                  onClick={() => navigate(`/CameraFeed/${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-white text-xs lg:text-sm truncate max-w-[120px] lg:max-w-[180px]">
                      {person.name}
                    </p>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-sm border border-[#00b7c2]"
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