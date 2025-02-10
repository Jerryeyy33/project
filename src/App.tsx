import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Research Components
import ResearchCentreBotany from "./components/Research/ResearchCentreBotany";
import ResearchCentreChemistry from "./components/Research/ResearchCentreChemistry";
import ResearchCentreCommerce from "./components/Research/ResearchCentreCommerce";
import ResearchCentreComputerScience from "./components/Research/ResearchCentreComputerScience";
import ResearchCentreEconomics from "./components/Research/ResearchCentreEconomics";
import ResearchCentreEnglish from "./components/Research/ResearchCentreEnglish";
import ResearchCentreGeography from "./components/Research/ResearchCentreGeography";
import ResearchCentreHindi from "./components/Research/ResearchCentreHindi";
import ResearchCentreMathematics from "./components/Research/ResearchCentreMathematics";
import ResearchCentrePhysics from "./components/Research/ResearchCentrePhysics";
import ResearchCentrePsychology from "./components/Research/ResearchCentrePsychology";
import ResearchPolicy from "./components/Research/ResearchPolicy";
import ResearchPublicationsCommerce from "./components/Research/Pages/ResearchPublicationsCommerce";
import ResearchPublicationsChemistry from "./components/Research/Pages/ResearchPublicationChemistry";

// Pages Components
import Academic from "./components/Academics/Academic";
import Admission from "./components/Academics/Admission";
import CurriculumDelivery from "./components/Academics/CurriculumDelivery";
import FeeRefundPolicy from "./components/Academics/FeeRefundPolicy";
import Mentor from "./components/Academics/Mentor";
import PhysicalAcademicFacility from "./components/Academics/PhysicalAcademicFacility";
import ProspectivePlan from "./components/Academics/ProspectivePlan";
import ShortTermCourses from "./components/Academics/ShortTermCourses";

// Auth Components
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;

  const renderContent = () => {
    switch (pathname) {
      case '/research/policy':
        return <ResearchPolicy />;
      case '/research/centres/botany':
        return <ResearchCentreBotany />;
      case '/research/centres/chemistry':
        return <ResearchCentreChemistry />;
      case '/research/centres/commerce':
        return <ResearchCentreCommerce />;
      case '/research/centres/economics':
        return <ResearchCentreEconomics />;
      case '/research/centres/geography':
        return <ResearchCentreGeography />;
      case '/research/centres/english':
        return <ResearchCentreEnglish />;
      case '/research/centres/hindi':
        return <ResearchCentreHindi />;
      case '/research/centres/physics':
        return <ResearchCentrePhysics />;
      case '/research/centres/mathematics':
        return <ResearchCentreMathematics />;
      case '/research/centres/psychology':
        return <ResearchCentrePsychology />;
      case '/research/centres/computer-science':
        return <ResearchCentreComputerScience />;
      default:
        return <Hero />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/research/policy" element={<ResearchPolicy />} />
          <Route path="/research/publications/commerce" element={<ResearchPublicationsCommerce />} />
          <Route path="/research/publications/chemistry" element={<ResearchPublicationsChemistry />} />
          <Route path="/research/centres/botany" element={<ResearchCentreBotany />} />
          <Route path="/research/centres/chemistry" element={<ResearchCentreChemistry />} />
          <Route path="/research/centres/commerce" element={<ResearchCentreCommerce />} />
          <Route path="/research/centres/computer-science" element={<ResearchCentreComputerScience />} />
          <Route path="/research/centres/economics" element={<ResearchCentreEconomics />} />
          <Route path="/research/centres/english" element={<ResearchCentreEnglish />} />
          <Route path="/research/centres/geography" element={<ResearchCentreGeography />} />
          <Route path="/research/centres/hindi" element={<ResearchCentreHindi />} />
          <Route path="/research/centres/mathematics" element={<ResearchCentreMathematics />} />
          <Route path="/research/centres/physics" element={<ResearchCentrePhysics />} />
          <Route path="/research/centres/psychology" element={<ResearchCentrePsychology />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {renderContent()}
      <Footer />
    </div>

  );
}

export default App;