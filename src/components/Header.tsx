import React, { useState } from "react";
import {
  VideoIcon,
  CameraIcon,
  BrainCircuit,
  SettingsIcon,
  UserIcon,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { label: "Video", icon: VideoIcon },
  { label: "Camera", icon: CameraIcon },
  { label: "Intelligent", icon: BrainCircuit },
  { label: "Settings", icon: SettingsIcon },
  { label: "Account", icon: UserIcon },
];

export function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  const handleClick = (label: string) => {
    setActiveTab(label);
    setSidebarOpen(false);
    if (label === "Camera") navigate("/Camera");
    else if (label === "Intelligent") navigate("/Intelligent");
    else if (label === "Settings") navigate("/Settings");
    else if (label === "Account") navigate("/Accounts");
    else if (label === "Video") navigate("/Video");
  };

  return (
    <>
      {/* Header */}
      <div className="w-full bg-[#1A2B4C] text-white md:px-8 px-4 py-3 flex items-center md:justify-center shadow-lg relative">
        {/* Mobile menu button */}
        <button
          className="block md:hidden mr-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main tabs for md+ screens */}
        <div className="hidden md:flex flex-row w-full max-w-6xl divide-x border divide-[#3c5c8f] border-[#3c5c8f] rounded overflow-hidden">
          {tabs.map(({ label, icon: Icon }, index) => (
            <div
              key={index}
              onClick={() => handleClick(label)}
              className={`flex-1 py-3 px-6 ${
                activeTab === label ? "bg-[#E84545]" : "bg-[#233864]"
              } cursor-pointer flex flex-col items-center justify-center gap-2`}
            >
              <Icon size={18} className="text-white" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="md:hidden fixed top-16 left-0 w-60 bg-[#1A2B4C] border-r border-[#3c5c8f] shadow-lg h-full z-50">
          <div className="flex flex-col divide-y divide-[#3c5c8f]">
            {tabs.map(({ label, icon: Icon }, index) => (
              <div
                key={index}
                onClick={() => handleClick(label)}
                className={`py-4 px-4 ${
                  activeTab === label ? "bg-[#E84545]" : ""
                } cursor-pointer flex items-center gap-3`}
              >
                <Icon size={18} className="text-white" />
                <span className="text-m font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
