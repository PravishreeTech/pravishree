import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MobileHeader from './components/Sidebar/MobileHeader';
import TechBackground3D from './components/ThreeCanvas/TechBackground3D';
import TopHeroShowcase from './components/TopHeroShowcase/TopHeroShowcase';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import TeamSection from './components/TeamSection/TeamSection';
import CareersSection from './components/CareersSection/CareersSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import ApplyJobModal from './components/Common/ApplyJobModal';
import ProjectModal from './components/Common/ProjectModal';
import Toast from './components/Common/Toast';
import InitialLoader from './components/Common/InitialLoader';
import ScrollProgress from './components/Common/ScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState('Web & App Development');
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize smooth scroll reveal observer
  useScrollReveal();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenContactWithService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      
      {/* 1. Subtle Initial Brand Preloader (650ms) */}
      <InitialLoader />

      {/* 2. Scroll Progress Indicators (Top & Right Edge) */}
      <ScrollProgress />

      {/* 3. 3D WebGL Background Canvas (Subtle & Low Opacity) */}
      <TechBackground3D />

      {/* 4. Top Mobile Bar (Visible only on screens < 1024px) */}
      <MobileHeader 
        onToggleSidebar={() => setIsSidebarOpen(true)} 
      />

      {/* 5. Permanent Fixed Left Icon Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* 6. Main Content Area */}
      <div className="main-content-layout">
        <main id="main-content">
          
          {/* TOP HERO: 6-Slide Showcase Carousel as the Main Visual Entrance */}
          <TopHeroShowcase />

          {/* Company Introduction & Mission / Vision */}
          <AboutSection />

          {/* Services Grid (Designing, Video, Web, Apps, Marketing, BPO Domestic & International) */}
          <ServicesSection 
            onSelectService={handleOpenContactWithService} 
          />

          {/* Why Choose Us & Tech Stack */}
          <WhyChooseUs />

          {/* Portfolio Showcase */}
          <PortfolioSection 
            onOpenProjectModal={(proj) => setSelectedProject(proj)} 
          />

          {/* Core Team Leadership */}
          <TeamSection />

          {/* Hiring & Careers */}
          <CareersSection 
            onOpenApplyModal={(job) => setSelectedJob(job)} 
          />

          {/* Contact Us */}
          <ContactSection 
            selectedService={selectedService}
            onFormSuccess={showToast}
          />

        </main>

        {/* Footer */}
        <Footer 
          onOpenContact={() => handleOpenContactWithService('Web & App Development')} 
        />
      </div>

      {/* Interactive Modals */}
      {selectedJob && (
        <ApplyJobModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)}
          onSuccess={showToast}
        />
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Feedback Toast */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}

    </div>
  );
}
