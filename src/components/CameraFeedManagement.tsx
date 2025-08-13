import { ChevronLeft, Pencil, Trash2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CameraFeedManagement = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    { name: "Cam 01", type: "RTSP", location: "BBSR", status: "Active", created: "2025-07-15", time: "05:17" },
    { name: "Cam 02", type: "HTTP", location: "DEL", status: "Active", created: "2025-07-16", time: "10:45" },
    { name: "Cam 03", type: "WebRTC", location: "BOM", status: "Inactive", created: "2025-07-17", time: "14:30" },
    { name: "Cam 04", type: "RTSP", location: "BLR", status: "Maintenance", created: "2025-07-18", time: "08:15" },
  ]);

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-yellow-100 text-yellow-800",
    Maintenance: "bg-blue-100 text-blue-800",
  };

  const handleDelete = (index: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this camera feed?");
    if (confirmed) {
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    }
  };

  return (
    <div className="p-4 sm:p-5 w-full overflow-x-auto bg-[#102b5b] text-white">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-5">
        <Button
          variant="ghost"
          className="p-1 rounded-full hover:bg-gray-700 text-white flex-shrink-0"
          onClick={() => navigate("/Camera")}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>
        <div className="flex flex-1 justify-between items-center gap-2 sm:gap-3 min-w-0">
          <h3 className="text-base sm:text-xl font-bold text-white truncate">
            CAMERA FEED MANAGEMENT
          </h3>
          <Button
            className="bg-white hover:bg-gray-100 text-[#102b5b] font-medium text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 flex-shrink-0"
            onClick={() => navigate("/CameraForm")}
          >
            Add Camera
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full rounded-lg border border-gray-500">
        <table className="min-w-[600px] sm:min-w-full w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="px-4 py-3 font-semibold text-white text-sm sm:text-base">Name</th>
              <th className="px-4 py-3 font-semibold text-white text-sm sm:text-base">Type</th>
              <th className="px-4 py-3 font-semibold text-white text-sm sm:text-base">Location</th>
              <th className="px-4 py-3 font-semibold text-white text-sm sm:text-base">Status</th>
              <th className="px-4 py-3 font-semibold text-white text-sm sm:text-base">Created</th>
              <th className="px-4 py-3 font-semibold text-white text-sm sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-gray-400" : "bg-gray-500"}>
                <td className="px-4 py-3 text-gray-900 text-sm sm:text-base">{row.name}</td>
                <td className="px-4 py-3 text-gray-900 text-sm sm:text-base">{row.type}</td>
                <td className="px-4 py-3 text-gray-900 text-sm sm:text-base">{row.location}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[row.status as keyof typeof statusColors]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-800 text-sm sm:text-base">
                  <span className="block sm:inline">{row.created}</span>{" "}
                  <span className="text-gray-800">{row.time}</span>
                </td>
                <td className="px-4 py-3 flex gap-2 sm:gap-3 items-center">
                  <button className="p-1 rounded hover:bg-gray-500 transition-colors">
                    <Pencil className="w-5 h-5 text-gray-800 hover:text-white" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-500 transition-colors">
                    <Play className="w-5 h-5 text-gray-800 hover:text-white" />
                  </button>
                  <button
                    className="p-1 rounded hover:bg-gray-500 transition-colors"
                    onClick={() => handleDelete(idx)}
                  >
                    <Trash2 className="w-5 h-5 text-gray-800 hover:text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CameraFeedManagement;
