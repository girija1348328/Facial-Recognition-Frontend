import React, { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CameraForm = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside modal and not on select content
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.radix-select-content')
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <Card 
        ref={modalRef}
        className="w-full max-w-md bg-white shadow-2xl border-0 mx-2 sm:mx-0"
      >
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900">
            Add New Camera
          </h3>
        </CardHeader>
        
        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          <form className="space-y-4 sm:space-y-6">
            {/* Camera Name Field */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-semibold text-gray-800">
                Camera Name
              </label>
              <Input 
                placeholder="e.g., Cam 05" 
                className="bg-gray-50 border border-gray-300 text-gray-900 h-10 sm:h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Type Field */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-semibold text-gray-800">
                Type
              </label>
              <Select>
                <SelectTrigger 
                  ref={selectRef}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 h-10 sm:h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <SelectValue placeholder="Select camera type" />
                </SelectTrigger>
                <SelectContent className="z-[9999] bg-white border border-gray-300 shadow-lg">
                  <SelectItem value="RTSP" className="hover:bg-gray-100">
                    RTSP
                  </SelectItem>
                  <SelectItem value="HTTP" className="hover:bg-gray-100">
                    HTTP
                  </SelectItem>
                  <SelectItem value="WebRTC" className="hover:bg-gray-100">
                    WebRTC
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Field */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-semibold text-gray-800">
                Location
              </label>
              <Input 
                placeholder="e.g., Main Entrance" 
                className="bg-gray-50 border border-gray-300 text-gray-900 h-10 sm:h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Status Field */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm font-semibold text-gray-800">
                Status
              </label>
              <Select defaultValue="Active">
                <SelectTrigger className="w-full bg-gray-50 border border-gray-300 text-gray-900 h-10 sm:h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="z-[9999] bg-white border border-gray-300 shadow-lg">
                  <SelectItem value="Active" className="hover:bg-gray-100">
                    Active
                  </SelectItem>
                  <SelectItem value="Inactive" className="hover:bg-gray-100">
                    Inactive
                  </SelectItem>
                  <SelectItem value="Maintenance" className="hover:bg-gray-100">
                    Maintenance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 sm:gap-3 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="h-9 sm:h-11 px-4 sm:px-6 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm sm:text-base"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="h-9 sm:h-11 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
              >
                Add Camera
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CameraForm;