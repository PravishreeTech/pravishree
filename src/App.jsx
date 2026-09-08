import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Sidebar from './components/Sidebar/Sidebar';
import MobileHeader from './components/Sidebar/MobileHeader';
import TechBackground3D from './components/ThreeCanvas/TechBackground3D';
import TopHeroShowcase from './components/TopHeroShowcase/TopHeroShowcase';
import AboutSection from './components/AboutSection/AboutSection';
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import TeamPage from './components/TeamPage/TeamPage';
import CareersPage from './components/CareersPage/CareersPage';
import ContactPage from './components/ContactPage/ContactPage';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ProcessSection from './components/ProcessSection/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import TeamSection from './components/TeamSection/TeamSection';
import CareersSection from './components/CareersSection/CareersSection';
import FinalCTASection from './components/FinalCTASection/FinalCTASection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import ApplyJobModal from './components/Common/ApplyJobModal';
import ProjectModal from './components/Common/ProjectModal';
import Toast from './components/Common/Toast';
import ScrollProgress from './components/Common/ScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'services' | 'team' | 'careers' | 'contact'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState('Web & App Development');
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize smooth scroll reveal observer
  useScrollReveal();

  // Handle URL hash changes for deep linking / back-forward browser navigation
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#about-page' || hash === '#mission' || hash === '#vision' || hash === '#about-story' || hash === '#values' || hash === '#milestones') {
        setCurrentPage('about');
      } else if (hash === '#services' || hash === '#services-page' || hash.startsWith('#services-') || hash.startsWith('#service-')) {
        setCurrentPage('services');
      } else if (hash === '#portfolio' || hash === '#portfolio-page' || hash.startsWith('#portfolio-')) {
        setCurrentPage('portfolio');
      } else if (hash === '#team' || hash === '#team-page' || hash === '#leadership' || hash.startsWith('#team-')) {
        setCurrentPage('team');
      } else if (hash === '#careers' || hash === '#career' || hash === '#careers-page' || hash.startsWith('#career-') || hash.startsWith('#job-')) {
        setCurrentPage('careers');
      } else if (hash === '#contact' || hash === '#contact-us' || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (hash === '#home' || hash === '#hero' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);
    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, []);

  // Initialize Lenis 60fps momentum smooth scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [currentPage]);

  const handleNavigate = (page, targetElementId) => {
    if (page === 'about') {
      setCurrentPage('about');
      window.history.pushState(null, '', targetElementId ? `#${targetElementId}` : '#about');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetElementId && targetElementId !== 'about') {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (page === 'services') {
      setCurrentPage('services');
      window.history.pushState(null, '', targetElementId ? `#${targetElementId}` : '#services');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetElementId && targetElementId !== 'services') {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (page === 'portfolio') {
      setCurrentPage('portfolio');
      window.history.pushState(null, '', targetElementId ? `#${targetElementId}` : '#portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetElementId && targetElementId !== 'portfolio') {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (page === 'team') {
      setCurrentPage('team');
      if (targetElementId && targetElementId !== 'team') {
        setSelectedTeamMemberId(targetElementId);
      }
      window.history.pushState(null, '', targetElementId ? `#${targetElementId}` : '#team');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetElementId && targetElementId !== 'team') {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (page === 'careers' || page === 'career') {
      setCurrentPage('careers');
      window.history.pushState(null, '', targetElementId ? `#${targetElementId}` : '#careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetElementId && targetElementId !== 'careers') {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (page === 'contact' || page === 'contact-us') {
      setCurrentPage('contact');
      window.history.pushState(null, '', targetElementId ? `#${targetElementId}` : '#contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetElementId && targetElementId !== 'contact') {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      setCurrentPage('home');
      if (!targetElementId || targetElementId === 'hero') {
        window.history.pushState(null, '', '#home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.history.pushState(null, '', `#${targetElementId}`);
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenContactWithService = (serviceTitle) => {
    setCurrentPage('contact');
    setSelectedService(serviceTitle);
    window.history.pushState(null, '', '#contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      
      {/* 1. Scroll Progress Indicators (Top & Right Edge) */}
      <ScrollProgress />

      {/* 3. 3D WebGL Background Canvas (Preserved Network Sphere Canvas) */}
      <TechBackground3D />

      {/* 4. Top Mobile Bar (Visible only on screens < 1024px) */}
      <MobileHeader 
        onToggleSidebar={() => setIsSidebarOpen(true)} 
        onNavigate={handleNavigate}
      />

      {/* 5. Permanent Fixed Left Icon Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 6. Main Content Area */}
      <div className="main-content-layout">
        <main id="main-content">
          
          {currentPage === 'about' ? (
            /* Dedicated About Us Page View */
            <AboutPage 
              onNavigateHome={() => handleNavigate('home', 'hero')}
              onOpenContact={handleOpenContactWithService}
            />
          ) : currentPage === 'services' ? (
            /* Dedicated Redesigned Services Page View */
            <ServicesPage 
              onNavigateHome={() => handleNavigate('home', 'hero')}
              onOpenContact={handleOpenContactWithService}
            />
          ) : currentPage === 'portfolio' ? (
            /* Dedicated Portfolio Page View */
            <PortfolioPage 
              onNavigateHome={() => handleNavigate('home', 'hero')}
              onOpenProjectModal={(proj) => setSelectedProject(proj)}
              onOpenContact={handleOpenContactWithService}
            />
          ) : currentPage === 'team' ? (
            /* Dedicated Team / Leadership Page View */
            <TeamPage 
              initialMemberId={selectedTeamMemberId}
              onNavigateHome={() => handleNavigate('home', 'hero')}
              onOpenContact={handleOpenContactWithService}
            />
          ) : currentPage === 'careers' ? (
            /* Dedicated Career Page View */
            <CareersPage 
              onNavigateHome={() => handleNavigate('home', 'hero')}
              onOpenApplyModal={(job) => setSelectedJob(job)}
            />
          ) : currentPage === 'contact' ? (
            /* Dedicated Contact Us Page View */
            <ContactPage 
              onNavigateHome={() => handleNavigate('home', 'hero')}
              onFormSuccess={showToast}
            />
          ) : (
            /* Main Home Page Multi-Section Layout */
            <>
              {/* 1. HERO: Preserved 6-Slide Showcase Carousel & 3D Visuals */}
              <TopHeroShowcase />

              {/* 2. ABOUT: More Than Technology. We Build Possibilities. */}
              <AboutSection />

              {/* 3. SERVICES: 6 Core Official Service Cards Grid */}
              <ServicesSection 
                onSelectService={handleOpenContactWithService} 
              />

              {/* 4. PORTFOLIO: Ideas Into Impact (Large Visual Presentation) */}
              <PortfolioSection 
                onOpenProjectModal={(proj) => setSelectedProject(proj)} 
              />

              {/* 6. WHY PRAVISHREE: 6 Feature Points with Alternating Reveals */}
              <WhyChooseUs />

              {/* 7. HOW WE WORK: Horizontal / Vertical Interactive Process Timeline */}
              <ProcessSection />

              {/* 8. TESTIMONIALS: What Our Clients Say */}
              <TestimonialsSection />

              {/* 9. TEAM: Core Leadership Interactive Preview */}
              <TeamSection 
                onNavigateToTeam={(memberId) => handleNavigate('team', memberId)}
              />

              {/* 10. CAREERS: Hiring Opportunities */}
              <CareersSection 
                onOpenApplyModal={(job) => setSelectedJob(job)} 
              />

              {/* 11. FINAL CTA: Let's Build Something Extraordinary Together */}
              <FinalCTASection />

              {/* 12. CONTACT: Contact Form */}
              <ContactSection 
                selectedService={selectedService}
                onFormSuccess={showToast}
              />
            </>
          )}

        </main>

        {/* 13. FOOTER */}
        <Footer 
          onOpenContact={() => handleOpenContactWithService('Web & App Development')} 
          onNavigate={handleNavigate}
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

