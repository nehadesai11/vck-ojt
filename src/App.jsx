import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import Home from "./pages/Home";
import ChatbotComponent from "./components/Chatboot/ChatbotComponents"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Neha Desai"
          studentPhotoUrl="/images/WhatsApp Image 2025-06-13 at 17.05.51_4720a7ff.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/coursespage" element={<CoursesPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/admissionspage" element={<AdmissionsPage />} />
        </Routes>
        <ChatbotComponent />
      </Router>
    </>

  )
}

export default App;