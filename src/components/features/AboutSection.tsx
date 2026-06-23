import React from 'react';

interface AboutSectionProps {
  t: (key: string) => string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section className="section-padding animate-fade-in-up" id="about">
      <div className="container about-grid">
        {/* Column 1: Core Text Description & Features */}
        <div className="about-text">
          <h2>{t('about_title')}</h2>
          
          <div className="about-paragraphs">
            <p>{t('about_desc1')}</p>
            <p>{t('about_desc2')}</p>
          </div>

          <div className="about-features-container">
            <div className="about-feature-item">
              <div className="about-feature-icon icon-primary float-element">
                <i className="fa-solid fa-clipboard-list"></i>
              </div>
              <div className="about-feature-info">
                <h4>{t('about_feat1')}</h4>
              </div>
            </div>
            
            <div className="about-feature-item">
              <div className="about-feature-icon icon-accent float-element">
                <i className="fa-solid fa-user-check"></i>
              </div>
              <div className="about-feature-info">
                <h4>{t('about_feat2')}</h4>
              </div>
            </div>
            
            <div className="about-feature-item">
              <div className="about-feature-icon icon-secondary float-element">
                <i className="fa-solid fa-id-card"></i>
              </div>
              <div className="about-feature-info">
                <h4>{t('about_feat3')}</h4>
              </div>
            </div>
            
            <div className="about-feature-item">
              <div className="about-feature-icon icon-primary-dark float-element">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <div className="about-feature-info">
                <h4>{t('about_feat4')}</h4>
              </div>
            </div>
          </div>
        </div>
        
        {/* Column 2: Vertical Timeline */}
        <div className="about-timeline">
          {/* Event 1976 */}
          <div className="timeline-item">
            <div className="timeline-dot dot-primary"></div>
            <div className="timeline-header">
              <span className="timeline-year year-primary">1976</span>
              <h4>{t('timeline_title_1976')}</h4>
            </div>
            <p>{t('timeline_desc_1976')}</p>
          </div>

          {/* Event 1978 */}
          <div className="timeline-item">
            <div className="timeline-dot dot-accent"></div>
            <div className="timeline-header">
              <span className="timeline-year year-accent">1978</span>
              <h4>{t('timeline_title_1978')}</h4>
            </div>
            <p>{t('timeline_desc_1978')}</p>
          </div>

          {/* Event 1996 */}
          <div className="timeline-item">
            <div className="timeline-dot dot-primary"></div>
            <div className="timeline-header">
              <span className="timeline-year year-primary">1996</span>
              <h4>{t('timeline_title_1996')}</h4>
            </div>
            <p>{t('timeline_desc_1996')}</p>
          </div>

          {/* Present State */}
          <div className="timeline-item">
            <div className="timeline-dot dot-secondary"></div>
            <div className="timeline-header">
              <span className="timeline-year year-secondary">Present</span>
              <h4>{t('timeline_title_present')}</h4>
            </div>
            <p>{t('timeline_desc_present')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};



