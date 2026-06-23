import React, { useState } from 'react';
import type { LanguageType, ThemeType } from '../../types';

interface HeaderProps {
  language: LanguageType;
  theme: ThemeType;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  t: (key: string) => string;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  theme,
  toggleLanguage,
  toggleTheme,
  onOpenAuth,
  t
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Utility top bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:07556720200" className="help-link">
              <i className="fa-solid fa-headset"></i>
              <span>{t('helpdesk')}</span>
            </a>
            <span className="help-link">
              <i className="fa-solid fa-location-dot"></i>
              <span>{t('council_info')}</span>
            </span>
          </div>
          <div className="top-bar-right">
            <div className="top-nav-actions">
              <button
                onClick={() => onOpenAuth('login')}
                className="top-btn"
              >
                {t('login_btn')}
              </button>
              <button
                onClick={() => onOpenAuth('register')}
                className="top-btn top-btn-accent"
              >
                {t('register_btn')}
              </button>

              <button onClick={toggleLanguage} className="lang-toggle" aria-label="Toggle language">
                <i className="fa-solid fa-language"></i>
                <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
              </button>

              <button onClick={toggleTheme} className="toggle-icon-btn" aria-label="Toggle theme">
                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="main-header">
        <div className="container header-inner">
          <a href="#" className="logo-container">
            <img src="/logo.png" alt="Emblem Logo" className="logo-img" />
            <div className="logo-text">
              <h1>{t('header_title')}</h1>
              <p>{t('header_subtitle')}</p>
              <div className="logo-sub-tag">{t('header_sub_tag')}</div>
            </div>
          </a>

          <nav aria-label="Primary Navigation">
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-expanded={mobileOpen}
              aria-label="Toggle Navigation Menu"
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
            <ul className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
              <li><a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_about')}</a></li>
              <li><a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_services')}</a></li>
              <li><a href="#search-doctor" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_doctor')}</a></li>
              <li><a href="#links" className="nav-link" onClick={() => setMobileOpen(false)}>{t('nav_links')}</a></li>
              <li>
                <a
                  href="https://helpdesk.mponline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{ color: 'var(--secondary)' }}
                >
                  <i className="fa-solid fa-comments"></i> <span>{t('nav_grievance')}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
