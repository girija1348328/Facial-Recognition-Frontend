// src/components/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className="w-full px-4 py-3 bg-[#102b5b] text-white sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[70%] bg-[#102b5b] border-none">
              <div className="flex flex-col space-y-4 pt-16 px-4">
                {[
                  { to: "/CameraPanel", text: "Video" },
                  { to: "/", text: "Camera" },
                  { to: "/", text: "Intelligent" },
                  { to: "/Settings", text: "Settings" }
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="text-white/80 hover:text-white py-2 hover:underline underline-offset-8"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Brand name */}
        <NavLink 
          to="/" 
          className="text-lg font-semibold whitespace-nowrap lg:ml-0 mx-auto lg:mx-0"
          onClick={() => setMenuOpen(false)}
        >
          Employee Facial Detection
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-6 mx-auto">
          {[
            { to: "/CameraPanel", text: "Video" },
            { to: "/", text: "Camera" },
            { to: "/", text: "Intelligent" },
            { to: "/Settings", text: "Settings" }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `text-white/80 hover:text-white pb-1 hover:underline underline-offset-8 transition-all
                ${isActive ? "text-white underline" : ""}`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <div className="hidden lg:block">
          <img 
            src="/IGDroneslogo.png" 
            alt="IG Drones Logo" 
            className="h-10 w-auto" 
          />
        </div>
      </div>
    </nav>
  );
}
