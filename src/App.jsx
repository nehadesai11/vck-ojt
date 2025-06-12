import React from "react";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import Home from "./pages/Home";
import ChatbotComponent from "./components/Chatboot/ChatbotComponents"
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/home" element = {<Home />} />
          <Route path="/aboutpage" element = {<AboutPage/>} />
          <Route path="/coursespage" element = {<CoursesPage/>} />
          <Route path="/contactpage" element = {<ContactPage/>} />
          <Route path="/admissionspage" element = {<AdmissionsPage/>} />
        </Routes>
        <ChatbotComponent />
      </Router>
  )
}

export default App;