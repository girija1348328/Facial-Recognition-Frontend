import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import CameraPanel from "./components/CameraPanel";
import CameraFeed from "./components/CameraFeed";
import { Header } from "./components/Header";
import Camera from "./components/Camera";
import Intelligent from "./components/Intelligent";
import Settings from "./components/Settings";
import CameraFeedManagement from "./components/CameraFeedManagement";
import CameraForm from "./components/CameraForm";
import Accounts from "./components/Accounts";
import Video from "./components/Video";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide Header & Navbar on CameraFeed and CameraPanel
  const isCameraFeed = location.pathname.startsWith("/CameraFeed");
  const isCameraPanel = location.pathname === "/CameraPanel";
  const isCameraForm = location.pathname === "/CameraForm";
  const hideHeaderNavbar = isCameraFeed || isCameraPanel || isCameraForm;

  // Handle closing CameraForm
  const handleCloseCameraForm = () => {
    navigate('/CameraFeedManagement');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#102b5b] text-white">
      <Navbar />
      {!hideHeaderNavbar && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/Video" element={<Video />} />
          <Route path="/Camera" element={<Camera />} />
          <Route path="/Intelligent" element={<Intelligent />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Accounts" element={<Accounts />} />
          <Route path="/CameraPanel" element={<CameraPanel />} />
          <Route path="/CameraFeed/:id" element={<CameraFeed />} />
          <Route path="/CameraFeedManagement" element={<CameraFeedManagement />} />
          <Route 
            path="/CameraForm" 
            element={<CameraForm onClose={handleCloseCameraForm} />} 
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;