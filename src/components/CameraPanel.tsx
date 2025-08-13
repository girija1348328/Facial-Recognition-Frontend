import { useNavigate } from "react-router-dom";

function CameraPanel() {
  const totalCameras = 4;
  const navigate = useNavigate();

  const items = Array.from({ length: totalCameras }, (_, i) => ({
    id: i + 1,
    name: `Camera ${i + 1}`,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 
                    grid-rows-4 sm:grid-rows-2 md:grid-rows-2 
                    h-screen w-100vh gap-[2px] bg-black">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-[#1a1a1a] flex items-center justify-center text-white text-sm border border-white relative cursor-pointer"
          onClick={() => navigate(`/CameraFeed/${item.id - 1}`)}
        >
          <span className="absolute top-2 left-2 text-xs bg-black px-2 py-1 rounded opacity-70">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CameraPanel;
