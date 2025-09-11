import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/homepage";
import ChatbotPage from "./pages/chatbotpage";
import BrainPage from "./pages/brainpage";
import CancerPage from "./pages/cancerpage";
import EyePage from "./pages/eyepage";
import HospitalPage from "./pages/hospitalpage";
import ChestPage from "./pages/chestpage";
import SkinPage from "./pages/skinpage";
import MainLayout from "./components/mainlayout";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/brain" element={<BrainPage />} />
          <Route path="/skin" element={<SkinPage />} />
          <Route path="/cancer" element={<CancerPage />} />
          <Route path="/eye" element={<EyePage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/chest" element={<ChestPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
