import { useState } from 'react';
import type { ThemeType, LanguageType, FontSizeScale, Doctor } from './types';
import { translations, doctorDatabase } from './data/mockData';

// Component Imports
import { Header } from './components/layout/Header';
import { Marquee } from './components/layout/Marquee';
import { HeroSlider } from './components/features/HeroSlider';
import { StatsSection } from './components/features/StatsSection';
import { AboutSection } from './components/features/AboutSection';
import { ServicesSection } from './components/features/ServicesSection';
import { DoctorSearch } from './components/features/DoctorSearch';
import { LinksSection } from './components/features/LinksSection';
import { Footer } from './components/layout/Footer';
import { ModalAuth } from './components/modals/ModalAuth';
import { ModalService } from './components/modals/ModalService';
import { ModalPdf } from './components/modals/ModalPdf';
import { AccessibilityFab } from './components/layout/AccessibilityFab';

export default function App() {
  const [language, setLanguage] = useState<LanguageType>('en');
  const [theme, setTheme] = useState<ThemeType>('light');
  const [fontSize, setFontSize] = useState<FontSizeScale>('normal');

  // Modal and Tab states
  const [activeModal, setActiveModal] = useState<'auth' | 'service' | 'pdf' | null>(null);
  const [serviceCategory, setServiceCategory] = useState<string>('all');
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');
  const [selectedPdfKey, setSelectedPdfKey] = useState<string | null>(null);

  // Doctor search state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Doctor | null>(null);
  const [searchTriggered, setSearchTriggered] = useState<boolean>(false);

  // Translation helpers
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  };

  const handleHighContrastChange = (checked: boolean) => {
    if (checked) {
      document.documentElement.setAttribute('data-theme', 'high-contrast');
      setTheme('high-contrast');
    } else {
      document.documentElement.removeAttribute('data-theme');
      setTheme('light');
    }
  };

  const scaleText = (size: FontSizeScale) => {
    setFontSize(size);
    if (size === 'large') {
      document.body.classList.add('text-large');
    } else {
      document.body.classList.remove('text-large');
    }
  };

  // Doctor lookup filter
  const handleDoctorSearch = () => {
    setSearchTriggered(true);
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchResult(null);
      return;
    }
    const match = doctorDatabase.find(doc => {
      const regMatch = doc.regNo.toLowerCase() === query;
      const nameEnMatch = doc.nameEn.toLowerCase().includes(query);
      const nameHiMatch = doc.nameHi.toLowerCase().includes(query);
      return regMatch || nameEnMatch || nameHiMatch;
    });
    setSearchResult(match || null);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* A. Header */}
      <Header 
        language={language}
        theme={theme}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        onOpenAuth={() => { setActiveModal('auth'); }}
        t={t}
      />

      {/* B. Scrolling Banner */}
      <Marquee text={t('marquee_alert')} />

      {/* C. Hero Slider */}
      <HeroSlider t={t} />

      {/* D. Stats Overview */}
      <StatsSection t={t} />

      {/* E. About Us Timeline Section */}
      <AboutSection t={t} />

      {/* F. Clickable Services Directory */}
      <ServicesSection 
        language={language}
        serviceCategory={serviceCategory}
        setServiceCategory={setServiceCategory}
        onOpenServiceForm={(title) => { setSelectedServiceTitle(title); setActiveModal('service'); }}
        t={t}
      />

      {/* G. Doctor Lookup Directory */}
      <DoctorSearch 
        language={language}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResult={searchResult}
        searchTriggered={searchTriggered}
        handleSearch={handleDoctorSearch}
        t={t}
      />

      {/* H. Important Links Downloads */}
      <LinksSection 
        onOpenPdf={(key) => { setSelectedPdfKey(key); setActiveModal('pdf'); }}
        t={t}
      />

      {/* I. Footer Address and Credits */}
      <Footer t={t} />

      {/* J. Accessibility fab float */}
      <AccessibilityFab 
        fontSize={fontSize}
        scaleText={scaleText}
        theme={theme}
        handleHighContrastChange={handleHighContrastChange}
        t={t}
      />

      {/* K. Overlay Modals */}
      <ModalAuth 
        isOpen={activeModal === 'auth'}
        onClose={() => setActiveModal(null)}
        language={language}
        t={t}
      />

      <ModalService 
        isOpen={activeModal === 'service'}
        onClose={() => setActiveModal(null)}
        serviceTitle={selectedServiceTitle}
        language={language}
        t={t}
      />

      <ModalPdf 
        isOpen={activeModal === 'pdf'}
        onClose={() => setActiveModal(null)}
        pdfKey={selectedPdfKey}
        language={language}
      />
    </div>
  );
}
