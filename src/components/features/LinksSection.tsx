import React from 'react';

interface LinksSectionProps {
  onOpenPdf: (key: string) => void;
  t: (key: string) => string;
}

export const LinksSection: React.FC<LinksSectionProps> = ({ onOpenPdf, t }) => {
  return (
    <section className="section-padding animate-fade-in-up" id="links">
      <div className="container">
        <div className="section-header">
          <h2>{t('links_title')}</h2>
          <p>{t('links_subtitle')}</p>
        </div>
        
        <div className="links-grid">
          {/* Card 1 */}
          <div 
            className="link-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenPdf('fee_details')}
          >
            <div className="link-card-icon"><i className="fa-solid fa-file-pdf"></i></div>
            <div className="link-card-content">
              <h3>{t('lnk1_title')}</h3>
              <span className="link-card-meta">{t('lnk_pdf_size')} (185 KB)</span>
              <span className="link-view-btn">
                <i className="fa-solid fa-eye"></i>
                <span>{t('lnk_action_view')}</span>
              </span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div 
            className="link-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenPdf('affidavit_revision')}
          >
            <div className="link-card-icon"><i className="fa-solid fa-file-pdf"></i></div>
            <div className="link-card-content">
              <h3>{t('lnk2_title')}</h3>
              <span className="link-card-meta">{t('lnk_pdf_size')} (240 KB)</span>
              <span className="link-view-btn">
                <i className="fa-solid fa-eye"></i>
                <span>{t('lnk_action_view')}</span>
              </span>
            </div>
          </div>
          
          {/* Card 3 */}
          <div 
            className="link-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenPdf('circular_instructions')}
          >
            <div className="link-card-icon"><i className="fa-solid fa-file-pdf"></i></div>
            <div className="link-card-content">
              <h3>{t('lnk3_title')}</h3>
              <span className="link-card-meta">{t('lnk_pdf_size')} (320 KB)</span>
              <span className="link-view-btn">
                <i className="fa-solid fa-eye"></i>
                <span>{t('lnk_action_view')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
