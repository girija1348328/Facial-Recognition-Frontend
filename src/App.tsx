import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import CameraPanel from "./components/CameraPanel";
import CameraFeed from "./components/CameraFeed";

function AppContent() {
  const location = useLocation();
  const isCameraFeed = location.pathname.startsWith("/CameraFeed");

  return (
    <div className="min-h-screen flex flex-col bg-[#102b5b] text-white">
      {!isCameraFeed && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/CameraPanel" element={<CameraPanel />} />
          <Route path="/CameraFeed/:id" element={<CameraFeed />} />
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
