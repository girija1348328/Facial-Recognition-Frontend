import { Eye, Home, Power, User } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate('/CameraPanel'); 
  };

  const handleHomeClick = () => {
    navigate('/Header'); 
  };

  return (
    <nav className="w-full px-4 py-2 bg-[#1C2C4A] text-white sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo - visible on all screens but with different sizing */}
        <div>
          <img 
            src="/IGDroneslogo.png" 
            alt="IG Drones Logo" 
            className="h-6 sm:h-8 w-auto"
          />
        </div>
        
        {/* Icons container */}
        <div className="flex gap-3 sm:gap-3">
          <HoverCard>
            <HoverCardTrigger>
              <Eye 
                size={24}
                className="rounded-full bg-blue-200/30 border border-blue-400/50 p-0.5 sm:p-1 sm:size-6 cursor-pointer hover:bg-blue-100/40 transition-colors"
                aria-label="Video"
                onClick={handleCameraClick}
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-2">Camera Panel</h1>
              <p className="text-sm text-muted-foreground">
                Click to view Camera Panel.
              </p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Home
                size={24}
                className="rounded-full bg-blue-200/30 border border-blue-400/50 p-0.5 sm:p-1 sm:size-6 cursor-pointer hover:bg-blue-100/40 transition-colors"
                aria-label="Home"
                onClick={handleHomeClick}
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-2">Main Menu</h1>
              <p className="text-sm text-muted-foreground">
                Click to view Menu.
              </p>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger>
              <User
                size={24}
                className="rounded-full bg-blue-200/30 border border-blue-400/50 p-0.5 sm:p-1 sm:size-6 cursor-pointer hover:bg-blue-100/40 transition-colors"
                aria-label="Account"
              />
            </HoverCardTrigger>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger>
              <Power 
                size={24}
                className="rounded-full bg-blue-200/30 border border-blue-400/50 p-0.5 sm:p-1 sm:size-6 cursor-pointer hover:bg-blue-100/40 transition-colors"
                aria-label="Power"
              />
            </HoverCardTrigger>
          </HoverCard>
        </div>
      </div>
    </nav>
  );
}