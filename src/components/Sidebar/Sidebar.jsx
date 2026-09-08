import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Info, 
  LayoutGrid, 
  Briefcase, 
  Users, 
  GraduationCap, 
  Mail, 
  ChevronRight, 
  Target, 
  Compass, 
  Building2, 
  PenTool, 
  Video, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  MapPin, 
  Globe2, 
  Palette, 
  Sparkles, 
  Monitor, 
  Film, 
  Layers, 
  X,
  Globe
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose, currentPage = 'home', onNavigate }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [openDropdown, setOpenDropdown] = useState(null); // 'about' | 'services' | 'portfolio'
  const [openNestedBpo, setOpenNestedBpo] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const clickTimeoutRef = useRef(null);
  const sidebarRef = useRef(null);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, hasDropdown: false, targetId: 'hero' },
    { id: 'about', label: 'About Us', icon: Info, hasDropdown: true, targetId: 'about' },
    { id: 'services', label: 'Services', icon: LayoutGrid, hasDropdown: true, targetId: 'services' },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase, hasDropdown: true, targetId: 'portfolio' },
    { id: 'team', label: 'Team', icon: Users, hasDropdown: false, targetId: 'team' },
    { id: 'careers', label: 'Career', icon: GraduationCap, hasDropdown: false, targetId: 'careers' },
    { id: 'contact', label: 'Contact Us', icon: Mail, hasDropdown: false, targetId: 'contact' },
  ];

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setOpenNestedBpo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll detection for active icon (only when on home page)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      const sectionIds = ['contact', 'careers', 'team', 'testimonials', 'how-we-work', 'why-us', 'portfolio', 'technologies', 'services', 'about', 'hero'];

      for (let id of sectionIds) {
        if (id === 'hero') {
          if (window.scrollY < 350) {
            setActiveSection('hero');
            return;
          }
        } else {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(id);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const currentActive = currentPage !== 'home' ? currentPage : activeSection;

  // Single Click -> Direct Navigation / Page Switch
  const handleSingleClick = (item) => {
    setOpenDropdown(null);
    setOpenNestedBpo(false);
    setActiveSection(item.id);
    if (onClose) onClose();

    if (item.id === 'about') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.id === 'services') {
      if (onNavigate) {
        onNavigate('services');
      } else {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.id === 'team') {
      if (onNavigate) {
        onNavigate('team');
      } else {
        const el = document.getElementById('team');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.id === 'careers') {
      if (onNavigate) {
        onNavigate('careers');
      } else {
        const el = document.getElementById('careers');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.id === 'contact') {
      if (onNavigate) {
        onNavigate('contact');
      } else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.id === 'hero') {
      if (onNavigate) {
        onNavigate('home', 'hero');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (onNavigate) {
        onNavigate('home', item.targetId);
      } else {
        const el = document.getElementById(item.targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Double Click -> Open Dropdown to the Right (if it has submenus)
  const handleDoubleClick = (item) => {
    if (!item.hasDropdown) {
      handleSingleClick(item);
      return;
    }
    
    // Toggle dropdown for this item
    setOpenDropdown((prev) => (prev === item.id ? null : item.id));
    setOpenNestedBpo(false);
  };

  // Debounced Click Handler for Single vs Double Click
  const handleItemClick = (e, item) => {
    e.preventDefault();

    if (clickTimeoutRef.current) {
      // Second click within timeout -> Double Click
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      handleDoubleClick(item);
    } else {
      // First click -> wait to check if double click happens
      clickTimeoutRef.current = setTimeout(() => {
        clickTimeoutRef.current = null;
        handleSingleClick(item);
      }, 250);
    }
  };

  const handleSubItemClick = (targetId) => {
    setOpenDropdown(null);
    setOpenNestedBpo(false);
    if (onClose) onClose();

    if (targetId === 'mission' || targetId === 'vision' || targetId === 'about-story' || targetId === 'about') {
      if (onNavigate) {
        onNavigate('about', targetId);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetId.startsWith('services') || targetId.startsWith('service-')) {
      if (onNavigate) {
        onNavigate('services', targetId);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (onNavigate) {
        onNavigate('home', targetId);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div className="sidebar-mobile-backdrop" onClick={onClose} aria-hidden="true"></div>
      )}

      {/* Slim Fixed Left Icon-Only Sidebar */}
      <aside 
        className={`site-sidebar icon-only-sidebar ${isOpen ? 'is-open' : ''}`} 
        ref={sidebarRef} 
        aria-label="Main Left Icon Navigation"
      >
        
        {/* Top: Compact Brand Emblem / Logo */}
        <div className="sidebar-header compact">
          <a href="#" className="sidebar-logo-link" onClick={() => handleSingleClick(navItems[0])} title="Pravishree Design Co.">
            <img 
              src="/assets/logo-icon.svg" 
              alt="Pravishree Design Co." 
              className="sidebar-emblem-img"
            />
          </a>
          <button 
            className="sidebar-close-btn" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Center: Vertical Icon-Only Menu List */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu-list">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentActive === item.id;
              const isDropdownOpen = openDropdown === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <li 
                  key={item.id} 
                  className={`sidebar-menu-item icon-item-wrap ${item.hasDropdown ? 'has-flyout' : ''}`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    className={`sidebar-icon-btn ${isActive ? 'is-active' : ''} ${isDropdownOpen ? 'is-open' : ''}`}
                    onClick={(e) => handleItemClick(e, item)}
                    title={item.hasDropdown ? `${item.label} (Double-click for dropdown)` : item.label}
                    aria-label={item.label}
                  >
                    <span className="nav-active-indicator" aria-hidden="true"></span>
                    <IconComp size={22} className="sidebar-main-icon" />

                    {/* Small Dot for items with submenus */}
                    {item.hasDropdown && (
                      <span className="sidebar-dropdown-dot" title="Double-click to view submenus"></span>
                    )}

                    {item.id === 'careers' && (
                      <span className="sidebar-hiring-dot" title="We are hiring!"></span>
                    )}
                  </button>

                  {/* HOVER TOOLTIP / LABEL (Appears to the RIGHT of the icon) */}
                  {isHovered && !isDropdownOpen && (
                    <div className="sidebar-hover-tooltip" role="tooltip">
                      <span className="tooltip-text">{item.label}</span>
                      {item.hasDropdown && (
                        <span className="tooltip-hint">Double-click for submenus</span>
                      )}
                    </div>
                  )}

                  {/* DOUBLE-CLICK DROPDOWN 1: About Us (Appears horizontally to the RIGHT) */}
                  {item.id === 'about' && isDropdownOpen && (
                    <div className="sidebar-flyout-menu flyout-about" role="menu">
                      <div className="flyout-header-tag">About Company</div>

                      <button className="flyout-item" onClick={() => handleSubItemClick('mission')}>
                        <div className="flyout-icon-box blue"><Target size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Mission</span>
                          <span className="flyout-desc">Our purpose &amp; client commitments</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('vision')}>
                        <div className="flyout-icon-box teal"><Compass size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Vision</span>
                          <span className="flyout-desc">Building global technological scale</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('about')}>
                        <div className="flyout-icon-box cyan"><Building2 size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">About Company</span>
                          <span className="flyout-desc">Who we are &amp; leadership values</span>
                        </div>
                      </button>
                    </div>
                  )}

                  {/* DOUBLE-CLICK DROPDOWN 2: Services (Appears horizontally to the RIGHT with Nested BPO) */}
                  {item.id === 'services' && isDropdownOpen && (
                    <div className="sidebar-flyout-menu flyout-services" role="menu">
                      <div className="flyout-header-tag">Services &amp; Capabilities</div>

                      <button className="flyout-item" onClick={() => handleSubItemClick('services-designing')}>
                        <div className="flyout-icon-box cyan"><PenTool size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Designing</span>
                          <span className="flyout-desc">Brand identity &amp; UI/UX</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('services-video-editing')}>
                        <div className="flyout-icon-box blue"><Video size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Video Editing</span>
                          <span className="flyout-desc">4K Reels &amp; 3D Motion VFX</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('services-web-development')}>
                        <div className="flyout-icon-box navy"><Code2 size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Web Development</span>
                          <span className="flyout-desc">React, Next.js &amp; portals</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('services-mobile-apps')}>
                        <div className="flyout-icon-box purple"><Smartphone size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Mobile Apps</span>
                          <span className="flyout-desc">iOS &amp; Android solutions</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('services-digital-marketing')}>
                        <div className="flyout-icon-box amber"><TrendingUp size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Digital Marketing</span>
                          <span className="flyout-desc">SEO &amp; performance ads</span>
                        </div>
                      </button>

                      {/* BPO SERVICES with NESTED FLYOUT FURTHER TO THE RIGHT */}
                      <div 
                        className="flyout-nested-trigger-wrap"
                        onMouseEnter={() => setOpenNestedBpo(true)}
                        onMouseLeave={() => setOpenNestedBpo(false)}
                      >
                        <button 
                          className={`flyout-item highlight-bpo ${openNestedBpo ? 'active-nested' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenNestedBpo(!openNestedBpo);
                          }}
                        >
                          <div className="flyout-icon-box teal"><Headphones size={16} /></div>
                          <div className="flyout-text">
                            <span className="flyout-title">BPO Services</span>
                            <span className="flyout-desc">Domestic &amp; Global Desks</span>
                          </div>
                          <ChevronRight size={14} className="flyout-sub-chevron" />
                        </button>

                        {/* NESTED SUBMENU (Further to the Right) */}
                        {openNestedBpo && (
                          <div className="nested-flyout-menu" role="menu">
                            <div className="flyout-header-tag teal-tag">BPO Delivery Desks</div>
                            
                            <button className="flyout-item" onClick={() => handleSubItemClick('services-bpo-domestic')}>
                              <div className="flyout-icon-box teal"><MapPin size={15} /></div>
                              <div className="flyout-text">
                                <span className="flyout-title">Domestic BPO</span>
                                <span className="flyout-desc">Regional multi-lingual voice &amp; chat</span>
                              </div>
                            </button>

                            <button className="flyout-item" onClick={() => handleSubItemClick('services-bpo-international')}>
                              <div className="flyout-icon-box sky"><Globe2 size={15} /></div>
                              <div className="flyout-text">
                                <span className="flyout-title">International BPO</span>
                                <span className="flyout-desc">24/7 US/UK shifts, medical billing &amp; AI data</span>
                              </div>
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                  {/* DOUBLE-CLICK DROPDOWN 3: Portfolio (Appears horizontally to the RIGHT) */}
                  {item.id === 'portfolio' && isDropdownOpen && (
                    <div className="sidebar-flyout-menu flyout-portfolio" role="menu">
                      <div className="flyout-header-tag">Creative &amp; Tech Works</div>

                      <button className="flyout-item" onClick={() => handleSubItemClick('portfolio')}>
                        <div className="flyout-icon-box cyan"><Palette size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Posters</span>
                          <span className="flyout-desc">Keynote &amp; branding graphics</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('portfolio')}>
                        <div className="flyout-icon-box purple"><Sparkles size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Logo</span>
                          <span className="flyout-desc">Visual identity systems</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('portfolio')}>
                        <div className="flyout-icon-box blue"><Monitor size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Websites</span>
                          <span className="flyout-desc">Enterprise SaaS &amp; web portals</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('portfolio')}>
                        <div className="flyout-icon-box red"><Film size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">VE Works</span>
                          <span className="flyout-desc">Commercial video editing &amp; VFX</span>
                        </div>
                      </button>

                      <button className="flyout-item" onClick={() => handleSubItemClick('portfolio')}>
                        <div className="flyout-icon-box teal"><Layers size={16} /></div>
                        <div className="flyout-text">
                          <span className="flyout-title">Softwares (Custom)</span>
                          <span className="flyout-desc">Bespoke ERPs &amp; telemetry tools</span>
                        </div>
                      </button>
                    </div>
                  )}

                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Footer Area */}
        <div className="sidebar-footer compact">
          <button 
            className="sidebar-icon-footer-btn"
            onClick={() => handleSingleClick(navItems[6])}
            title="Contact Us / Let's Talk"
            aria-label="Contact Us"
          >
            <Globe size={18} className="sidebar-globe-icon" />
          </button>
        </div>

      </aside>
    </>
  );
}
