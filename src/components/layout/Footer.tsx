import React from 'react';

interface FooterProps {
  t: (key: string) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <div className="footer-info-logo">
            <img src="/logo.png" alt="Logo White" className="footer-logo-img" />
            <h3>{t('foot_brand')}</h3>
          </div>
          <p>{t('foot_desc')}</p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="Facebook Link"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="footer-social-link" aria-label="Twitter Link"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn Link"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h4>{t('foot_links_title')}</h4>
          <ul className="footer-links">
            <li><a href="#about"><i className="fa-solid fa-chevron-right"></i> <span>{t('foot_lnk_about')}</span></a></li>
            <li><a href="#services"><i className="fa-solid fa-chevron-right"></i> <span>{t('foot_lnk_services')}</span></a></li>
            <li><a href="#search-doctor"><i className="fa-solid fa-chevron-right"></i> <span>{t('foot_lnk_doctor')}</span></a></li>
            <li><a href="#links"><i className="fa-solid fa-chevron-right"></i> <span>{t('foot_lnk_downloads')}</span></a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>{t('foot_gov_title')}</h4>
          <ul className="footer-links">
            <li><a href="https://www.mponline.gov.in" target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> MPOnline Portal</a></li>
            <li><a href="http://mp.gov.in" target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> MP Govt. Official</a></li>
            <li><a href="https://ayush.mp.gov.in" target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> Ayush Department MP</a></li>
            <li><a href="https://main.ayush.gov.in" target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> Ministry of AYUSH India</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>{t('foot_contact_title')}</h4>
          <div className="footer-contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <p>{t('foot_address')}</p>
          </div>
          <div className="footer-contact-item">
            <i className="fa-solid fa-phone"></i>
            <p>0755 - 2552629</p>
          </div>
          <div className="footer-contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p>homoeopathycouncils@yahoo.com</p>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>{t('foot_copy')}</p>
        <div className="footer-mponline-logo">
          <span>{t('foot_powered')}</span>
          <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff', backgroundColor: 'var(--primary)', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid var(--secondary)' }}>
            MPOnline<span style={{ color: 'var(--secondary)' }}>.gov.in</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
