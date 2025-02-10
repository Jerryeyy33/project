
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

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchCentreBotany from './components/Research/ResearchCentreBotany';
import ResearchCentreChemistry from './components/Research/ResearchCentreChemistry';
import ResearchCentreCommerce from './components/Research/ResearchCentreCommerce';
import ResearchCentreComputerScience from './components/Research/ResearchCentreComputerScience';
import ResearchCentreEconomics from './components/Research/ResearchCentreEconomics';
import ResearchCentreEnglish from './components/Research/ResearchCentreEnglish.tsx';
import ResearchCentreGeography from './components/Research/ResearchCentreGeography';
import ResearchCentreHindi from './components/Research/ResearchCentreHindi';
import ResearchCentreMathematics from './components/Research/ResearchCentreMathematics';
import ResearchCentrePhysics from './components/Research/ResearchCentrePhysics';
import ResearchCentrePsychology from './components/Research/ResearchCentrePsychology';
import ResearchPolicy from './components/Research/ResearchPolicy';
//campuslife components
import { Routes, Route } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Book, Heart, Building, GraduationCap, Bike, Palette } from 'lucide-react';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import ExistingComponent from './ExistingComponent'; // Preserve any existing functionality

export const sections = [
  {
    icon: Palette,
    title: "Arts & Culture",
    slug: "arts-and-culture",
    image: "https://pdearmacs.edu.in/gallery/35/36/Cultural%20Performance%20by%20College%20Girls.JPG",
    description: "Immerse yourself in a vibrant arts scene that spans visual arts, music, theater, and dance.",
    features: [
      "Student-run galleries and exhibitions",
      "Performing arts and theaters",
      "Cultural festivals and events"
    ],
    content: `Our Arts & Culture program provides students with numerous opportunities to explore their creative passions and experience diverse artistic expressions. From student-led exhibitions to professional performances, our campus buzzes with cultural activities throughout the year.

    The Arts Center serves as a hub for creativity, featuring multiple galleries, performance spaces. Students can participate in various artistic disciplines, including:
    
    • Performing Arts: Theater productions, dance recitals, and musical concerts
    • Cultural Programs: guest artist workshops, and cultural exchange events
    • Visual Arts: Painting, sculpture, and digital media
    
    Whether you're an aspiring artist or simply appreciate the arts, you'll find countless ways to engage with our vibrant creative community.`,
    galleryImages: [
      "https://pdearmacs.edu.in/gallery/34/35/Days%201.JPG",
      "https://pdearmacs.edu.in/gallery/34/35/Days%205.JPG",
      "https://pdearmacs.edu.in/gallery/34/35/Days%203.JPG",
      "https://pdearmacs.edu.in/gallery/34/35/Days%202.JPG",
      "https://pdearmacs.edu.in/gallery/35/36/Cultural%20performance%20by%20college%20Students.JPG",
      "https://pdearmacs.edu.in/gallery/35/36/Annual%20Prize%20Distribution%20Ceremony-Cultural%20Event.JPG",
      "https://pdearmacs.edu.in/gallery/35/36/Cultural%20Team.JPG"
    ],
  },
  {
    icon: Building,
    title: "Sports & Gym",
    slug: "sports-and-gym",
    image: "https://pdearmacs.edu.in/gallery/32/33/DSC_4023.JPG",
    description: "Stay fit and active with our top-class sports facilities and gym.",
    features: [
      "State-of-the-art gymnasium",
      "Indoor and outdoor sports facilities",
      "Fitness programs and coaching",
      "Intercollegiate and intramural sports"
    ],
    content: `Our sports and fitness facilities are designed to promote a healthy and active lifestyle among students. Whether you enjoy competitive sports or personal fitness, we provide excellent resources to support your goals.

    Our offerings include:
    
    • Gymnasium: Fully equipped with modern fitness machines and free weights  
    • Outdoor Fields: Dedicated spaces for football, cricket, and athletics  
    • Indoor Sports: Badminton, table tennis.  
    • Fitness Programs: Yoga, and personal training sessions  
    • Sports Teams: Opportunities to participate in intercollegiate competitions  
    
    Our dedicated trainers and sports coordinators ensure students get the best guidance to achieve their fitness and athletic aspirations.`,
    galleryImages: [
      "https://pdearmacs.edu.in/gallery/32/33/DSC_3814.JPG",
      "https://pdearmacs.edu.in/gallery/32/33/DSC_3821.JPG",
      "https://pdearmacs.edu.in/gallery/32/33/DSC_3825.JPG",
      "https://pdearmacs.edu.in/gallery/32/33/DSC_3829.JPG",
      "https://pdearmacs.edu.in/gallery/32/33/DSC_3878.JPG",
      "https://pdearmacs.edu.in/gallery/32/33/DSC_3905.JPG",
      "https://pdearmacs.edu.in/gallery/32/33/DSC_4027.JPG"
    ]
  },
  {
    icon: Users,
    title: "Guest Visits",
    slug: "guest-visits",
    image: "https://pdearmacs.edu.in/gallery/33/34/DSC_2939.JPG",
    description: "Experience insightful sessions with distinguished guests who share knowledge and inspiration.",
    features: [
      "Renowned speakers and industry experts",
      "Interactive sessions and Q&A",
      "Workshops and networking opportunities"
    ],
    content: `Our Guest Visits program brings esteemed personalities from various fields to interact with students, share experiences, and provide valuable insights. These sessions encourage intellectual growth and offer networking opportunities.
    
    Guests include industry leaders, accomplished alumni, and distinguished scholars who deliver:
    
    • Motivational talks and career guidance
    • Academic and research-based lectures
    • Workshops on skill development and industry trends
    
    Engaging with these professionals allows students to gain a broader perspective on their fields of interest and future career paths.`,
    galleryImages: [
      "https://pdearmacs.edu.in/gallery/33/34/1.png",
      "https://pdearmacs.edu.in/gallery/33/37/1.png",
      "https://pdearmacs.edu.in/gallery/33/37/2.jpg",
      "https://pdearmacs.edu.in/gallery/33/34/DSC_2939.JPG",
    ],
  }
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage sections={sections} />} />
      <Route path="/:slug" element={<SectionPage sections={sections} />} />
      <Route path="/existing" element={<ExistingComponent />} /> {/* Preserve any existing features */}
    </Routes>
  );
}

export default App;



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
          {/* Homepage */}
          <Route path="/" element={<Hero />} />

          {/* Academic & Policies */}
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/curriculum-delivery" element={<CurriculumDelivery />} />
          <Route path="/fee-refund-policy" element={<FeeRefundPolicy />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/physical-academic-facility" element={<PhysicalAcademicFacility />} />
          <Route path="/prospective-plan" element={<ProspectivePlan />} />
          <Route path="/short-term-courses" element={<ShortTermCourses />} />

          {/* Research Section */}
          <Route path="/research/policy" element={<ResearchPolicy />} />
          <Route path="/research/publications/commerce" element={<ResearchPublicationsCommerce />} />
          <Route path="/research/publications/chemistry" element={<ResearchPublicationsChemistry />} />
          <Route path="/research/centres/botany" element={<ResearchCentreBotany />} />
          <Route path="/research/centres/chemistry" element={<ResearchCentreChemistry />} />
          <Route path="/research/centres/commerce" element={<ResearchCentreCommerce />} />
          <Route path="/research/centres/economics" element={<ResearchCentreEconomics />} />
          <Route path="/research/centres/geography" element={<ResearchCentreGeography />} />
          <Route path="/research/centres/english" element={<ResearchCentreEnglish />} />
          <Route path="/research/centres/hindi" element={<ResearchCentreHindi />} />
          <Route path="/research/centres/physics" element={<ResearchCentrePhysics />} />
          <Route path="/research/centres/mathematics" element={<ResearchCentreMathematics />} />
          <Route path="/research/centres/psychology" element={<ResearchCentrePsychology />} />
          <Route path="/research/centres/computer-science" element={<ResearchCentreComputerScience />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          {/* Redirect Unknown Routes to Homepage */}
          <Route path="*" element={<Navigate to="/" />} />
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
