import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Cctv } from "lucide-react";

const features = [
  { title: "Add IP Camera", route: "/CameraFeedManagement" },
  { title: "Image", route: "/" },
];

export default function Camera() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (idx: number) => {
    setActiveIndex(idx);
    navigate(features[idx].route);
  };

  return (
    <div className="bg-[#0f1f3d] text-white p-4 md:p-6">
      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Container */}
        <div className="w-full lg:w-1/3 bg-[#233864] rounded-lg shadow-md flex justify-center items-center 
                        p-4 lg:h-[72.5vh]">
          <Cctv size={100} className="text-white/80" />
        </div>

        {/* Divider - hidden on small screens */}
        <div className="hidden lg:block w-[2px] bg-[#3c5c8f]" />

        {/* Right Container */}
        <div className="w-full lg:w-2/3 bg-[#233864] rounded-lg shadow-md p-18 lg:h-[72.5vh] flex items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                onClick={() => handleClick(idx)}
                className={`rounded-sm p-10 cursor-pointer transition-all border-none h-full flex ${
                  activeIndex === idx
                    ? "bg-[#E84545] text-white"
                    : "bg-[#1f2e4d] hover:bg-[#2a3d66] text-white/80 hover:text-white"
                }`}
              >
                <CardContent className="p-0 flex items-center justify-center w-full h-full">
                  <div className="text-m font-semibold">{feature.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
